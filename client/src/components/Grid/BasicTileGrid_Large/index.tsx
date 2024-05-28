import React from "react";
import GridItem from "./GridItem";
import { BasicGridItem } from "../BasicTileGrid_Small/GridItem";

type Props = {
  gridItems: BasicGridItem[];
};

const BasicTileGrid_Large = ({ gridItems }: Props) => {
  return (
    <div className="flex flex-row flex-wrap px-[6px]">
      {gridItems?.map((gridItem: BasicGridItem, index: number) => {
        return <GridItem key={"gridItem_" + index} {...gridItem} />;
      })}
    </div>
  );
};

export default BasicTileGrid_Large;
