"use client";

import EList from "@/components/EList";
import EquipmentFiltersOptions from "@/components/EquipmentFiltersOptions";
import Hero from "@/components/Hero";
import SearchInput from "@/components/SearchInput";
import { getEquipmentList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [equipList, setEquipList] = useState([]);
  const [equipOrigList, setEquipOrigList] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    getEquipment();
  }, []);

  const getEquipment = async () => {
    const result = await getEquipmentList();
    setEquipList(result?.equipmentLists);
    setEquipOrigList(result?.equipmentLists);
  };

  const filterEquipList = (season) => {
    setSelectedSeason(season);
    const filterList = equipOrigList.filter((item) => item.season === season);
    setEquipList(filterList);
  };

  const filterEquipList_two = (category) => {
    setSelectedCategory(category);
    const filterList = equipOrigList.filter(
      (item) => item.category === category
    );
    setEquipList(filterList);
  };

  const resetFilters = () => {
    setEquipList(equipOrigList); // Reset to the original list
    setSelectedSeason(""); // Clear the season filter
    setSelectedCategory(""); // Clear the category filter
  };

  const orderEquipmentList = (order) => {
    const sortedData = [...equipOrigList].sort((a, b) =>
      order == -1
        ? a.hourlyPublicRate - b.hourlyPublicRate
        : b.hourlyPublicRate - a.hourlyPublicRate
    );
    setEquipList(sortedData);
  };

  return (
    <main>
      <Hero />
      <SearchInput />
      <EquipmentFiltersOptions
        eList={equipOrigList}
        setSeason={(value) => filterEquipList(value)}
        setCategory={(value_two) => filterEquipList_two(value_two)}
        resetFilters={resetFilters} // Pass the reset function
        selectedSeason={selectedSeason} // Track selected season
        selectedCategory={selectedCategory} // Track selected category
        orderEquipmentList={(value) => orderEquipmentList(value)}
      />
      <EList eList={equipList} />
    </main>
  );
}
