import { MetaSoloist } from "./soloist";

type FilterFormat = { where: MetaSoloist };

class FilterResult<T = any> {
  private _values: T[] = [];

  constructor(values: T[]) {
    this._values = values;
  }

  getValues(): T[] {
    return this._values;
  }

  asFirst(): T | undefined {
    return this._values[0];
  }
}

// const $any = "*";

function filter(store: MetaSoloist[], where: FilterFormat): FilterResult<MetaSoloist> {
  const whereKeys = Object.keys(where.where);
  const result = store.filter((item) => {
    return whereKeys.every((key) => {
      return item[key] === where.where[key];
    });
  });

  return new FilterResult(result);
}

export { filter, FilterResult, type FilterFormat };