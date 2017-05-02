/**
 * Created by sergio on 4/24/17.
 */
import React, { Component } from  'react';
import { connect } from 'react-redux';

import { setRecord } from '../actions/ActionCreator';
import Record from './Record';

import './styles/guesser.css';
class Guesser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: this.getRandomMax(0, 100),
      status: 'start',
      attempts: 1,
      guessInput: '',
      brokeRecord: false
    };
    this.handleGuess = this.handleGuess.bind(this);
  }

  componentDidMount() {
    console.log(this.state.val);
    console.log("guesser", this.props.fgColor);
    //this.guessInput.focus();
  }

  getRandomMax = (min, max) => {
    const _min = Math.ceil(min);
    const _max = Math.ceil(max);
    return Math.floor(Math.random() * (_max - _min + 1)) + _min;
  };

  handleGuess(e) {
    e.preventDefault();
    if (this.state.guessInput) {
      const numGuess = parseInt(this.state.guessInput, 10);
      this.setState({guessInput: '', attempts:this.state.attempts+1});
      console.log("Guesser", this.state.attempts);
      if (numGuess === this.state.val) {
        this.setState({
          status: 'guessed'
        });
        if (this.state.attempts < this.props.record) {
          console.log('Guesser new record');
          this.setState({brokeRecord:true});
          this.props.onNewRecord(this.state.attempts);
        }
      }
      else if (numGuess > this.state.val) {
        this.setState({
          status: 'bigger'
        });
      }
      else if (numGuess < this.state.val) {
        this.setState({
          status: 'smaller'
        });
      }
      else {
        this.setState({
          status: 'invalid'
        });
      }
    }
  }

  putStatus() {
    if (this.state.status === 'guessing') return <p>Guess a number</p>;
    else if (this.state.status === 'correct') return <p>You guessed correctly</p>;
    switch (this.state.status) {
      case 'start':
        return <p className="resp">Guess a number</p>;
      case 'bigger':
        return <p className="resp">Your number is bigger</p>;
      case 'smaller':
        return <p className="resp">Your number is smaller</p>;
      case 'guessed':
        return <p className="resp">You guessed correctly</p>;
      default:
        return <p className="resp">Your input is invalid</p>;
    }
  }

  renderRecord(){
    if (this.state.brokeRecord) return <Record record={this.state.attempts}/>
  }

  render() {
    return (
      <div className="juego" style={{backgroundColor:this.props.fgColor}}>
        <p>Guess a number</p>
        {/*<h3>The number is {this.state.val}</h3>*/}
        <form onSubmit={this.handleGuess}>
          <input type="text"
                 className="guess"
            // ref={(input) => {this.guessInput = input;}}
                 autoFocus
                 value={this.state.guessInput}
                 onChange={(e) => this.setState({guessInput: e.target.value})}
          />
          <button className="btn" type="submit">Submit guess</button>
        </form>
        {this.renderRecord()}
        {this.putStatus()}
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    record: state.record,
    fgColor: state.settings.fgColor
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNewRecord: (record) => {
      dispatch(setRecord(record));
    }
  };
};

const connectedGuesser = connect(
  mapStateToProps,
  mapDispatchToProps
)(Guesser);
export default connectedGuesser;