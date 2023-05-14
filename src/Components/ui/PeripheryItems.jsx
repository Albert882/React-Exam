import React from "react";
import { products } from "../../dataBase/dataBase";
import { useDispatch } from "react-redux";
import PeripheryItem from "./PeripheryItem";

export default function PeripheryItems({
  info,
  handleChangeInfoId,
  handleOpenModal,
  brands,
  minPrice,
  maxPrice
}) {
  const dispatch = useDispatch();
  return (
    <div className=" rounded-xl w-full p-3 osm:p-8">
      {products
        ?.filter((item) =>
        brands?.length > 0 && item?.type === info
          ? item?.brand === brands.find((elem) => elem === item?.brand && item?.price > minPrice && item?.type === info && item?.price < maxPrice)
          : Number(minPrice) ||  Number(maxPrice) ? item?.price > minPrice && item?.type === info && item?.price < maxPrice 
          : item?.type === info
      )
        ?.map((item) => {
          return (
            <PeripheryItem
              key={item?.id}
              item={item}
              handleChangeInfoId={handleChangeInfoId}
              handleOpenModal={handleOpenModal}
            />
          );
        })}
    </div>
  );
}
