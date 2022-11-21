import { getAll, add, update, getDetail,search,deleteOne } from "../actions/sneaker";

const initialState = {
  sneakers: [],
  item: {},
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
      };
    case getDetail:
      // console.log("getDetail", action.payload);
      return {
        ...state,
        item: action.payload,
      };
    case deleteOne:
      console.log("Delete", action.payload);
      return {
        ...state,
        sneakers: state.sneakers.filter((item) => item.id !== action.payload),
      };
    case search:
      return {
        ...state,
        sneakers: [...action.payload],
      };
    default:
      return { ...state };
  }
};
