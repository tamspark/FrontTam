import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  color: black;

  text-align: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  border-top: 1px solid #333;

  @media (max-width: 1050px) {
    display:none;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      Copyright © 2024 TAM. All Rights Reserved. All prices exclude the legal VAT.
    </FooterContainer>
  );
};

export default Footer;
