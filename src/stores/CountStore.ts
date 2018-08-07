import { action, computed, observable } from 'mobx';

export interface ICountStoreType {
  num: number
  doubleCount: number
  increment: () => void
  decrement: () => void
};

export default class CountStore implements ICountStoreType {
  @observable
  public num = 0;

  @computed
  get doubleCount(): number {
    return this.num * 2;
  }

  @action.bound
  public increment(): void {
    this.num = this.num + 1;
  }

  @action.bound
  public decrement(): void {
    this.num = this.num - 1;
  }
}
