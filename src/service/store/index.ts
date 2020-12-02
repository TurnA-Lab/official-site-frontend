/*
 * @Date: 2020-11-29 23:09:26
 * @LastEditors: Skye Young
 * @LastEditTime: 2020-12-01 22:27:49
 * @FilePath: \official-site-frontend\src\service\store\index.ts
 */
import { makeAutoObservable } from 'mobx';
import React from 'react';
import { ThemeStore } from './ThemeStore';
import { TokenStore } from './TokenStore';

class GlobalStore {
  themeStore = new ThemeStore();

  tokenStore = new TokenStore();

  constructor() {
    makeAutoObservable(this);
  }
}

const GlobalStoreContext = React.createContext(new GlobalStore());

const useGlobalStore = () => React.useContext(GlobalStoreContext);

export { GlobalStore, GlobalStoreContext, useGlobalStore };
