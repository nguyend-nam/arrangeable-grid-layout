import { useContext, useState } from "react";
import { GridLayout } from "../components/GridLayout";
import { Sidebar } from "../components/Sidebar";
import { ComponentListContext, componentObj } from "./_app";

const Home = () => {
  const [col, setCol] = useState<number>();
  const [row, setRow] = useState<number>();

  const contextValue = useContext(ComponentListContext);

  const { componentList, addComponent, removeComponent } = contextValue;

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="max-h-screen overflow-scroll bg-gray-50 w-[400px]">
        <div className="sticky top-0">
          <Sidebar
            col={col}
            row={row}
            setCol={setCol}
            setRow={setRow}
            addComponent={addComponent}
          />
        </div>
        <div className="p-3">
          {componentList.length !== 0 &&
            componentList.map((c: componentObj, i: number) => (
              <div className="shadow-md p-2 rounded-xl mb-2 bg-white" key={i}>
                <div className="flex justify-between items-center text-lg">
                  <span className="text-blue-600">{i}</span>
                  <button
                    onClick={() => removeComponent(i)}
                    className="text-blue-600 font-bold text-2xl"
                  >
                    &#215;
                  </button>
                </div>
                <ul className="font-light">
                  <li>Column span: {c.containerCol}</li>
                  <li>Row span: {c.containerRow}</li>
                </ul>
              </div>
            ))}
        </div>
      </div>
      <div className="w-full border-gray-200 p-1">
        <GridLayout />
      </div>
    </div>
  );
};

export default Home;
