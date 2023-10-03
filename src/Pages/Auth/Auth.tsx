import { FC } from "react";
// style
import { Page } from "App/style/App.style";
import {Outlet} from  "react-router-dom"
import imazh from "../../Authenticator_App.png"

const AuthPage: FC<{}> = () => {

  return (
    <>
   <Page>
    <img alt="" src={imazh}></img>
    <Outlet/>
   </Page>
    </>
  );
};

export default AuthPage;
