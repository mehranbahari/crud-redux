import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Card from "../UI/Card";

import { useDispatch } from "react-redux";
import { CreateTechHandler, getTechs } from "../../redux/actions/tech";

const CreateTechs = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
  });

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (values.firstName !== "" && values.lastName !== "") {
      const response = await dispatch(CreateTechHandler(values));
      if (response.status === 201) {
        navigate("/techs");
        getTechs();
      }
    }
  };
  return (
    <div className="container">
      <Card title="Create Tech">
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              first name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              aria-describedby="emailHelp"
              name="firstName"
              value={values.firstName}
              onChange={onChangeHandler}
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={values.lastName}
              onChange={onChangeHandler}
              autoComplete="off"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </Card>
    </div>
  );
};

export default CreateTechs;
