import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import {Privateroute, ProductAdd, ProfilePage, Settings, ProductList } from "./components";
import {
  Home,
  Signin,
  Signup,
  App,
  Contact,
  About,
  Blog,
  Profile,
  ErrorPage,
  Category,
} from "./pages";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/category" element={<Category/>}/>
            {/* <Route path="*" element={<ErrorPage />} /> */}
            <Route path="/about" element={<About/>}/>
            <Route element={<Privateroute />}>
              <Route element={<Profile />}>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/productshow" element={<ProductList/>}/>
                <Route path="/productadd" element={<ProductAdd />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
            </Route>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
