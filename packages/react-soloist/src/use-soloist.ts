import { useMemo } from "react";
import { readMetaSoloistContext } from "@quiztrack/soloist-core";
import { filter, FilterFormat } from "@quiztrack/soloist-core";

function useSoloist(thisImperativeRef: Symbol, where?: FilterFormat) {
  const startFilter = (_where?: FilterFormat) => {
    const soloist = readMetaSoloistContext().getStore(thisImperativeRef);

    const tryWhere = _where || soloist!.global;

    if (tryWhere) {
      const result = filter([...soloist!.meta], tryWhere);

      return result;
    } else {
      throw new Error("Global and scope not defined any one.");
    }
  };
  const result = useMemo(() => startFilter(where), [thisImperativeRef]);

  return [result, startFilter];
};

export { useSoloist };