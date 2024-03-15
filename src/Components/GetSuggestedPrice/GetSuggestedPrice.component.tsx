import axios from "axios";
import { FC, useState } from "react";

import {
  FormContainer,
  FormGroup,
  Label,
  Input,
  Button,
  ButtonHolder,
} from "./GetSuggestedPrice.style";

const GetSuggestedPrice: FC = () => {
  const [formData, setFormData] = useState({
    Checkin_date: "",
    Checkout_date: "",
  });

  const getNextDay = (date: string) => {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() + 1);
    return currentDate.toISOString().split("T")[0];
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post("API_URL", formData);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="firstName">Checkin date:</Label>
          <Input
            type="date"
            id="checkindate"
            name="CheckinDate"
            value={formData.Checkin_date}
            onChange={(e: any) =>
              setFormData({ ...formData, Checkin_date: e.target.value })
            }
            min={today}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastName">Checkout date:</Label>
          <Input
            type="date"
            id="checkoutdate"
            name="CheckoutDate"
            value={formData.Checkout_date}
            onChange={(e: any) =>
              setFormData({ ...formData, Checkout_date: e.target.value })
            }
            min={
              formData.Checkin_date ? getNextDay(formData.Checkin_date) : today
            }
          />
        </FormGroup>
        <ButtonHolder>
          <Button type="submit">Submit</Button>
        </ButtonHolder>
      </form>
    </FormContainer>
  );
};

export default GetSuggestedPrice;
