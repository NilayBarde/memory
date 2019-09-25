import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default function game_init(root) {
  ReactDOM.render(<Starter />, root);
}

class Starter extends React.Component {
	constructor(params) {
		super(params);

		this.state = {
			array: this.boardGenerator(),
			array2: this.boardGenerator(),
			clicked: []
		};
	}

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

	isNotSameClose(id) {
		if(this.state.clicked.length == 0) {
			this.state.clicked.push(id);
		}
		else if(this.state.clicked[0] != id) {
			console.log("Is Not the Same");
		}
		else {
			console.log("Is the Same")
		}

	}
	 
    render() {
	return <div class = "wrap">
		<Row id={this.state.array[0]} onClick={this.isNotSameClose(this.state.array[0]).bind(this)}></Row>
		<Row id={this.state.array[1]} onClick={this.isNotSameClose(this.state.array[1]).bind(this)}></Row>
		<Row id={this.state.array[2]} onClick={this.isNotSameClose(this.state.array[2]).bind(this)}></Row>
		<Row id={this.state.array[3]} onClick={this.isNotSameClose(this.state.array[3]).bind(this)}></Row>
		<Row id={this.state.array[4]} onClick={this.isNotSameClose(this.state.array[4]).bind(this)}></Row>
		<Row id={this.state.array[5]} onClick={this.isNotSameClose(this.state.array[5]).bind(this)}></Row>
		<Row id={this.state.array[6]} onClick={this.isNotSameClose(this.state.array[6]).bind(this)}></Row>
		<Row id={this.state.array[7]} onClick={this.isNotSameClose(this.state.array[7]).bind(this)}></Row>
		<Row id={this.state.array2[0]} onClick={this.isNotSameClose(this.state.array2[0]).bind(this)}></Row>
		<Row id={this.state.array2[1]} onClick={this.isNotSameClose(this.state.array2[1]).bind(this)}></Row>
		<Row id={this.state.array2[2]} onClick={this.isNotSameClose(this.state.array2[2]).bind(this)}></Row>
		<Row id={this.state.array2[3]} onClick={this.isNotSameClose(this.state.array2[3]).bind(this)}></Row>
		<Row id={this.state.array2[4]} onClick={this.isNotSameClose(this.state.array2[4]).bind(this)}></Row>
		<Row id={this.state.array2[5]} onClick={this.isNotSameClose(this.state.array2[5]).bind(this)}></Row>
		<Row id={this.state.array2[6]} onClick={this.isNotSameClose(this.state.array2[6]).bind(this)}></Row>
		<Row id={this.state.array2[7]} onClick={this.isNotSameClose(this.state.array2[7]).bind(this)}></Row>
		<button onClick={this.restart}>Restart Button</button>
	    	</div>
	}
  }

class Row extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visibile: false
		}
	}

  render () {
    return <div className="gameboardrow" onClick={() => this.setState({visible: true})}>
		  {this.state.visible && <p>{this.props.id}</p>}
	</div>
  }
}
