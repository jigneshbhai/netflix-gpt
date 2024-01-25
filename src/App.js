import { Provider } from "react-redux";
import Body from "./components/Body";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <ToastContainer />
      <Body />
    </Provider>
  );
}

export default App;
