import { MetaSoloist } from "./context";

type FilterFormat = { where: MetaSoloist };

class FilterResult<T = {}> {
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

function filter(store: any[], where: FilterFormat): FilterResult<any> {
  const whereKeys = Object.keys(where.where);
  const result = store.filter((item) => {
    return whereKeys.every((key) => {
      return item[key] === where.where[key];
    });
  });

  return new FilterResult(result);
}

export { filter, FilterResult, type FilterFormat };