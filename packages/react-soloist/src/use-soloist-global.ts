import { FilterFormat, readMetaSoloistContext } from "@quiztrack/soloist-core";
import { useCallback } from "react";

function useSoloistGlobal(thisImperativeRef: Symbol) {
  return useCallback(() => (where: FilterFormat) => readMetaSoloistContext().createGlobal(thisImperativeRef, where), []);
}

export { useSoloistGlobal };