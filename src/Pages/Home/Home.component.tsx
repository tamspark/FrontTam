import { FC } from "react";

// components
import UserInfoBox from "./UserInfoBox/UserInfoBox.component";
import MessagesBox from "./MessagesBox/MessagesBox.component";
import HistoricalDataBox from "./HistoricalDataBox/HistoricalDataBox.component";
import BookingBox from "./BookingBox/BookingBox.component";
import ApartmentBox from "./ApartmentBox/ApartmentBox.component";

// style
import {
  Page,
  Content,
  TopBox,
  BottomBox,
  NextBookingBox,
//  HistoricalDataBox,
} from "./style/Home.style";

const Home: FC<{}> = () => {
  return (
    <Page>
      <Content>
        <TopBox>
          <UserInfoBox />

          <ApartmentBox />

          <MessagesBox />
        </TopBox>

        <BottomBox>
          <BookingBox />

          <HistoricalDataBox />
        </BottomBox>
      </Content>
    </Page>
  );
};

export default Home;
