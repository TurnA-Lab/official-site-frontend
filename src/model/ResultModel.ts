/*
 * @Date: 2020-11-23 19:22:30
 * @LastEditors: Skye Young
 * @LastEditTime: 2020-11-26 14:54:59
 * @FilePath: \websrc\src\model\ResultModel.ts
 */

/**
 * 结果状态码
 */
export enum ResultCode {
  // 失败
  ERROR,
  // 成功
  SUCCESS,
}

/**
 * 结果数据类型
 */
export interface ResultModel<T> {
  // 状态码
  code: ResultCode;
  // 成功后，返回的数据
  data: T;
  // 失败后，返回的信息
  msg: string;
}
