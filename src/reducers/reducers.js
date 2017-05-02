/**
 * Created by sergio on 5/1/17.
 */

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import * as ActionList from '../actions/ActionList';

/* STORE DEMO
 store = {
 record:2312,
 settings: {
 min:213,
 max:213,
 bgColor:123,
 fgColor:123
 }
 };*/

function record(state = Infinity, action) {
  switch (action.type) {
    case ActionList.SET_RECORD:
      console.log("Reducer set record");
      return action.record;
    default:
      return state;
  }
}

function settings(state = {}, action) {
  switch (action.type) {
    case ActionList.SET_FG_COLOR:
      return {
        ...state,
        fgColor:action.color
      };
    case ActionList.SET_BG_COLOR:
      return {
        ...state,
        bgColor:action.color
      };
    case ActionList.SET_MIN:
      return {
        ...state,
        min:action.min
      };
    case ActionList.SET_MAX:
      return {
        ...state,
        max:action.max
      };
    default:
      return state;
  }
}

export default combineReducers({
  record,
  settings,
});
