import { Soloist } from "./soloist";

type MetaSoloist = { [key: string | number | symbol]: {} };

const soloistContext = new Soloist();
const readMetaSoloistContext = () => soloistContext;

function setMetaSoloist<T extends MetaSoloist>(meta: T[]) {
  soloistContext.createMeta(meta);
}

export {
  setMetaSoloist,
  readMetaSoloistContext,
  type MetaSoloist
};