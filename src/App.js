import axios from "axios";
import AddCategorie from "Pages/AddCategorie";
import AddProduct from "Pages/AddProduct";
import Categories from "Pages/Categories";
import Connexion from "Pages/Connexion";
import EditProduct from "Pages/EditProduct";
import EditUser from "Pages/EditUser";
import Home from "Pages/Home";
import Products from "Pages/Products";
import Register from "Pages/Register";
import Users from "Pages/Users";
import Welcome from "Pages/welcome";
import { useEffect, useReducer } from "react";
import ReactModal from "react-modal";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ConnectContext } from "Services/StateManagment/ConnectState/ConnectContext";
import { initialState } from "Services/StateManagment/ConnectState/ConnectReducer";
import { reducerFunc } from "Services/StateManagment/ConnectState/ConnectReducer";
import { fetchCategorie } from "Services/utils/fetchCategorie";
import "./App.css";
import Header from "./Components/Molecules/Header/Header";

const routes = [
  { to: "/connexion", component: Connexion },
  { to: "/editUser", component: EditUser },

  { to: "/register", component: Register },
  { to: "/editProduct/:id", component: EditProduct },
  { to: "/users", component: Users },
  { to: "/products", component: Products },
  { to: "/addProduct", component: AddProduct },
  { to: "/categories", component: Categories },
  { to: "/addCategorie", component: AddCategorie },
  { to: "/:numPage", component: Home },
  { to: "/:numPage/:idCategorie", component: Home },
  { to: "/", component: Welcome },
];
function App() {
  fetchCategorie();
  const [connect, dispatch] = useReducer(reducerFunc, initialState);

  useEffect(() => {
    ReactModal.setAppElement("#root");
    (async () => {
      if (localStorage.getItem("token")) {
        const userData = await axios.get("http://localhost:8000/api/getUser", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        dispatch({
          type: "connect",
          payload: {
            name: userData.data.user.name,
            userTypeID: userData.data.user.typeLabel,
          },
        });
      }
    })();
  }, []);

  return (
    <ConnectContext.Provider
      value={{ connectState: connect, connectDispatch: dispatch }}
    >
      <Router>
        <div className="flex-1 padding-50px projectFont">
          <Header />

          <Switch>
            {routes.map((route, i) => (
              <Route
                key={i}
                path={route.to}
                exact
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </Router>
    </ConnectContext.Provider>
  );
}

export default App;
