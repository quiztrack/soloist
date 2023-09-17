import { FilterFormat } from "./filter";

type MetaSoloist = { [key: string | number | symbol]: {} };
type SoloistItem = { meta: MetaSoloist[]; global?: FilterFormat; };

class Soloist {
  private _store: Map<Symbol, SoloistItem>;

  constructor() {
    this._store = new Map();
  }

  public createMeta<P extends MetaSoloist>(metaData: P[]) {
    const imperativeRef = Symbol();

    this._store.set(imperativeRef, { meta: metaData });

    return imperativeRef;
  }

  public createGlobal(imperativeRef: Symbol, where: FilterFormat): boolean {
    const prevSoloist = this._store.get(imperativeRef);

    if (prevSoloist) {
      prevSoloist.global = where;

      this._store.set(imperativeRef, prevSoloist);

      return true;
    } else {
      return false;
    }
  }

  public getStore(imperativeRef: Symbol) {
    return this._store.get(imperativeRef);
  }

  public getGlobal(imperativeRef: Symbol) {
    return this._store.get(imperativeRef)?.global;
  }
}

export { Soloist, type SoloistItem, type MetaSoloist };