import { createStore } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

import { CREATE_BOOKING, UPDATE_BOOKING, FIND_ALL_BOOKING, FIND_BOOKING_BY_ID } from "./constants"
import User from "./models/User";

type state = {
  sidebarShow: 'responsive' | boolean,
  asideShow: boolean,
  darkMode: boolean,
  addedBooking: {
    email: string,
    userName: string
  }
}

const initialState: state = {
  sidebarShow: 'responsive',
  asideShow: false,
  darkMode: false,
  addedBooking: {
    email: "",
    userName: ""
  },
};

type args = { type?: string, [key: string]: any }

const changeState = (state = initialState, { type, ...rest }: args) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    case CREATE_BOOKING:
      return {...state, ...rest}
    default:
      return state
  }
};

const store = createStore(changeState);
export default store

// https://react-redux.js.org/using-react-redux/static-typing#typing-the-useselector-hook
export const useTypedSelector: TypedUseSelectorHook<state> = useSelector;
