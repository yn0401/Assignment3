import { getAll, add, update, getDetail } from "../actions/sneaker";

const initialState = {
  sneakers: [],
  item: {}
};

export const sneakerReducer = (state = initialState, action) => {
  switch (action.type) {
    case getAll:
      console.log("Get All", action.payload);
      return {
        ...state,
        sneakers: [...action.payload],
      };
    case add:
      console.log("Add", action.payload);
      return {
        ...state,
        sneakers: [...state.sneakers, action.payload],
      };
    case update:
      console.log("Update", action.payload);
      return {
        ...state,
        sneakers: state.sneakers.map((sneaker) => {
          if (sneaker.id === action.payload.id) {
            return action.payload;
          }
          return sneaker;
        }),
      };
    case getDetail:
      // console.log("getDetail", action.payload);
      return {
        ...state,
        item: action.payload,
      };
    default:
      return { ...state };
  }
};
