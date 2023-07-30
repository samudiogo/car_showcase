"use client";
import React, { useState } from "react";
import { SearchManufacturer } from "./SearchManufacturer";

export const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          setManufacturer={setManufacturer}
          manufacturer={manufacturer}
        />
      </div>
    </form>
  );
};
