import { useReducer } from "react";
import LogContext from "./logContext";
import logReducer from "./logReducer";
import { GET_LOGS, DELETE_LOG, SET_LOADING } from "../Types";

const LogState = ({ children }) => {
  const initialState = {
    logs: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(logReducer, initialState);

  ////////////get logs from server
  const getLogs = async () => {
    setLoading(true);
    try {
      const response = await fetch(" http://localhost:5000/logs");
      const data = await response.json();
      dispatch({ type: GET_LOGS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  ////////////create log
  const CreateLogHandler = async (values) => {
    try {
      const data = { ...values, date: new Date() };
      const response = await fetch("http://localhost:5000/logs", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "Application/json",
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  ////////////delete log
  const deleteLog = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/logs/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "Application/json" },
      });
      console.log(response);
      dispatch({ type: DELETE_LOG, payload: id });
    } catch (error) {
      console.log(error);
    }
  };

  /////////edit log
  const editLogHandler = async (log) => {
    try {
      const data = { ...log, date: new Date() };
      const response = await fetch(`http://localhost:5000/logs/${log.id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-type": "Application/json" },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  ////loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <LogContext.Provider
      value={{
        ...state,
        getLogs,
        deleteLog,
        CreateLogHandler,
        editLogHandler,
        setLoading,
      }}
    >
      {children}
    </LogContext.Provider>
  );
};

export default LogState;
