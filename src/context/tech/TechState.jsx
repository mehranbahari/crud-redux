import { useReducer } from "react";
import { GET_TECHS, DELETE_TECH, SET_LOADING } from "../Types";
import TechContext from "./techContext";
import techReducer from "./techReducer";

const TechState = ({ children }) => {
  const initialState = {
    techs: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(techReducer, initialState);

  /////////get techs from server
  const getTechs = async () => {
    setLoading(true);
    try {
      const response = await fetch(" http://localhost:5000/techs");
      const data = await response.json();
      dispatch({ type: GET_TECHS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  //////delete tech
  const deleteTech = async (id) => {
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

  ////loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <TechContext.Provider
      value={{ ...state, getTechs, deleteTech, setLoading }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechState;
