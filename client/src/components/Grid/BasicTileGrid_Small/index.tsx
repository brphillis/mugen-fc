import React from "react";
import GridItem, { BasicGridItem } from "./GridItem";

type Props = {
  gridItems: BasicGridItem[];
};

const BasicTileGrid_Small = ({ gridItems }: Props) => {
  return (
    <div className="flex flex-row flex-wrap px-[6px]">
      {gridItems?.map((gridItem: BasicGridItem, index: number) => {
        return <GridItem key={"gridItem_" + index} {...gridItem} />;
      })}
    </div>
  );
};

export default BasicTileGrid_Small;
