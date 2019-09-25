import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default function game_init(root) {
  ReactDOM.render(<Starter />, root);
}

class Starter extends React.Component {
//Randomize an array: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array 
  boardGenerator() {
    var lettersList = ["A", "B", "C", "D", "E", "F", "G", "H"];
    var curr = lettersList.length, temp, randIndex;

    while (0 != curr) {
        randIndex = Math.floor(Math.random() * curr);
	curr -= 1;
	temp = lettersList[curr];
	lettersList[curr] = lettersList[randIndex];
	lettersList[randIndex] = temp;
    }
    return lettersList;
  }

     restart() { 
       location.reload();
     }

     render() {
	console.log('Hello');
	var array = this.boardGenerator();
	var array2 = this.boardGenerator();
	return <div class = "wrap">
		<Row id={array[0]}></Row>
		<Row id={array[1]}></Row>
		<Row id={array[2]}></Row>
		<Row id={array[3]}></Row>
		<Row id={array[4]}></Row>
		<Row id={array[5]}></Row>
		<Row id={array[6]}></Row>
		<Row id={array[7]}></Row>
		<Row id={array2[0]}></Row>
		<Row id={array2[1]}></Row>
		<Row id={array2[2]}></Row>
		<Row id={array2[3]}></Row>
		<Row id={array2[4]}></Row>
		<Row id={array2[5]}></Row>
		<Row id={array2[6]}></Row>
		<Row id={array2[7]}></Row>
		<button onClick={this.restart}>Restart Button</button>
	       </div>
	}
  }

class Row extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		visibile: false
	// 	}
	// }

  render () {
    return <div className="gameboardrow">
		  {visible && <p>{this.props.id}</p>}	  
	</div>
  }
}
