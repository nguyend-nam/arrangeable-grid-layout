// @ts-nocheck
import { ComponentListContext, componentObj } from "../../pages/_app";
import { useContext } from "react";
import SidebarItem from "./SidebarItem";
import { SortableContainer } from "react-sortable-hoc";

const SidebarList = () => {
  const { componentList, removeComponent } = useContext(ComponentListContext);

  return (
    <div className="p-3">
      <div className="text-gray-500 text-center mb-2">
        Drag n drop items in the list below to re-arrange the layout.
      </div>
      {componentList.length !== 0 &&
        componentList.map((c: componentObj, i: number) => {
          console.log(i);
          return (
            <SidebarItem
              index={i}
              key={i}
              itemIndex={i}
              col={c.containerCol}
              row={c.containerRow}
              remove={removeComponent}
            />
          );
        })}
    </div>
  );
};

export default SortableContainer(SidebarList);
