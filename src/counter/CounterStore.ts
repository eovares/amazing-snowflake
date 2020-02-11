import { observable } from "mobx";

const countState = observable({
  // value
  count: 0,
  // increment
  increment: () => {
    countState.count++;
  },
  // decrement
  decrement: () => {
    countState.count--;
  }
});

export default countState;
