import { useEffect } from "react";
import Spiner from "../UI/Spiner";

import { useSelector, useDispatch } from "react-redux";
import { getTechs, deleteTech } from "../../redux/actions/tech";

const Techs = () => {
  const { techs, loading } = useSelector((state) => state.tech);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechs());
  }, []);

  return (
    <>
      {loading ? (
        <Spiner />
      ) : (
        <ul className="list-group mt-5">
          {techs.map((tech) => (
            <li className="list-group-item d-flex" key={tech.id}>
              {tech.firstName}
              {tech.lastName}
              <i
                style={{ cursor: "pointer" }}
                className="bi bi-trash ms-auto"
                onClick={() => dispatch(deleteTech(tech.id))}
              ></i>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Techs;
