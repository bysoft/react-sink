import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import styles from './Rebass.scss';
import { SequenceMap, Switch } from 'rebass';

export default class Rebass extends Component {
  render() {
    return (<div className={styles.wrapper}>
      <Helmet title="Developing a react redux universal app had never been so easy!"/>

      <SequenceMap
        active={1}
        steps={[{'children': 'Step 1'}, {'children': 'Step 2'}, {'children': 'Step 3'}]}
      />
      <Switch checked />
      <label>on | off</label>
    </div>);
  }
}

// import React from 'react';
// import { SequenceMap, Switch } from 'rebass';
//
// const RebassEx = () => {
//   return (
//     <div>
//       <SequenceMap
//         active={1}
//         steps={[{'children: 'Step 1'}, {'children: 'Step 2'}, {'children: 'Step 3'}]}
//       />
//       <Switch checked />
//       <label>on | off</label>
//     </div>
//   );
// };
//
// export default RebassEx;
//
