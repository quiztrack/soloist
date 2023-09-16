import { useMemo } from "react";
import { readMetaSoloistContext, MetaSoloist } from "./context";

function setSoloistGlobal(where: { where: MetaSoloist; }) {
  const soloist = readMetaSoloistContext();

  soloist.createGlobal(where);
}

function useSoloistGlobal() {
  return { setGlobal: useMemo(() => readMetaSoloistContext().createGlobal, []) };
}

export { useSoloistGlobal, setSoloistGlobal };