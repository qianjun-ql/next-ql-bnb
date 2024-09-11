"use client";

import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";

export type PropertyType = {
  id: string;
  title: string;
  image_url: string;
  price_per_night: number;
};

const PropertyList = () => {
  const [propertyList, setPropertyList] = useState<PropertyType[]>([]);

  const getPropertyList = async () => {
    const url = "http://localhost:8000/api/properties/";

    await fetch(url, {
      method: "GET",
    })
      .then((Response) => Response.json())
      .then((json) => {
        console.log("json", json);
        setPropertyList(json.data);
      })
      .catch((error) => {
        console.log("err", error);
      });
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
