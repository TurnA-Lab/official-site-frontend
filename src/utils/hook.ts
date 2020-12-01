import React, { Dispatch, SetStateAction } from 'react';

/*
 * @Date: 2020-12-01 15:49:51
 * @LastEditors: Skye Young
 * @LastEditTime: 2020-12-01 16:09:40
 * @FilePath: \official-site-frontend\src\utils\hook.ts
 */

type UseStorageState = (
  storage: Storage,
  name: string,
  defaultValue: string,
) => [string, Dispatch<SetStateAction<string>>];

const useStorageState: UseStorageState = (storage, name, defaultValue) => {
  const [value, setValue] = React.useState(defaultValue);
  const nameRef = React.useRef(name);

  React.useEffect(() => {
    try {
      const storedValue = storage.getItem(name);
      if (storedValue !== null) setValue(storedValue);
      else storage.setItem(name, defaultValue);
    } catch {
      setValue(defaultValue);
    }
  }, [defaultValue, name, storage]);

  React.useEffect(() => {
    try {
      storage.setItem(nameRef.current, value);
    } catch {}
  }, [storage, value]);

  React.useEffect(() => {
    const lastName = nameRef.current;
    if (name !== lastName) {
      try {
        storage.setItem(name, value);
        nameRef.current = name;
        storage.removeItem(lastName);
      } catch {}
    }
  }, [name, storage, value]);

  return [value, setValue];
};

const useSessionState = useStorageState.bind(undefined, sessionStorage);
const useLocalState = useStorageState.bind(undefined, localStorage);

export { useLocalState, useSessionState, useStorageState };
