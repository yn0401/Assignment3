import { getAll, add, update } from "../actions/sneaker";

const initialState = {
  sneakers: [],
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
    default:
      return { ...state };
  }
};
