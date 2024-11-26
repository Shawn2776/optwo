"use client";

import { useEffect, useState } from "react";
import EquipmentCard from "./EquipmentCard";
import EquipmentModal from "./EquipmentModal";
import EquipmentCardSkeleton from "./EquipmentCardSkeleton";

const EList = (eList) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState([]);

  useEffect(() => {
    if (eList.EList) {
      setIsLoaded(true);
    }
  }, [eList.EList]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10">
      {/* CardSkeleton */}
      {!isLoaded &&
        eList.eList.map((e) => (
          <div
            key={e.id}
            className="rounded-md"
            onClick={() => {
              document.getElementById("my_modal_4").showModal();
              setSelectedEquipment(equipment);
            }}
          >
            <EquipmentCard equipment={e} />
          </div>
        ))}
      {isLoaded
        ? [1, 2, 3, 4].map((item, index) => (
            <EquipmentCardSkeleton key={index} />
          ))
        : null}
      <dialog id="my_modal_4" className="modal">
        <EquipmentModal selectedEquipment={selectedEquipment} />
      </dialog>
    </div>
  );
};

export default EList;
