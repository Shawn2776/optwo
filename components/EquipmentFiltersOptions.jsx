"use client";

import { useEffect, useState } from "react";

const EquipmentFiltersOptions = ({ eList, setSeason, setCategory }) => {
  const [seasonList, setSeasonList] = useState();
  const [categoryList, setCategoryList] = useState();

  const SeasonSet = new Set();
  const categorySet = new Set();

  useEffect(() => {
    if (eList) {
      filterEquipList();
    }
  }, [eList]);

  const filterEquipList = () => {
    eList.forEach((element) => {
      SeasonSet.add(element.season);
      categorySet.add(element.category);
    });

    setSeasonList(Array.from(SeasonSet));
    setCategoryList(Array.from(categorySet));
  };
  return (
    <div className="flex items-center justify-between pt-10 mx-auto mt-10 max-w-7xl p-4  sm:px-10 md:px-20">
      <div>
        <h2 className="text-[30px] font-bold">Equipment Catalog</h2>
        <h2>Explore Equipment You Might Like</h2>
      </div>
      <div className="flex gap-5">
        <select
          className="w-full max-w-xs bg-white select select-bordered"
          defaultValue=""
          onChange={(e) => setSeason(e.target.value)}
        >
          <option disabled value="">
            Season
          </option>
          {seasonList &&
            seasonList?.map((season, index) => (
              <option key={index} value={season}>
                {season}
              </option>
            ))}
        </select>
        <select
          className="hidden w-full max-w-xs bg-white select select-bordered md:block"
          defaultValue=""
          onChange={(e) => setCategory(e.target.value)}
        >
          <option disabled value="">
            Category
          </option>
          {categoryList?.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default EquipmentFiltersOptions;
