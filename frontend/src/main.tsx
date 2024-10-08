import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/home";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teclados from "./routes/teclados";
import Mouses from "./routes/mouses";
import Smartphones from "./routes/smartphones";
import NotFound from "./routes/notfound";
import ControlPanel from "./routes/controlpanel";
import EditProductRoute from "./routes/EditProduct/editproductRoute";
import AddProduct from "./routes/AddProduct/addproduct";
import DeleteProduct from "./routes/DeleteProduct/deleteproduct";
import Login from "./routes/Login/login";
import ProtectedRoute from "./routes/Login/protectedRoute";
import UserNotAllowed from "./routes/userNotAllowed";
import UserRegistration from "./routes/Login/userRegistration";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/teclados" element={<Teclados />}></Route>
        <Route path="/mouses" element={<Mouses />}></Route>
        <Route path="/smartphones" element={<Smartphones />}></Route>
        <Route path="*" element={<NotFound />}></Route>

        <Route
          path="/paineldecontrole"
          element={<ProtectedRoute requiredRole={"Admin"} />}>
          <Route index element={<ControlPanel />} />
        </Route>

        <Route
          path="/adicionarproduto"
          element={<ProtectedRoute requiredRole={"Admin"} />}>
          <Route index element={<AddProduct />} />
        </Route>

        <Route
          path="/editarproduto"
          element={<ProtectedRoute requiredRole={"Admin"} />}>
          <Route index element={<EditProductRoute />} />
        </Route>

        <Route
          path="/deletarproduto"
          element={<ProtectedRoute requiredRole={"Admin"} />}>
          <Route index element={<DeleteProduct />} />
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/nao-permitido" element={<UserNotAllowed />}></Route>
        <Route path="/criarusuario" element={<UserRegistration />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
