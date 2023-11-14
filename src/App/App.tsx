import { FC } from "react";

// style
import {} from "./style/App.style";
import ResetPassword from "Pages/Reset Password/ResetPassword";
import Login from "Pages/Login/Login.component";
import AuthPage from "Pages/Auth/Auth";
import Verification from "Pages/SecondStepAuth/SecondStep.component";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ForgetPassword from "../Pages/ChangePassword/ForgetPassword.component";
import Register from "../Pages/Register/Register.component";
import SavePasword from "../Pages/savePassword/SavePassword.component";
import ApartmentPage from "Pages/ApartmentPage/ApartmentPage.component";
import ApartmentCard from "Pages/ApartmentCard/ApartmentCard.component";
import MonthTable from "Pages/CalendarReservations/calendar";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import Modal from "Components/Modal/Modal.component";
import RentList from "Components/RentList/RentList.component";
import MessagePage from "Components/MessagePage/MessagePage.component";

const App: FC<{}> = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <>
      <BrowserRouter>
        <Routes>
          {isAuthenticated ? (
            <Route path="/auth" element={<AuthPage />}>
              <Route
                path="tam/resetPassword/:token"
                element={<ResetPassword />}
              />
              <Route path="apartmentpage" element={<ApartmentPage />} />
              <Route path="forgetpassword" element={<ForgetPassword />} />
              <Route path="verify" element={<Verification />} />
              <Route
                path="apartmentcard/:id"
                element={<ApartmentCard />}
              />{" "}
              <Route path="modal" element={<Modal />} />
              <Route path="calendar" element={<MonthTable />} />
              <Route path="rentlist" element={<RentList rentalData={[]} />} />
              <Route path="messagepage" element={<MessagePage />} />
              <Route
                path="*"
                element={<Navigate to="apartmentpage" replace />}
              />
            </Route>
          ) : (
            <Route path="/auth" element={<AuthPage />}>
              <Route path="/auth/login" element={<Login />} index />
              <Route path="/auth/register" element={<Register />} />{" "}
              <Route path="tam/registration/:token" element={<SavePasword />} />
              <Route path="*" element={<Navigate to="/auth/login" replace />} />
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
