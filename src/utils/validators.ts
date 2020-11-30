/*
 * @Date: 2020-11-30 21:24:21
 * @LastEditors: Skye Young
 * @LastEditTime: 2020-11-30 22:19:59
 * @FilePath: \official-site-frontend\src\utils\validators.ts
 */

export type ValidatorFunc = (value: any) => string | undefined;
export type FailMsg = string | (() => React.ReactText | undefined);

/**
 * 必需
 * @param failMsg 不通过信息，可以为一个函数
 */
const required = (failMsg: FailMsg) => (value: any) =>
  value
    ? undefined
    : (typeof failMsg === 'string' ? failMsg : failMsg()) || 'Required!';

/**
 * 整合验证器
 * @param validators 验证器
 */
const composeValidators = (...validators: ValidatorFunc[]) => (value: string) =>
  validators.reduce(
    (error: string | undefined, validator) => error || validator(value),
    undefined,
  );

export { composeValidators, required };
