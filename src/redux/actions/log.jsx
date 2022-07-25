import { GET_LOGS, SET_LOADING, DELETE_LOG } from "./Types";

///get log
export const getLogs = () => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  const response = await fetch("http://localhost:5000/logs");
  const data = await response.json();
  dispatch({ type: GET_LOGS, payload: data });
};

////////////delete log
export const deleteLog = (id) => async (dispatch) => {
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

////////////create log
export const CreateLogHandler = (values) => async (dispatch) => {
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

/////////edit log
export const editLogHandler = (log) => async (dispatch) => {
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
