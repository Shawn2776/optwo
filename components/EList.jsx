import EquipmentCard from "./EquipmentCard";

const EList = (eList) => {
  return (
    <div className="pt-10">
      <div className="grid grid-cols-1 gap-4 overflow-x-scroll rounded-md md:grid-cols-3 lg:grid-cols-4 ml-20">
        {eList.eList.map((e) => (
          <div key={e.id} className="rounded-md">
            <EquipmentCard equipment={e} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EList;
