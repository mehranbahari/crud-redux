import { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Spiner from "../UI/Spiner";

import { useSelector, useDispatch } from "react-redux";

import { getLogs, deleteLog } from "../../redux/actions/log";

const Logs = () => {
  const dispatch = useDispatch();

  const { logs, loading } = useSelector((state) => state.log);

  useEffect(() => {
    dispatch(getLogs());
  }, []);

  return (
    <div className="container">
      {loading ? (
        <Spiner />
      ) : (
        <ul className="list-group">
          {logs.map((log) => (
            <li className="list-group-item d-flex" key={log.id}>
              <div>
                <h4>{log.tech}</h4>
                <p>
                  <strong
                    className={log.attention ? "text-danger" : "text-success"}
                  >
                    {log.message}
                  </strong>{" "}
                  at{" "}
                  <strong>
                    {moment(log.date).format("YYYY-MM-DD HH:mm:ss")}
                  </strong>
                </p>
              </div>
              <div className="ms-auto">
                <i
                  className="bi bi-trash d-block"
                  onClick={() => dispatch(deleteLog(log.id))}
                ></i>
                <Link to={`/edit-log/${log.id}`}>
                  <i className="bi bi-pencil-square d-block"></i>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Logs;
