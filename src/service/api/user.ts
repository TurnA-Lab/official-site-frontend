/*
 * @Date: 2020-12-01 09:59:30
 * @LastEditors: Skye Young
 * @LastEditTime: 2020-12-01 16:01:33
 * @FilePath: \official-site-frontend\src\service\api\user.ts
 */

import Axios, { AxiosResponse } from 'axios';
import { ResultModel } from '../../model/ResultModel';
import { BasicUserModel } from '../../model/UserModel';

interface LoginInfoData {
  name: string;
  token: string;
  role?: string;
  group?: string;
}

const baseUrl = '/user';

const userLogin = (user: BasicUserModel) =>
  Axios.post(
    `${baseUrl}/login`,
    user,
  ).then((res: AxiosResponse<ResultModel<LoginInfoData>>) =>
    res.data.code === 1 ? res.data.data : Promise.reject(res.data.msg),
  );

export { userLogin };
