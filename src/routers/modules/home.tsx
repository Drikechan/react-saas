import { RouterOptionType } from "@/types/router";
// import { DeviceVehicle } from "@/views/device/vehicle";
import LayoutIndex from "@/layouts";

export const homeRouter: RouterOptionType[] = [
  {
    path: "/device",
    element: <LayoutIndex />,
  },
];
