import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../UI/Card";

import { getTechs } from "../../redux/actions/tech";
import {
  CreateLogHandler,
  getLogs,
  editLogHandler,
} from "../../redux/actions/log";
import { useDispatch, useSelector } from "react-redux";

const Createlogs = ({ isEdit }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [values, setValues] = useState({
    message: "",
    tech: "",
    attention: false,
  });

  const dispatch = useDispatch();
  const logs = useSelector((state) => state.log.logs);
  const techs = useSelector((state) => state.tech.techs);

  useEffect(() => {
    dispatch(getTechs());
  }, []);

  useEffect(() => {
    if (isEdit) {
      const log = logs.find((log) => log.id === +id);
      setValues({ ...log });
      console.log(log);
    }
  }, [isEdit]);

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (e.target.name === "attention") {
      setValues({ ...values, attention: !values.attention });
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (values.message !== "" && values.tech !== "") {
      if (!isEdit) {
        const response = await dispatch(CreateLogHandler(values));
        if (response.status === 201) {
          navigate("/");
          getLogs();
        }
      } else {
        const response = await dispatch(editLogHandler(values));
        if (response.status === 200) {
          navigate("/");
          getLogs();
        }
      }
    }
  };
  return (
    <div className="container">
      <Card title="Create Log">
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <input
              type="text"
              className="form-control"
              id="message"
              aria-describedby="emailHelp"
              name="message"
              value={values.message}
              onChange={onChangeHandler}
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Tech" className="form-label">
              Tech
            </label>
            {/* <input
              type="text"
              className="form-control"
              id="Tech"
              name="tech"
              value={values.tech}
              onChange={onChangeHandler}
              autoComplete="off"
            /> */}
            <select
              name="tech"
              value={values.tech}
              className="form-control"
              onChange={onChangeHandler}
            >
              <option value="" disabled>
                Plaese select tech
              </option>
              {techs.map(({ firstName, lastName, id }) => (
                <option key={id} value={`${firstName} ${lastName}`}>
                  {firstName}
                  {lastName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="Attention"
              name="attention"
              value={values.attention}
              onChange={onChangeHandler}
              checked={values.attention}
            />
            <label className="form-check-label" htmlFor="Attention">
              Attention
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            {isEdit ? "Edit" : "Create"}
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Createlogs;
