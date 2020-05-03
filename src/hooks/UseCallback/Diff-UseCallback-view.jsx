import React from 'react';
import Inefficient from './Inefficient-UseCallback-view';
import Efficient from './UseCallback-view';

export default function DiffUseCallbackView() {
  return (
    <div>
      <h2>UseCallback Hook</h2>
      <Inefficient></Inefficient>
      <Efficient></Efficient>
    </div>
  );
}
