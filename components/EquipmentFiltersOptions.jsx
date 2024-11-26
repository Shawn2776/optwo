"use client";

import { useEffect, useState } from "react";

const EquipmentFiltersOptions = ({
  eList,
  setSeason,
  setCategory,
  resetFilters,
  selectedSeason,
  selectedCategory,
  orderEquipmentList,
}) => {
  const [seasonList, setSeasonList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    if (eList) {
      populateFilters();
    }
  }, [eList]);

  const populateFilters = () => {
    const seasonSet = new Set();
    const categorySet = new Set();

    eList.forEach((element) => {
      seasonSet.add(element.season);
      categorySet.add(element.category);
    });

    setSeasonList(Array.from(seasonSet));
    setCategoryList(Array.from(categorySet));
  };

  const formatCategory = (category) => {
    if (!category) return null; // Handle null/undefined values
    return category
      .replace(/([A-Z])/g, " $1") // Add spaces before capital letters
      .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter
      .trim(); // Trim any extra spaces
  };

  return (
    <div className="flex items-center justify-between p-4 pt-10 mx-auto mt-10 max-w-7xl sm:px-10 md:px-20">
      <div>
        <h2 className="text-[30px] font-bold">Equipment Catalog</h2>
        <h2>Explore Equipment You Might Like</h2>
      </div>
      <div className="flex gap-5">
        {/* Begin Example */}
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => orderEquipmentList(e.target.value)}
        >
          {/* <option disabled value="">
            Price
          </option> */}
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>
        {/* End Example */}
        <select
          className="w-full max-w-xs bg-white select select-bordered"
          value={selectedSeason} // Controlled by state
          onChange={(e) => setSeason(e.target.value)}
        >
          <option disabled value="">
            Season
          </option>
          {seasonList.map((season, index) => (
            <option key={index} value={season}>
              {season}
            </option>
          ))}
        </select>
        <select
          className="hidden w-full max-w-xs bg-white select select-bordered md:block"
          value={selectedCategory} // Controlled by state
          onChange={(e) => setCategory(e.target.value)}
        >
          <option disabled value="">
            Category
          </option>
          {categoryList.map((category, index) => (
            <option key={index} value={category}>
              {formatCategory(category)}
            </option>
          ))}
        </select>
        <button className="btn btn-outline" onClick={resetFilters}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default EquipmentFiltersOptions;
