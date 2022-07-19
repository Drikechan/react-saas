import { RouterOptionType } from "@/types/router";
import { DeviceVehicle } from "@/views/device/vehicle";

export const homeRouter: RouterOptionType[] = [
  {
    path: "/device",
    element: <DeviceVehicle />,
  },
];
