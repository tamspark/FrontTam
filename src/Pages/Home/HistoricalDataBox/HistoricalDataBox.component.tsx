import { FC } from "react";

// routing
import { useNavigate } from "react-router";

// style
import {
  Box,
  Content,
  HistoricalText,
  GetToHistoricalsButton,
} from "./style/HistoricalDataBox.style";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const HistoricalDataBox: FC<{}> = () => {
  const navigate = useNavigate();

  const goToHistoricalHandler = () => navigate("/calendar");

  return (
    <Box>
      <Content>
        <CalendarMonthIcon style={{fontSize:60}} />
        <HistoricalText>See your historical data</HistoricalText>

        <GetToHistoricalsButton onClick={goToHistoricalHandler}>
          Go To Historicals
        </GetToHistoricalsButton>
      </Content>
    </Box>
  );
};

export default HistoricalDataBox;
