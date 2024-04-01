import { Provider } from "react-redux";
import appStore from "./utils/data/appStore";
import AppRoute from "./routes/AppRoute";

function App() {
  return (
    <Provider store={appStore}>
      <AppRoute />
    </Provider>
  );
}

export default App;
