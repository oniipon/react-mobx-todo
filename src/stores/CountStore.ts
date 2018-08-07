import { action, computed, observable } from 'mobx';

export interface ICountStoreType {
  num: number
  doubleCount: () => void
  onIncrement: () => void
  onDecrement: () => void
};

export default class CountStore {
  @observable
  public num = 0;

  @computed
  get doubleCount() {
    return this.num * 2;
  }

  @action.bound
  public onIncrement() {
    this.num = this.num + 1;
  }

  @action.bound
  public onDecrement() {
    this.num = this.num - 1;
  }
}
