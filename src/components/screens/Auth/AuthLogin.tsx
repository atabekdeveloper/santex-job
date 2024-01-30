import { Button, Form, Input } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from 'src/assets/images/santexnika.svg';
import { UiPhoneIMaskInput } from 'src/components/ui';
import { useErrorNotification } from 'src/hooks';
import { TAuthLogin } from 'src/services/auth/auth.types';
import { useAuthLoginMutation } from 'src/services/index.api';
import { useAuthPersistStore } from 'src/store';
import { formatPhoneStringJoin, formMessage } from 'src/utils';

import s from './auth.module.scss';

const AuthLogin: React.FC = () => {
  const [form] = Form.useForm();
  const signIn = useAuthPersistStore((state) => state.signIn);
  const navigate = useNavigate();

  // eslint-disable-next-line object-curly-newline
  const { mutate, isPending, isSuccess, data: loginData, isError, error } = useAuthLoginMutation();

  const onFinish = (values: TAuthLogin) => {
    mutate({ ...values, phone: formatPhoneStringJoin(values.phone) });
  };
  React.useEffect(() => {
    if (isSuccess) {
      signIn({ accessToken: loginData.data.access_token });
      form.resetFields();
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);
  useErrorNotification({ isError, desc: error?.response?.data?.message });
  return (
    <div className={s.auth}>
      <div className={s.body}>
        <div className={s.info}>
          <img src={logo} alt="Logo" />
          <div className={s.content}>
            <h2>Привет, с возвращением</h2>
            <span>Введите свои учетные данные, чтобы продолжить</span>
          </div>
        </div>
        <Form
          form={form}
          name="Login"
          layout="vertical"
          size="large"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item name="phone" rules={[{ required: true, message: formMessage('Телефон') }]}>
            <UiPhoneIMaskInput />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: formMessage('Пароль') }]}>
            <Input.Password placeholder="Пароль" />
          </Form.Item>
          <Button
            type="primary"
            block
            size="large"
            htmlType="submit"
            loading={isPending}
            aria-label="Login"
          >
            Войти
          </Button>
        </Form>
      </div>
    </div>
  );
};

export { AuthLogin };
