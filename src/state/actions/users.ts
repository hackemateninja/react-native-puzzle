import {USERS} from "../actionTypes";

export function getUsers(payload: object){
  return {
    type: USERS,
    payload
  }
}
