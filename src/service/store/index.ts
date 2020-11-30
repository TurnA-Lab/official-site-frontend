/*
 * @Date: 2020-11-29 23:09:26
 * @LastEditors: Skye Young
 * @LastEditTime: 2020-11-30 19:18:26
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
    if (this.theme === 'dark') {
      body.classList.add('theme-dark');
    } else {
      body.classList.remove('theme-dark');
    }
  }

  constructor() {
    makeAutoObservable(this);

    this.loadTheme();
    autorun(this.saveTheme.bind(this));
  }
}

const GlobalStoreContext = React.createContext(new GlobalStore());

// const useGlobalStore = () => React.useContext(GlobalStoreContext);

export { GlobalStore, GlobalStoreContext };
