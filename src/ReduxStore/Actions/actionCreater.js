import { LOAD_DATA, ADD_ITEM } from './actionTypes';

export function loadData(data) {
  return { type: LOAD_DATA, payload: data };
}

export function addItem(item) {
  return { type: ADD_ITEM, payload: item };
}
