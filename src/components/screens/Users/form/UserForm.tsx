import { Form, Input } from 'antd';
import React from 'react';
import { GlobalDrawer } from 'src/components/shareds';
import { UiPhoneIMaskInput } from 'src/components/ui';
import { useCreateUserMutation, useEditUserMutation } from 'src/services/index.api';
import { TUserChange } from 'src/services/users/users/users.types';
import { useFormStorageStore, useNumericStringVault } from 'src/store';
import { formatPhoneStringJoin, formMessage } from 'src/utils';

const UserForm: React.FC = () => {
  const [form] = Form.useForm();

  const { mutate: addUser, isPending: addLoading } = useCreateUserMutation();
  const { mutate: editUser, isPending: editLoading } = useEditUserMutation();

  const paramsForm = useFormStorageStore((state) => state.paramsForm);
  const roleId = useNumericStringVault((state) => state.numericStringVault);

  const onFinish = (values: TUserChange) => {
    if (paramsForm) {
      editUser({
        ...values,
        id: paramsForm.id,
        phone: formatPhoneStringJoin(values.phone),
        role_id: paramsForm.role_id,
      });
      return;
    }
    addUser({
      ...values,
      phone: formatPhoneStringJoin(values.phone),
      role_id: Number(roleId),
    });
  };

  React.useEffect(() => {
    if (paramsForm) form.setFieldsValue({ ...paramsForm, phone: paramsForm?.phone?.substring(4) });
  }, [paramsForm, form]);
  return (
    <GlobalDrawer form={form} isLoading={addLoading || editLoading}>
      <Form
        name="User Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="name"
          label="Ф.И.О"
          rules={[{ required: true, message: formMessage('Ф.И.О') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Телефон"
          rules={[{ required: true, message: formMessage('Телефон') }]}
        >
          <UiPhoneIMaskInput />
        </Form.Item>
        <Form.Item
          name="description"
          label="Описание"
          rules={[{ required: true, message: formMessage('Описание') }]}
        >
          <Input.TextArea autoSize />
        </Form.Item>
        <Form.Item
          name="password"
          label="Пароль"
          rules={[{ required: !paramsForm, message: formMessage('Пароль') }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </GlobalDrawer>
  );
};

export { UserForm };
