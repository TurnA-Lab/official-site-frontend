import { Modal, Button, Input, Spacer } from '@geist-ui/react';
import React, { useContext, useState } from 'react';
import User from '@geist-ui/react-icons/user';
import Key from '@geist-ui/react-icons/key';
import { Field, Form } from 'react-final-form';
import styles from './LoginModal.module.scss';
import toolStyles from '../../asset/stylesheet/tool.module.scss';
import {
  requiredValidator,
  accountValidator,
  composeValidators,
} from '../../utils/validators';
import { toast } from 'react-toastify';
import { userLogin } from '../../service/api/user';
import { BasicUserModel } from '../../model/UserModel';
import { GlobalStoreContext } from '../../service/store';

const LoginModal = () => {
  const [visible, setVisible] = useState(false);
  const GlobalStore = useContext(GlobalStoreContext);

  const submitAction = (values: any) =>
    userLogin(values as BasicUserModel)
      .then((data) => {
        setVisible(false);
        GlobalStore.setToken(data.token);
      })
      .catch((err) => toast.error(err));

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
            onSubmit={submitAction}
            render={({ handleSubmit, validating, submitting, invalid }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="account"
                  validate={composeValidators(
                    requiredValidator('请输入账号'),
                    accountValidator('请检查账号格式'),
                  )}
                >
                  {({ input, meta }) => (
                    <>
                      <Input
                        {...input}
                        icon={<User />}
                        clearable
                        placeholder="输入账号（学号）"
                        className={toolStyles.margin0}
                      />
                      {meta.error &&
                        meta.touched &&
                        toast.error(meta.error, {
                          toastId: 1,
                        }) &&
                        undefined}
                    </>
                  )}
                </Field>

                <Spacer y={0.8}></Spacer>

                <Field
                  name="password"
                  validate={requiredValidator('请输入密码')}
                >
                  {({ input, meta }) => (
                    <>
                      <Input.Password
                        {...input}
                        icon={<Key />}
                        placeholder="输入密码"
                        className={toolStyles.margin0}
                      />
                      {meta.error &&
                        meta.touched &&
                        toast.error(meta.error, {
                          toastId: 1,
                        }) &&
                        undefined}
                    </>
                  )}
                </Field>

                <Spacer y={0.8}></Spacer>

                <Button
                  htmlType="submit"
                  type="secondary"
                  disabled={invalid || submitting}
                  loading={validating || submitting}
                >
                  即刻登录
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
