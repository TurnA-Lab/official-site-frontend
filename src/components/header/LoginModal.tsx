import { Modal, Button, Input, Spacer } from '@geist-ui/react';
import React, { useState } from 'react';
import User from '@geist-ui/react-icons/user';
import Key from '@geist-ui/react-icons/key';
import { Field, Form } from 'react-final-form';
import styles from './LoginModal.module.scss';
import toolStyles from '../../asset/stylesheet/tool.module.scss';
import { required } from '../../utils/validators';
import { toast } from 'react-toastify';

const LoginModal = () => {
  const [visible, setVisible] = useState(false);

  const submitAction = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Button auto type="abort" onClick={() => setVisible(true)}>
        登入
      </Button>
      <Modal
        open={visible}
        onClose={() => setVisible(false)}
        wrapClassName={styles.LoginModal}
        width="330px"
      >
        <Modal.Title>登入</Modal.Title>
        <Modal.Content className={styles.LoginModalContent}>
          <Form
            validateOnBlur
            onSubmit={submitAction}
            render={({ handleSubmit, pristine, validating, submitting }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="account"
                  validateFields={['focus']}
                  validate={required(() =>
                    toast.error('请输入账号', { toastId: 1 }),
                  )}
                >
                  {({ input, meta }) => (
                    <Input
                      {...input}
                      icon={<User />}
                      clearable
                      placeholder="输入账号（学号）"
                      className={toolStyles.margin0}
                    />
                  )}
                </Field>

                <Spacer y={0.8}></Spacer>

                <Field
                  name="password"
                  subscription={{ visited: true }}
                  validateFields={['visited']}
                  validate={required(() =>
                    toast.error('请输入密码', { toastId: 2 }),
                  )}
                >
                  {({ input, meta }) => (
                    <Input.Password
                      {...input}
                      icon={<Key />}
                      placeholder="输入密码"
                      className={toolStyles.margin0}
                    />
                  )}
                </Field>

                <Spacer y={0.8}></Spacer>

                <Button
                  type="secondary"
                  disabled={pristine || submitting}
                  loading={validating || submitting}
                  // onClick={() => setVisible(false)}
                >
                  立刻登录
                </Button>
              </form>
            )}
          />
        </Modal.Content>
      </Modal>
    </>
  );
};

export { LoginModal };
