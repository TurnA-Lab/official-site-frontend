import { makeAutoObservable, autorun } from "mobx";

/*
 * @Date: 2020-12-01 22:22:32
 * @LastEditors: Skye Young
 * @LastEditTime: 2020-12-01 22:22:33
 * @FilePath: \official-site-frontend\src\service\store\token.ts
 */
export class TokenStore {
  token: string = '';

  setToken(newToken: string) {
    this.token = newToken;
  }

  private loadToken() {
    const sessionStorageToken = window.sessionStorage.getItem('token');
    this.token = sessionStorageToken ? sessionStorageToken : this.token;
  }

  private saveToken() {
    window.sessionStorage.setItem('token', this.token);
  }

  constructor() {
    makeAutoObservable(this);

    this.loadToken();

    autorun(this.saveToken.bind(this));
  }
}