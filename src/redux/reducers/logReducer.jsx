import { DELETE_LOG, GET_LOGS, SET_LOADING } from "../actions/Types";

const init = {
  logs: [],
  loading: false,
};

export const logReducer = (state = init, action) => {
  switch (action.type) {
    case GET_LOGS:
      return { ...state, logs: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
      };
    default:
      return state;
  }
};
