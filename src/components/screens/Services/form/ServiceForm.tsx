import { Form, Input } from 'antd';
import React from 'react';
import { GlobalDrawer } from 'src/components/shareds';
import { useCreateServiceMutation, useEditServiceMutation } from 'src/services/index.api';
import { TServiceChange } from 'src/services/services/services/services.types';
import { useFormStorageStore } from 'src/store';
import { formMessage } from 'src/utils';

const ServiceForm: React.FC = () => {
  const [form] = Form.useForm();

  const { mutate: addService, isPending: addLoading } = useCreateServiceMutation();
  const { mutate: editService, isPending: editLoading } = useEditServiceMutation();

  const paramsForm = useFormStorageStore((state) => state.paramsForm);

  const onFinish = (values: TServiceChange) => {
    if (paramsForm) {
      editService({ ...values, id: paramsForm.id });
      return;
    }
    addService(values);
  };

  React.useEffect(() => {
    if (paramsForm) form.setFieldsValue(paramsForm);
  }, [paramsForm, form]);
  return (
    <GlobalDrawer form={form} isLoading={addLoading || editLoading}>
      <Form
        name="Service Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="name"
          label="Название"
          rules={[{ required: true, message: formMessage('Название') }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </GlobalDrawer>
  );
};

export { ServiceForm };
