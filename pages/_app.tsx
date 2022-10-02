/* eslint-disable @typescript-eslint/no-empty-function */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, createContext } from "react";

export interface componentObj {
  containerCol: number;
  containerRow: number;
}

export const ComponentListContext = createContext({
  componentList: [] as componentObj[],
  addComponent: (newComp: componentObj) => {
    console.log(newComp);
  },
  removeComponent: (i: number) => {
    console.log(i);
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [componentList, setComponentList] = useState<componentObj[]>([]);

  // add util for context
  const addComponent = (newComp: componentObj) => {
    setComponentList(() => [...componentList, newComp]);
  };

  // remove util for context
  const removeComponent = (index: number) => {
    const newArr: componentObj[] = [];

    componentList.forEach((component: componentObj, styleId: number) => {
      if (styleId !== index) newArr.push(component);
    });
    setComponentList(newArr);
  };

  return (
    <ComponentListContext.Provider
      value={{ componentList, addComponent, removeComponent }}
    >
      <Component {...pageProps} />
    </ComponentListContext.Provider>
  );
}

export default MyApp;
