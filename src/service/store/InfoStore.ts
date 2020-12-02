/*
 * @Date: 2020-12-03 02:17:00
 * @LastEditors: Skye Young
 * @LastEditTime: 2020-12-03 02:17:58
 * @FilePath: \official-site-frontend\src\service\store\InfoStore.ts
 */
import { makeAutoObservable, autorun } from 'mobx';

export class InfoStore {
  info: string = '';

  setInfo(newInfo: string) {
    this.info = newInfo;
  }

  private loadInfo() {
    const sessionStorageInfo = window.sessionStorage.getItem('info');
    this.info = sessionStorageInfo ? sessionStorageInfo : this.info;
  }

  private saveInfo() {
    window.sessionStorage.setItem('info', this.info);
  }

  constructor() {
    makeAutoObservable(this);

    this.loadInfo();

    autorun(this.saveInfo.bind(this));
  }
}
