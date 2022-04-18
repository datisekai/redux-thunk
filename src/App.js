import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import User from "./components/User";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="main-route-place">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<User />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
