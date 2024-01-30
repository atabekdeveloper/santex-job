// eslint-disable-next-line object-curly-newline
import { Checkbox, Form, Image, Input, Select } from 'antd';
import React from 'react';
import { GlobalDrawer } from 'src/components/shareds';
import {
  useCreateBannerMutation,
  useEditBannerMutation,
  useGetServicesQuery,
} from 'src/services/index.api';
import { TBannerChange } from 'src/services/services/banners/banners.types';
import { useFormStorageStore } from 'src/store';
import { formMessage } from 'src/utils';

const BannerForm: React.FC = () => {
  const [form] = Form.useForm();
  const [uploadFile, setUploadFile] = React.useState<string>('');

  const { data: services } = useGetServicesQuery({ limit: 1000 });
  const { mutate: addBanner, isPending: addLoading } = useCreateBannerMutation();
  const { mutate: editBanner, isPending: editLoading } = useEditBannerMutation();

  const paramsForm = useFormStorageStore((state) => state.paramsForm);

  const onChangeUpload = (e: any) => setUploadFile(e.target.files[0]);

  const onFinish = (values: TBannerChange) => {
    if (paramsForm) {
      editBanner({
        ...values,
        id: paramsForm.id,
        image: uploadFile,
        is_public: values.is_public ? 1 : 0,
      });
      return;
    }
    addBanner({ ...values, image: uploadFile, is_public: values.is_public ? 1 : 0 });
  };

  React.useEffect(() => {
    if (paramsForm) form.setFieldsValue(paramsForm);
  }, [paramsForm, form]);
  return (
    <GlobalDrawer form={form} isLoading={addLoading || editLoading}>
      <Form
        name="Banner Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="title"
          label="Название"
          rules={[{ required: true, message: formMessage('Название') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Описание"
          rules={[{ required: true, message: formMessage('Описание') }]}
        >
          <Input.TextArea autoSize />
        </Form.Item>
        <Form.Item
          name="service_id"
          label="Сервис"
          rules={[{ required: true, message: formMessage('Сервис') }]}
        >
          <Select
            showSearch
            optionFilterProp="children"
            filterOption={(input, { label }: any) => {
              const inputLabel = `${label}`;
              return inputLabel.toLowerCase().includes(input.toLowerCase());
            }}
            options={services?.data.map((service) => ({ value: service.id, label: service.name }))}
          />
        </Form.Item>
        <Form.Item
          name="is_public"
          label="Общественный"
          rules={[{ required: true, message: formMessage('Общественный') }]}
          valuePropName="checked"
          initialValue={false}
        >
          <Checkbox>Общественный</Checkbox>
        </Form.Item>
        <Form.Item
          label="Изображение"
          name="image"
          rules={[{ required: !paramsForm, message: formMessage('Изображение') }]}
        >
          <input
            onChange={onChangeUpload}
            className="complaint-modal__upload"
            accept=".jpg, .jpeg, .png"
            type="file"
            multiple
          />
        </Form.Item>
        <Image hidden={!paramsForm} src={paramsForm?.image_url} width={64} height={64} />
      </Form>
    </GlobalDrawer>
  );
};

export { BannerForm };
