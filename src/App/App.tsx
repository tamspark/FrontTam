import { FC } from "react";

// style
import {} from "./style/App.style";
import ResetPassword from "Pages/Reset Password/ResetPassword";
import Login from "Pages/Login/Login.component";
import AuthPage from "Pages/Auth/Auth";
import Verification from "Pages/SecondStepAuth/SecondStep.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgetPassword from "../Pages/ChangePassword/ForgetPassword.component";
import Register from "../Pages/Register/Register.component";
import SavePasword from "../Pages/savePassword/SavePassword.component";
import ApartmentPage from "Pages/ApartmentPage/ApartmentPage.component";
import ApartmentCard from "Pages/ApartmentCard/ApartmentCard.component";
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
            <Route path="tam/registration/:token" element={<SavePasword />} />
            <Route path="apartmentpage" element={<ApartmentPage />} />
            <Route path="apartmentcard/:id" element={<ApartmentCard />} />
            <Route path="forgetpassword" element={<ForgetPassword />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="verify" element={<Verification />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
