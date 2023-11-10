import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, Privateroute, ProfilePage } from "./components";
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
            <Route element={<Home />} />
            <Route path="/profile" element={<Privateroute />}>
              <Route  element={<Profile/>}/>
            </Route>
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/category" element={<Category />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
