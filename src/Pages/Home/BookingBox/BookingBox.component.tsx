import { FC } from 'react';

import {
    Box,
    Content,
    BookingText
} from './style/BookingBox.style';


const BookingBox: FC<{}> = () => {

    return (
        <Box>
            <Content>
                <BookingText>See here your last bookings:</BookingText>

                Here the last 5 or 10 booking rows
            </Content>
        </Box>
    );
};

export default BookingBox;
