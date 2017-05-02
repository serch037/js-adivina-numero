/**
 * Created by sergio on 5/1/17.
 */
import React, { Component } from  'react';
import { connect } from 'react-redux';

import { setMin, setMax, setBgColor, setFgColor } from '../actions/ActionCreator';


class Configurator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: this.props.bgColor,
      fgColor: this.props.fgColor,
      min: this.props.min,
      max: this.props.max
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps !== this.props) {
      console.log('Recieved Props');
    }
  }
  configWrapperStyle = {
    backgroundColor: this.props.bgColor,
  }

  render() {
    return (
      <div className="config-wrapper" style={{backgroundColor:this.props.bgColor}}>
        <h2>Settings</h2>
        <div className="config-wrapper-2" style={{backgroundColor:this.props.fgColor}}>
          <label>
            Min value to guess:
            <input type="number"
                   value={this.state.min}
                   onChange={(e) => this.setState({min: e.target.value})}
                   onBlur={(e) => this.props.changeMin(this.state.min)}
            />
          </label>
          <label>
            Max value to guess:
            <input type="number"
                   value={this.state.max}
                   onChange={(e) => this.setState({max: e.target.value})}
                   onBlur={(e) => this.props.changeMax(this.state.max)}
            />
          </label>
          <label>
            Background Color:
            <input type="color"
                   value={this.state.bgColor}
                   onChange={(e) => {
                     this.setState({bgColor: e.target.value})
                     this.props.changeBgColor(this.state.bgColor)
                   }}
            />
          </label>
          <label>
            Foreground Color:
            <input type="color"
                   value={this.state.fgColor}
                   onChange={(e) => {
                     this.setState({fgColor: e.target.value})
                     this.props.changeFgColor(this.state.fgColor)
                   }}
            />
          </label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bgColor: state.settings.bgColor,
    fgColor: state.settings.fgColor,
    min: state.settings.min,
    max: state.settings.max
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeBgColor: (color) => {
      dispatch(setBgColor(color));
    },
    changeFgColor: (color) => {
      dispatch(setFgColor(color));
    },
    changeMin: (min) => {
      dispatch(setMin(min));
    },
    changeMax: (max) => {
      dispatch(setMax(max));
    }
  };
};

const connectedConfigurator = connect(
  mapStateToProps,
  mapDispatchToProps
)(Configurator);
export default connectedConfigurator;
