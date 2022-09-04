import { RouterOptionType } from "@/types/router";
// import { DeviceVehicle } from "@/views/device/vehicle";
import { DeviceModel } from "@/views/device/model";
import LayoutIndex from "@/layouts";

export const homeRouter: RouterOptionType[] = [
  {
    path: "/device",
    element: <LayoutIndex />,
    children: [
      {
        path: "/device/model",
        element: <DeviceModel />,
      },
    ],
  },
];
