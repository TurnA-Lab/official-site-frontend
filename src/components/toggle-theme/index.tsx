import { Select, Text } from '@geist-ui/react';
import { Moon, Sun } from '@geist-ui/react-icons';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { GlobalStoreContext } from '../../service/store';
import styles from './index.module.scss';

const OptionChildren = ({ children }: { children: React.ReactNode }) => (
  <span className={styles.OptionChildren}>{children || 'content'}</span>
);

const themeOption = (type: string) => {
  switch (type) {
    case 'light':
      return (
        <OptionChildren>
          <Sun size={16} />
          <Text>明亮</Text>
        </OptionChildren>
      );
    case 'dark':
      return (
        <OptionChildren>
          <Moon size={16} />
          <Text>暗黑</Text>
        </OptionChildren>
      );
    default:
      return type;
  }
};

const ToggleTheme = observer(() => {
  const useGlobalStore = React.useContext(GlobalStoreContext);
  const handleChange = (v: string | string[]) =>
    useGlobalStore.setTheme(v as string);

  return (
    <>
      <Select
        pure
        className={styles.Select}
        value={useGlobalStore.theme}
        onChange={handleChange}
      >
        {/* 发现没有可以返回所有主题列表的接口，暂时全写死 */}
        {['light', 'dark'].map((v, i) => (
          <Select.Option key={i} value={v} className={styles.Option}>
            {themeOption(v)}
          </Select.Option>
        ))}
      </Select>
    </>
  );
});

export { ToggleTheme };
