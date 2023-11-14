import { FC } from "react";
// style
import { Page } from "App/style/App.style";
import { Content } from "App/style/App.style";
import { Outlet } from "react-router-dom";
// import imazh from "../../Authenticator_App.png"

const AuthPage: FC<{}> = () => {
  return (
    <>
      <Page>
        {/* <Content> */}
        {/* <img alt="" src={imazh}></img> */}
        {/* </Content> */}
        <Outlet />
      </Page>
    </>
  );
};

export default AuthPage;
