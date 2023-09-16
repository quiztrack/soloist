import { useMemo } from "react";
import { readMetaSoloistContext } from "./context";
import { filter, FilterFormat } from "./filter";

const useSoloist = (where?: FilterFormat, end?: number) => {
  return useMemo(() => {
    const store = readMetaSoloistContext();
    const result = filter(store, where);

    return result?.slice(0, end);
  }, [where, end]);
};

export { useSoloist };