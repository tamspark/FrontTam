import { FC } from 'react';

// hooks
import { useNavigate } from 'react-router';

// style
import {
    Box,
    Content,
    ApartmentText,
    GoToApartmentsButton
} from './style/ApartmentBox.style';
import ApartmentIcon from '@mui/icons-material/Apartment';


const ApartmentBox: FC<{}> = () => {

    const navigate = useNavigate();

    const goToAparmentHandler = () => navigate('/apartmentpage');

    return (
        <Box>
            <Content>

                <ApartmentIcon style={{fontSize:60}}/>
                <ApartmentText>Manage here your Properties</ApartmentText>

                <GoToApartmentsButton
                    onClick={goToAparmentHandler}
                >
                    Go to properties
                </GoToApartmentsButton>
            </Content>
        </Box>
    );
};

export default ApartmentBox;
