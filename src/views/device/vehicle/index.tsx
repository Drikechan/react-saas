import { Loading } from "@/components/Loading";
import { showFullScreenLoading } from "@/config/ServiceLoading";

export function DeviceVehicle() {
  showFullScreenLoading({ spinning: true });
  return (
    <div>
      车辆
      <Loading spinning={true} />
    </div>
  );
}
