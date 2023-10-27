import { FC } from "react";

// style
import {} from "./style/App.style";
import ResetPassword from "Pages/Reset Password/ResetPassword";
import Login from "Pages/Login/Login.component";
import AuthPage from "Pages/Auth/Auth";
import Verification from "Pages/SecondStepAuth/SecondStep.component";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import ForgetPassword from "../Pages/ChangePassword/ForgetPassword.component";
import Register from "../Pages/Register/Register.component";
import SavePasword from "../Pages/savePassword/SavePassword.component";
import ApartmentPage from "Pages/ApartmentPage/ApartmentPage.component";
import ApartmentCard from "Pages/ApartmentCard/ApartmentCard.component";
import MonthTable from "Pages/CalendarReservations/calendar";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

const App: FC<{}> = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  return (
    <>
   
     <BrowserRouter>
  <Routes>
    {isAuthenticated ? (
      <Route path="/auth" element={<AuthPage />}>
        <Route path="tam/resetPassword/:token" element={<ResetPassword />} />
        <Route path="tam/registration/:token" element={<SavePasword />} />
        <Route path="apartmentpage" element={<ApartmentPage />} />
        <Route path="forgetpassword" element={<ForgetPassword />} />
        <Route path="verify" element={<Verification/>} />
        <Route path="apartmentcard/:id" element={<ApartmentCard />} />
        <Route path="*" element={<Navigate to="apartmentpage" replace />} />
      </Route>
    ) : (
      <Route path="/auth" element={<AuthPage />}>
      <Route path="/auth/login" element={<Login />} index />
      <Route path="/auth/register" element={<Register/>} />
      <Route path="/auth/calendar" element={<MonthTable/>} />
      <Route path="*" element={<Navigate to="/auth/login" replace />} /> 
      </Route>
    )}
   
  </Routes>
</BrowserRouter>
    </>
  );
};

export default App;
