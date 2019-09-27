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
			clicked: [],
			visibleArray: new Array(16).fill(false)
		};
		this.isNotSameClose = this.isNotSameClose.bind(this);
	}

//Randomize an array: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array 
  boardGenerator() {
    var lettersList = ["A", "B", "C", "D", "E", "F", "G", "H", "A", "B", "C", "D", "E", "F", "G", "H"];
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

	isNotSameClose(letter, index) {
		console.log(letter);
		const newVisibleArray = Array.from(this.state.visibleArray);
		newVisibleArray[index] = true;
		this.setState({
			visibleArray: newVisibleArray,
		})
		if(this.state.clicked.length == 0) {
			this.setState({
				clicked: [letter, index]
			});
		}
		else if(this.state.clicked[0] == letter && this.state.clicked[1] != index) {
			console.log("IS THE SAME");
			this.setState({
				clicked: []
			});
		}
		else {
			console.log("NOT THE SAME");
			setTimeout(() => {
				newVisibleArray[index] = false;
				newVisibleArray[this.state.clicked[1]] = false;
			}, 1000)
			
			this.setState({
				clicked: []
			});
			this.setState({
				visibleArray: newVisibleArray,
			})
		}
	}
	 
    render() {
		
		const { visibleArray, array } = this.state;
		console.log(visibleArray);
	return <div class = "wrap">
		{visibleArray.map((val, index) => {
			return <Row id={index} onClick={this.isNotSameClose} visible={val}>{array[index]}</Row>;
		})}
		<button id="restart" onClick={this.restart}>Restart Game</button>
	    	</div>
	}
  }

class Row extends React.Component {
	constructor(props) {
		super(props);
	}

  render () {
    return <div className="gameboardrow" onClick={() => {
			this.props.onClick(this.props.children, this.props.id);	
	}}>
		  {this.props.visible && <p>{this.props.children}</p>}
	</div>
  }
}
