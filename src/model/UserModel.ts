/*
 * @Date: 2020-12-01 09:01:07
 * @LastEditors: Skye Young
 * @LastEditTime: 2020-12-03 01:45:36
 * @FilePath: \official-site-frontend\src\model\UserModel.ts
 */

export interface BasicUserModel {
  account: string;
  password: string;
}

export interface UserModel extends BasicUserModel {
  email: string;
  name: string;
  gender: '男' | '女';
  school: string;
  college: string;
  major: string;
  grade: string;
}

export interface UserBasicResultDataModel {
  id: string;
  name: string;
  token: string;
  role?: string;
  group?: string;
}
