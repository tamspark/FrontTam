import { FC, useState } from "react";
// style
import { Page } from "App/style/App.style";
import { Outlet } from "react-router-dom";
import Navbar from "Components/Navbar/Navbar.component";
import ChatComponent from "Components/OpenAIAssistant/OpenAIAssistant.component";
import Sidebar from "Components/Sidebar/Sidebar.component";

// import imazh from "../../Authenticator_App.png"


const Authenticated: FC<{}> = () => {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Page>
      
     <Navbar/>
    
        <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
 <ChatComponent/>

        <Outlet />
      </Page>
    </>
  );
};

export default Authenticated;
