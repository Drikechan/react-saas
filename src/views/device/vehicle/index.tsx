import { useEffect } from "react";
import produce from "immer";

export function DeviceVehicle() {
  const convertData = () => {
    const baseState = [
      {
        title: "Learn TypeScript",
        done: true,
      },
      {
        title: "Try Immer",
        done: false,
      },
    ];
    const nextState = produce(baseState, (draft) => {
      draft[1].done = true;
      draft.push({
        title: "Tweet about it",
        done: false,
      });
    });
    console.log(baseState, nextState);
  };
  useEffect(() => {
    convertData();
  });
  // showFullScreenLoading({ spinning: true });
  return <div>车辆</div>;
}
