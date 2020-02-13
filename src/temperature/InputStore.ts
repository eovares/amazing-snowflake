import { observable, action } from 'mobx';

class InputStore {
  @observable input = '';

  @action onChange(value: string) {
    this.input = value;
  }

  @action onSubmit() {
    this.input = '';
  }
}

export default InputStore;
