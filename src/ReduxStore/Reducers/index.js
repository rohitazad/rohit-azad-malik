import { combineReducers } from 'redux';
import engCvData from '../../Data/eng_cv.json';
const initialState = {
  data: engCvData,
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_DATA':
      return { ...state, data: action.payload };
    case 'ADD_ITEM':
      return { ...state, data: action.payload};
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  userData: dataReducer,
});

export default rootReducer;
