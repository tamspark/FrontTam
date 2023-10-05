import { FC } from "react";

// style
import {} from "./style/App.style";
import ResetPassword from "Pages/Reset Password/RecoverPassword";
import Login from "Pages/Login/Login.component";
import AuthPage from "Pages/Auth/Auth";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgetPassword from "Authentication/ChangePassword/ForgetPassword.component";
import Register from "Authentication/Register/Register.component";

const App: FC<{}> = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthPage />}>
            <Route path="login" element={<Login />} index />
            <Route
              path="tam/resetPassword/:token"
              element={<ResetPassword />}
            />
            <Route path="forgetpassword" element={<ForgetPassword />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
