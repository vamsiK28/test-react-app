import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";
import App from "./Apps";

export default function ComponentForDeploying(props) {
  const store = createStore(reducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
