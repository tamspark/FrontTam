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

    const goToAparmentHandler = () => navigate('/auth/apartmentpage');

    return (
        <Box>
            <Content>

                <ApartmentIcon style={{fontSize:60}}/>
                <ApartmentText>Manage here your apartments</ApartmentText>

                <GoToApartmentsButton
                    onClick={goToAparmentHandler}
                >
                    Go to apartments
                </GoToApartmentsButton>
            </Content>
        </Box>
    );
};

export default ApartmentBox;
