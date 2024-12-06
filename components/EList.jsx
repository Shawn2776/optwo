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
    <div className="relative pt-10 mx-auto overflow-x-auto max-w-7xl">
      {/* Scrollable Container */}
      <div className="flex gap-8 lg:gap-4 flex-nowrap">
        {/* CardSkeleton */}
        {!isLoaded &&
          eList.eList.map((e) => (
            <div
              key={e.id}
              className="min-w-[25%] lg:min-w-[25%] rounded-md"
              onClick={() => {
                document.getElementById("my_modal_4").showModal();
                setSelectedEquipment(e);
              }}
            >
              <EquipmentCard equipment={e} />
            </div>
          ))}
        {isLoaded
          ? [1, 2, 3, 4].map((item, index) => (
              <div key={index} className="min-w-[25%] lg:min-w-[25%]">
                <EquipmentCardSkeleton />
              </div>
            ))
          : null}
      </div>
      {/* Modal */}
      <dialog id="my_modal_4" className="flex modal justify-evenly">
        <EquipmentModal selectedEquipment={selectedEquipment} />
      </dialog>
    </div>
  );
};

export default EList;
