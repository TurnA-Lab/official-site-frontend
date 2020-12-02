/*
 * @Date: 2020-11-29 23:09:26
 * @LastEditors: Skye Young
 * @LastEditTime: 2020-12-03 02:18:22
 * @FilePath: \official-site-frontend\src\service\store\index.ts
 */
import { makeAutoObservable } from 'mobx';
import React from 'react';
import { InfoStore } from './InfoStore';
import { ThemeStore } from './ThemeStore';
import { TokenStore } from './TokenStore';

class GlobalStore {
  themeStore = new ThemeStore();

  tokenStore = new TokenStore();

  infoStore = new InfoStore();

  constructor() {
    makeAutoObservable(this);
  }
}

const GlobalStoreContext = React.createContext(new GlobalStore());

const useGlobalStore = () => React.useContext(GlobalStoreContext);

export { GlobalStore, GlobalStoreContext, useGlobalStore };
