import React from 'react';
import ReactListView from '../src';

const SimpleExample = React.createClass({

  displayName: 'SimpleExample',

  render() {
    return (
      <ReactListView
        style={{
          height: 400,
        }}
        rowCount={100000}
        rowHeight={20}
        renderItem={(x, y, style) =>
          <div style={style}>
            Item #{x},#{y}
          </div>
        }
      />
    );
  },

});

React.render(<SimpleExample />, document.body);
