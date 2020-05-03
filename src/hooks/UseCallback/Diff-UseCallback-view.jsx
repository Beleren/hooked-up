import React from 'react';
import Inefficient from './Inefficient-UseCallback-view';
import Efficient from './UseCallback-view';

export default function DiffUseCallbackView() {
  return (
    <div>
      <Inefficient></Inefficient>
      <Efficient></Efficient>
    </div>
  );
}
