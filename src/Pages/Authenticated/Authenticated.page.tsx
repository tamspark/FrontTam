import { FC } from "react";
// style
import { Page } from "App/style/App.style";
import { Outlet } from "react-router-dom";
import Navbar from "Components/Navbar/Navbar.component";
import ChatComponent from "Components/OpenAIAssistant/OpenAIAssistant.component";
// import imazh from "../../Authenticator_App.png"


const Authenticated: FC<{}> = () => {
  return (
    <>
      <Page>
      
     <Navbar/>
 <ChatComponent/>
        <Outlet />
      </Page>
    </>
  );
};

export default Authenticated;
