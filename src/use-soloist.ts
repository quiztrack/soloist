import { useRef } from "react";
import { readMetaSoloistContext } from "./context";
import { filter, FilterFormat, FilterResult } from "./filter";

type TryFilterFunction = (result: FilterResult) => any;
type UseSoloistOption = {
  where?: FilterFormat;
  tryFilter?: TryFilterFunction;
};

function useSoloist(options?: UseSoloistOption) {
  const { where, tryFilter } = options ?? {};
  const prevResultRef = useRef<FilterResult | null>(null);
  const startFilter = (_where?: FilterFormat) => {
    const soloist = readMetaSoloistContext();
    const tryWhere = _where || soloist.getGlobal();

    if (tryWhere) {
      const result = filter([...soloist.getStore()], tryWhere);
      prevResultRef.current = result;

      return result;
    } else {
      throw new Error("Global and scope not defined any one.");
    }
  };

  if (prevResultRef.current === null) {
    const result = startFilter(where);

    return [tryFilter?.(result) ?? result, startFilter];
  }

  return [prevResultRef.current, startFilter];
};

export { useSoloist };