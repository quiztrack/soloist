import { MetaSoloist } from "./context";
import { Soloist } from "./soloist";

type FilterFormat = { where: MetaSoloist };

// const $any = "*";

function filter(store: Soloist, where?: FilterFormat) {
  const metaCurrentStore = [...store.getStore()];
  const whereGlobal = store.getGlobal();

  if (where && whereGlobal) {
    return [];
  }

  const whereKeys = where ? Object.keys(where.where) : Object.keys(whereGlobal.where);

  return metaCurrentStore.filter((item) => {
    return whereKeys.every((key) => {
      return item[key] === (where ? where.where[key] : whereGlobal.where[key]);
    });
  });
}

export { filter, type FilterFormat };