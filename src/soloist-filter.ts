import { useContext } from "react";
import { soloistContext } from "./context";

function setMetaSoloist() {
  return useContext(soloistContext);
}

export { setMetaSoloist };