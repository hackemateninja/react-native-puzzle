import {ActionCreator} from 'redux';
import {getUsers} from "../actions";

export function asyncGetUsers(){
  return async (dispatch: ActionCreator<object>) => {
    const response = await fetch('https://akabab.github.io/superhero-api/api/all.json');
    const data = await response.json();
    dispatch(getUsers(data))
  }
}
