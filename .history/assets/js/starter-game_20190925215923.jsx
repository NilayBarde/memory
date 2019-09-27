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
			clicked: [],
			visibleArray: new Array(16).fill(false);
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

	changeRowState(event) {
		this.setState({visible: false})
	}

	isNotSameClose(letter) {
		console.log(letter);
		if(this.state.clicked.length == 0) {
			this.state.clicked.push(letter);
		}
		else if(this.state.clicked[0] == letter && this.state.clicked[0].id != letter.id) {
			console.log("IS THE SAME");
			this.setState({
				clicked: []
			});
		}
		else {
			console.log("NOT THE SAME");
			this.state.clicked = [];

		}
	}
	 
    render() {
	return <div class = "wrap">
		{this.state.visibleArray.map((val, index) => {
			<Row id={index} onClick={this.isNotSameClose} visible={val}>{this.state.array[index]}</Row>
		})}
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
			this.setState({visible: true});
			this.props.onClick(this.props.children);	
	}}>
		  {this.state.visible && <p>{this.props.children}</p>}
	</div>
  }
}
