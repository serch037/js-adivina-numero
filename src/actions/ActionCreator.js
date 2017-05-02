/**
 * Created by sergio on 5/1/17.
 */
import * as ActionList from './ActionList';
export function setRecord(record){
  console.log("ActionCreator setRecord")
  return {
    type: ActionList.SET_RECORD,
    record
  }
}

export function setMin(min){
  return {
    type: ActionList.SET_MIN,
    min
  }
}

export function setMax(max){
  return {
    type: ActionList.SET_MAX,
    max
  }
}

export function setBgColor(color){
  return {
    type: ActionList.SET_BG_COLOR,
    color
  }
}

export function setFgColor(color){
  return {
    type: ActionList.SET_FG_COLOR,
    color
  }
}
