/*
 * @Date: 2020-12-01 22:18:01
 * @LastEditors: Skye Young
 * @LastEditTime: 2020-12-01 22:19:14
 * @FilePath: \official-site-frontend\src\service\store\theme.ts
 */

import { makeAutoObservable, autorun } from 'mobx';

export class ThemeStore {
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

  constructor() {
    makeAutoObservable(this);

    this.loadTheme();

    autorun(this.saveTheme.bind(this));
  }
}
