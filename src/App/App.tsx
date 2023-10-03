import { FC } from "react";

// style
import {} from "./style/App.style";
import ResetPassword from "Pages/Reset Password/RecoverPassword";
import Login from "Pages/Login/Login.component";
import AuthPage from "Pages/Auth/Auth";

import {BrowserRouter,Routes,Route} from "react-router-dom"

const App: FC<{}> = () => {
  return <>
<BrowserRouter>
<Routes>
<Route path='/auth' element={<AuthPage/>}>
  <Route path='login' element={<Login/>} index/>
  <Route path='pw-recovery' element={<ResetPassword/>}/>
  </Route>
</Routes>

</BrowserRouter>

    </>;
};

export default App;
