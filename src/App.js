import { React, } from "react";
import { Route,  Routes } from "react-router-dom";
import Home from "./components/home";
import Display from "./components/Display";
import { Provider } from "react-redux";
import store from "./redux/store";
const App = () => {



  return <div className="app">
    <Provider store={store}>
      <nav>
        <div>
          <h2 className="main-heading">Social Media App</h2>
        </div>
        <hr></hr>
      </nav>
      <Routes>
        <Route path="display" Component={Display}></Route>
        <Route index path="/lastf4" Component={Home}></Route>
      </Routes>
    </Provider>

  </div>



}

export default App;

