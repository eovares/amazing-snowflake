import { observer } from 'mobx-react';
import * as React from 'react';
// import * as ReactDOM from "react-dom";
// import { observable } from "mobx";
// import { Component } from "react";

const Counter = observer((props: any) => {
  // increment value
  const handleIncrement = () => {
    props.store.increment();
  };

  // decrement value
  const handleDecrement = () => {
    props.store.decrement();
  };

  // render
  return (
    <div>
      <h2>Counter</h2>
      Counter: {props.store.count} <br />
      <button onClick={handleIncrement}> + </button>
      <button onClick={handleDecrement}> - </button>
    </div>
  );
});

export default Counter;
