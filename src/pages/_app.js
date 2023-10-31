// import '@/styles/globals.css'
import { Provider } from "react-redux";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import userReducer from "@/redux/user.redux";
import {store} from "@/redux/store"
export default function App({ Component, pageProps }) {
  // let store = { user: userReducer };
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
