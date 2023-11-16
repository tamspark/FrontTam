import { FC } from 'react';

import {
    Box,
    Content,
    DetailRow,
    Label,
    LabelValue
} from './style/UserInfoBox.style';


const USER_DUMMY_DATA = {
    name: 'Antonio',
    surname: 'Banderas',
    numberOfPropertiesLoaded: 23
}; // to do set the real user data

const UserInfoBox: FC<{}> = () => {

    return (
        <Box>
            <Content>
                <DetailRow>
                    <Label>Name</Label>

                    <LabelValue>{USER_DUMMY_DATA.name}</LabelValue>
                </DetailRow>

                <DetailRow>
                    <Label>Surname</Label>

                    <LabelValue>{USER_DUMMY_DATA.surname}</LabelValue>
                </DetailRow>

                <DetailRow>
                    <Label>Property Loaded</Label>

                    <LabelValue>{USER_DUMMY_DATA.numberOfPropertiesLoaded}</LabelValue>
                </DetailRow>
            </Content>
        </Box>
    );
};

export default UserInfoBox;
