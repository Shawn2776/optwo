import React from "react";

const EquipmentModal = ({ equipment }) => {
  return (
    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
      <div className="border-b-[1px] pb-2">
        <h3 className="text-[30px] font-light text-gray-400">
          Reserve Equipment
        </h3>
      </div>
      <div className="modal-action">
        <button className="btn">Close</button>
      </div>
    </form>
  );
};

export default EquipmentModal;
