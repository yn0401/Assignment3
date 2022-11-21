import { getAll, add } from "../actions/sneaker";

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
    default:
      return { ...state };
  }
};
