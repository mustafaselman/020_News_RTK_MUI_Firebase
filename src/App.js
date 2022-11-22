
import AppRouter from "./router/AppRouter";
import UserProvider from "./context/AuthContext";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import {ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { fetchPosts } from './posts/postsSlice';

function App() {
  
  

  return (
    <div className="App">
       <Provider store={store}>
     <ToastContainer/>
       <UserProvider>
         <AppRouter/>
      </UserProvider>
      </Provider>
    </div>
  );
}

export default App;
