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
		this.isNotSameClose = this.isNotSameClose.bind(this);
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

	isNotSameClose(letter) {
		console.log(letter);
		if(this.state.clicked.length == 0) {
			this.state.clicked.push(letter);
		}
		else if(this.state.clicked[0] == letter && this.state.clicked[0].id != letter.id) {
			console.log("IS THE SAME");
			this.state.clicked = [];
		}
		else {
			this.setState({visible: false})
			console.log("NOT THE SAME");
			this.state.clicked = [];
		}
	}
	 
    render() {
	return <div class = "wrap">
		<Row id="0" onClick={this.isNotSameClose}>{this.state.array[0]}</Row>
		<Row id="1" onClick={this.isNotSameClose}>{this.state.array[1]}</Row>
		<Row id="2" onClick={this.isNotSameClose}>{this.state.array[2]}</Row>
		<Row id="3" onClick={this.isNotSameClose}>{this.state.array[3]}</Row>
		<Row id="4" onClick={this.isNotSameClose}>{this.state.array[4]}</Row>
		<Row id="5" onClick={this.isNotSameClose}>{this.state.array[5]}</Row>
		<Row id="6" onClick={this.isNotSameClose}>{this.state.array[6]}</Row>
		<Row id="7" onClick={this.isNotSameClose}>{this.state.array[7]}</Row>
		<Row id="8" onClick={this.isNotSameClose}>{this.state.array2[0]}</Row>
		<Row id="9" onClick={this.isNotSameClose}>{this.state.array2[1]}</Row>
		<Row id="10" onClick={this.isNotSameClose}>{this.state.array2[2]}</Row>
		<Row id="11" onClick={this.isNotSameClose}>{this.state.array2[3]}</Row>
		<Row id="12" onClick={this.isNotSameClose}>{this.state.array2[4]}</Row>
		<Row id="13" onClick={this.isNotSameClose}>{this.state.array2[5]}</Row>
		<Row id="14" onClick={this.isNotSameClose}>{this.state.array2[6]}</Row>
		<Row id="15" onClick={this.isNotSameClose}>{this.state.array2[7]}</Row>
		<button id="restart" onClick={this.restart}>Restart Game</button>
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
    return <div className="gameboardrow" onClick={() => {
		if(this.state.visibile) {
			this.setState({visible: true});
			this.props.onClick(this.props.children);	
		}
		else {
			
		}
	}}>
		  {this.state.visible && <p>{this.props.children}</p>}
	</div>
  }
}
