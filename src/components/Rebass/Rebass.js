import React from 'react';
import { SequenceMap, Switch } from 'rebass';

const RebassEx = () => {
  return (
    <div>
      <SequenceMap
        active={1}
        steps={[{'children: 'Step 1'}, {'children: 'Step 2'}, {'children: 'Step 3'}]}
      />
      <Switch checked />
      <label>on | off</label>
    </div>
  );
};

export default RebassEx;
