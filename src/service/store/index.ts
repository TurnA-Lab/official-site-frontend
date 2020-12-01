/*
 * @Date: 2020-11-29 23:09:26
 * @LastEditors: Skye Young
 * @LastEditTime: 2020-12-01 16:47:31
 * @FilePath: \official-site-frontend\src\service\store\index.ts
 */
import { autorun, makeAutoObservable } from 'mobx';
import React from 'react';

class GlobalStore {
  theme: string = window.matchMedia(`(prefers-color-scheme: dark)`).matches
    ? 'dark'
    : 'light';

  setTheme(newTheme: string) {
    this.theme = newTheme;
  }

  private loadTheme() {
    const localStorageTheme = window.localStorage.getItem('theme');
    this.theme = localStorageTheme ? localStorageTheme : this.theme;
  }

  private saveTheme() {
    window.localStorage.setItem('theme', this.theme);

    const body = document.body;
    if (this.theme === 'dark') body.classList.add('theme-dark');
    else body.classList.remove('theme-dark');
  }

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

    this.loadTheme();
    this.loadToken();

    autorun(this.saveTheme.bind(this));
    autorun(this.saveToken.bind(this));
  }
}

const GlobalStoreContext = React.createContext(new GlobalStore());

export { GlobalStore, GlobalStoreContext };
