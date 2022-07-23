import { Loading } from "@/components/Loading";
import { SpinProps } from "antd";
import ReactDom from "react-dom/client";

let needLoadingRequestCount = 0;
export const showFullScreenLoading = (props: SpinProps) => {
  if (needLoadingRequestCount === 0) {
    const dom = document.createElement("div");
    dom.setAttribute("id", "loading");
    document.body.appendChild(dom);
    ReactDom.createRoot(dom).render(<Loading {...props} />);
  }
  needLoadingRequestCount++;
};

export const hideFullScreenLoading = () => {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    document.body.removeChild(
      document.getElementById("loading") as HTMLElement
    );
  }
};
