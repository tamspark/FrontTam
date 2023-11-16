import { FC } from "react";
// style
import { Page } from "App/style/App.style";
import { Outlet } from "react-router-dom";
import Navbar from "Components/Navbar/Navbar.component";
// import imazh from "../../Authenticator_App.png"


const Authenticated: FC<{}> = () => {
  return (
    <>
      <Page>
      
     <Navbar/>
 
        <Outlet />
      </Page>
    </>
  );
};

export default Authenticated;
