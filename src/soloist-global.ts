import { useCallback } from "react";
import { readMetaSoloistContext, MetaSoloist } from "./context";

const setSoloistGlobal = (where: { where: MetaSoloist; }) => {
  readMetaSoloistContext().createGlobal(where);
};

function useSoloistGlobal() {
  return useCallback((where: { where: MetaSoloist; }) => {
    readMetaSoloistContext().createGlobal(where);
  }, []);
}

export { useSoloistGlobal, setSoloistGlobal };