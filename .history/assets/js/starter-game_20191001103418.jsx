import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default function game_init(root) {
	ReactDOM.render(<Memory channel={channel}, root);
}

class Starter extends React.Component {
	constructor(params) {
		super(params);

		this.channel = props.channel;

		this.state = {
			randomBoard: this.boardGenerator(),
			clicked: [],
			visibleArray: new Array(16).fill(false),
			countClicked: 0
		};
		this.isNotSameClose = this.isNotSameClose.bind(this);

		this.channel.join()
		.receive("ok", this.onJoin.bind(this))
		.receive("error", resp => { console.log("Unable to join", resp) });

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

	isNotSameClose(letter, index) {
		if (!this.state.visibleArray[index]) {
			console.log(letter);
			const newVisibleArray = Array.from(this.state.visibleArray);

			newVisibleArray[index] = true;
			this.setState({
				visibleArray: newVisibleArray,
			})

			if (this.state.clicked.length == 0) {
				this.setState({
					clicked: [letter, index]
				});
			}

			else if (this.state.clicked[0] == letter && this.state.clicked[1] != index) {
				const newCountClicked = this.state.countClicked + 5;
				console.log("IS THE SAME");
				this.setState({
					clicked: [],
					countClicked: newCountClicked
				});
			}
			else {
				console.log("NOT THE SAME");
				const newCountClicked = this.state.countClicked - 1;
				setTimeout(() => {
					newVisibleArray[index] = false;
					newVisibleArray[this.state.clicked[1]] = false;
					this.setState({
						clicked: [],
						countClicked: newCountClicked,
						visibleArray: newVisibleArray
					});
				}, 850)
			}
		}
	}

	render() {
		const { visibleArray, randomBoard } = this.state;
		console.log(visibleArray);
		return <div class="wrap">
			{visibleArray.map((val, index) => {
				return <Row id={index} onClick={this.isNotSameClose} visible={val}>{randomBoard[index]}</Row>;
			})}
			<h1>Score:</h1>
			<h1>{this.state.countClicked}</h1>
			<h1></h1>
			<button id="restart" onClick={this.restart}>Restart Game</button>
		</div>
	}
}

class Row extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div className="gameboardrow" onClick={() => {
			this.props.onClick(this.props.children, this.props.id);
		}}>
			{this.props.visible && <p>{this.props.children}</p>}
		</div>
	}
}
