import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default function game_init(root) {
  ReactDOM.render(<Starter />, root);
}

class Starter extends React.Component {
	render() {
	return <div>
		<Row id={"row1"}></Row>
	       </div>;
	}

  }
class Row extends React.Component {
  render () {
    return <div className="gameboardrow">
	<p>One</p>		  
	</div>
  }
}
