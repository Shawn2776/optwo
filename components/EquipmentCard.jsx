"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
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
      <Card className="w-96">
        <CardHeader shadow={false} floated={false} className="h-96">
          <Image
            src={equipment?.image[0].url}
            alt={equipment?.name}
            width={450}
            height={350}
            className="w-[450px] h-[350px] mb-3 object-contain mx-auto"
          />
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between mb-2">
            <div color="blue-gray" className="pl-2 font-medium">
              {equipment?.name}
            </div>
            <div color="blue-gray" className="font-medium">
              <div className="flex items-center gap-4 pr-4 divide-x-2">
                <div>
                  <div>
                    <small>Public</small>
                  </div>
                  <span className="text-gray-900 ">
                    $
                    <span className="text-2xl font-bold">
                      {equipment.hourlyPublicRate}
                    </span>
                    <span className="text-sm font-medium text-gray-500 ">
                      /hr
                    </span>
                  </span>
                </div>
                <div className="pl-4">
                  <div>
                    <small>Student</small>
                  </div>
                  <div>
                    <span className="text-green-500 ">
                      $
                      <span className="text-2xl font-bold">
                        {equipment.hourlyStudentRate}
                      </span>
                      <span className="text-sm font-medium text-gray-500 ">
                        /hr
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div variant="small" color="gray" className="font-normal opacity-75">
            <span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ">
                {equipment?.season.toUpperCase()}
              </span>

              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ">
                {equipment?.category?.toUpperCase()}
              </span>
            </span>
          </div>
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
