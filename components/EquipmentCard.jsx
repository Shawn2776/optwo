"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const EquipmentCard = (equipmentList) => {
  const [equipment, setEquipment] = useState();

  useEffect(() => {
    if (equipmentList.equipment) {
      setEquipment(equipmentList?.equipment);
    }
  }, [equipmentList.equipment]);

  return (
    equipment && (
      // <div className="max-w-sm p-1 bg-white rounded-lg shadow-md">
      //   <a href="#">
      //     <Image
      //       src={equipment?.image[0].url}
      //       alt={equipment?.name}
      //       width={220}
      //       height={200}
      //       className="w-[250px] h-[150px] mb-3 object-contain mx-auto"
      //     />
      //   </a>
      //   <div className="px-5 pb-5">
      //     <a href="#">
      //       <h3 className="mb-3 text-xl font-semibold tracking-tight text-gray-900 ">
      //         {equipment?.name}
      //       </h3>
      //     </a>
      //     <div className="flex items-center mt-2.5 mb-5">
      //       <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ">
      //         {equipment?.season.toUpperCase()}
      //       </span>
      //     </div>
      //     <div className="flex items-center justify-between">
      //       <div className="w-full">
      //         <div className="flex items-center justify-between py-2 border-b ">
      //           <span className="text-sm text-gray-500 ">Public Price:</span>
      //           <span className="text-gray-900 ">
      //             $
      //             <span className="text-2xl font-bold">
      //               {equipment.hourlyPublicRate}
      //             </span>
      //             <span className="text-sm font-medium text-gray-500 ">
      //               /hr
      //             </span>
      //           </span>
      //         </div>
      //         <div className="flex items-center justify-between py-2">
      //           <span className="text-sm text-gray-500 ">Student Price:</span>
      //           <span className="text-sm text-green-600">
      //             $
      //             <span className="text-2xl font-bold">
      //               {equipment.hourlyStudentRate}
      //             </span>
      //             <span className="text-sm font-medium text-gray-500 ">
      //               /hr
      //             </span>
      //           </span>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="flex justify-center mt-4">
      //       <button className="btn">Reserve</button>
      //     </div>
      //   </div>
      // </div>

      <Card className="w-96">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={equipment?.image[0].url}
            alt={equipment?.name}
            className="w-[450px] h-[350px] mb-3 object-contain mx-auto"
          />
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between mb-2">
            <Typography color="blue-gray" className="font-medium">
              {equipment?.name}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              <span className="text-gray-900 ">
                $
                <span className="text-2xl font-bold">
                  {equipment.hourlyPublicRate}
                </span>
                <span className="text-sm font-medium text-gray-500 ">/hr</span>
              </span>
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <button className="flex justify-center w-full btn btn-ghost">
            Reserve
          </button>
        </CardFooter>
      </Card>
    )
  );
};

export default EquipmentCard;

// <div className="group rounded-md bg-gray-50 p-2 hover:bg-white hover:border-[1px] cursor-pointer duration-75 border-blue-500 max-w-2xl">
// <h2 className="text-[20px] font-medium mb-2">
//   {equipment.name}
// </h2>
// <h2 className="mb-2 font-bold">
//   <span className="text-[12px] font-light">$ </span>
//   <span className="text-[28px]">{equipment.hourlyPublicRate}</span>
//   <span className="text-[12px] font-light">/hour</span>
// </h2>
// <Image
//   src={equipment.image[0]?.url}
//   alt={equipment.name}
//   width={220}
//   height={200}
//   className="w-[250px] h-[150px] mb-3 object-contain"
// />
//   <button
//     className="hidden w-full px-4 py-2 text-sm text-center text-white transition-all border border-transparent rounded-md shadow-md hover:block bg-slate-800 hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//     type="button"
//   >
//     Reserve
//   </button>
// </div>
