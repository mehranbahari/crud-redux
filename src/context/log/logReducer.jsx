import { DELETE_LOG, GET_LOGS, SET_LOADING } from "../Types";

const logReducer = (state, action) => {
  switch (action.type) {
    case GET_LOGS:
      return { ...state, logs: action.payload, loading: false };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
      };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default logReducer;
