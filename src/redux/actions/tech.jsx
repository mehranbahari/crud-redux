import { GET_TECHS, SET_LOADING, DELETE_TECH } from "./Types";

///////get tech
export const getTechs = () => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  const res = await fetch("http://localhost:5000/techs");
  const data = await res.json();
  dispatch({ type: GET_TECHS, payload: data });
};

//////delete tech
export const deleteTech = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:5000/techs/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "Application/json" },
    });
    //   console.log(response);
    dispatch({ type: DELETE_TECH, payload: id });
  } catch (error) {
    console.log(error);
  }
};

////////////create tech
export const CreateTechHandler = (values) => async (dispatch) => {
  try {
    const data = { ...values, date: new Date() };
    const response = await fetch("http://localhost:5000/techs", {
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
