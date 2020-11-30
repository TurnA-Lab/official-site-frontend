/*
 * @Date: 2020-11-30 21:24:31
 * @LastEditors: Skye Young
 * @LastEditTime: 2020-11-30 21:33:52
 * @FilePath: \official-site-frontend\src\utils\boost.ts
 */

/**
 * 整合类名列表为字符串
 * @param classes css 类名
 */
const composeClassNames = (...classes: string[]) =>
  classes.filter((className) => className).join(' ');

export { composeClassNames };
