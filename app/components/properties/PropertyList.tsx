"use client";

import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import apiService from "@/app/services/apiService";

export type PropertyType = {
  id: string;
  title: string;
  image_url: string;
  price_per_night: number;
};

const PropertyList = () => {
  const [propertyList, setPropertyList] = useState<PropertyType[]>([]);

  const getPropertyList = async () => {
    const tmpProperties = await apiService.get("/api/properties/");
    setPropertyList(tmpProperties.data);
  };

  useEffect(() => {
    getPropertyList();
  }, []);

  return (
    <>
      {propertyList.map((property) => {
        return <PropertyListItem key={property.id} property={property} />;
      })}
    </>
  );
};

export default PropertyList;
