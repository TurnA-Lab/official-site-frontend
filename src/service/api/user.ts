/*
 * @Date: 2020-12-01 09:59:30
 * @LastEditors: Skye Young
 * @LastEditTime: 2020-12-03 01:37:29
 * @FilePath: \official-site-frontend\src\service\api\user.ts
 */

import Axios, { AxiosResponse } from 'axios';
import { ResultCode, ResultModel } from '../../model/ResultModel';
import {
  BasicUserModel,
  UserBasicResultDataModel,
} from '../../model/UserModel';

const baseUrl = '/user';

const userLogin = (user: BasicUserModel) =>
  Axios.post(
    `${baseUrl}/login`,
    user,
  ).then((res: AxiosResponse<ResultModel<UserBasicResultDataModel>>) =>
    res.data.code === ResultCode.SUCCESS
      ? res.data.data
      : Promise.reject(res.data.msg),
  );

export { userLogin };
