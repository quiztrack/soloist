import { useEffect } from "react";
import { readMetaSoloistContext, MetaSoloist } from "./context";

function useSoloistGlobal(where: { where: MetaSoloist; }) {
  useEffect(() => {
    const soloist = readMetaSoloistContext();

    soloist.createGlobal(where);
  }, [where]);
}

export { useSoloistGlobal };