/*
 * @Date: 2020-11-30 21:24:21
 * @LastEditors: Skye Young
 * @LastEditTime: 2020-12-01 15:57:51
 * @FilePath: \official-site-frontend\src\utils\validators.ts
 */
export type ResultType = boolean | React.ReactText | undefined;
export type ValidatorFunc = (value: any) => ResultType;
export type FailMsg = string | (() => ResultType);

/**
 * 整合验证器
 * @param validators 验证器
 */
const composeValidators = (...validators: ValidatorFunc[]) => (value: string) =>
  validators.reduce(
    (error: ResultType, validator) => error || validator(value),
    undefined,
  );

/**
 * 验证结果
 * @param func 验证函数
 */
const validatorResult = (func: ValidatorFunc) => (failMsg: FailMsg) => (
  value: any,
) =>
  func(value) ? undefined : typeof failMsg === 'string' ? failMsg : failMsg();

/**
 * 必须
 */
const required = (value: any) => value;
const requiredValidator = validatorResult(required);

/**
 * 邮件
 */
const eMail = (value: string) =>
  /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
const eMailValidator = validatorResult(eMail);

/**
 * 账户
 */
const account = (value: string) => /^\d{12}$/.test(value);
const accountValidator = validatorResult(account);

export {
  composeValidators,
  requiredValidator,
  eMailValidator,
  accountValidator,
};
