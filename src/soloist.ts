import { FilterFormat } from "./filter";

class Soloist {
  private _store: any[];
  private _global?: any;

  constructor() {
    this._store = [];
  }

  public createMeta<P>(metaData: P[]) {
    this._store = metaData;

    // this.initSoloist();
  }

  public createGlobal(where: FilterFormat) {
    this._global = where;
  }

  public getStore() {
    return this._store;
  }

  public getGlobal() {
    return this._global;
  }

  // private initSoloist() {
  //   this._store.map(() => {})
  // }
}

export { Soloist };