import { DELETE_TECH, GET_TECHS, SET_LOADING } from "../Types";

const techReducer = (state, action) => {
  switch (action.type) {
    case GET_TECHS:
      return { ...state, techs: action.payload, loading: false };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
      };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default techReducer;
