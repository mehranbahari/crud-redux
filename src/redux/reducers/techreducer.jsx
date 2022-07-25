import { DELETE_TECH, GET_TECHS, SET_LOADING } from "../actions/Types";

const init = {
  techs: [],
  loading: false,
};

export const techsReducer = (state = init, action) => {
  switch (action.type) {
    case GET_TECHS:
      return { ...state, techs: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
      };
    default:
      return state;
  }
};
