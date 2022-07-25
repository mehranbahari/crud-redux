import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/UI/Header";
import Home from "./components/UI/Home";
import Createlogs from "./components/log/Createlogs";
import CreateTechs from "./components/tech/CreateTechs";
import Techs from "./components/tech/Techs";

import { Provider } from "react-redux";
import store from "./redux/Store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-log" element={<Createlogs />} />
              <Route path="/edit-log/:id" element={<Createlogs isEdit />} />
              <Route path="/create-tech" element={<CreateTechs />} />
              <Route path="/techs" element={<Techs />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
