import styled from "styled-components";

export const Image = styled.img`
  width: 450px;
  margin-left: 40px;

  @media(max-width: ${({theme}) => theme.mobile}) {
    margin: 30px;
    width: 385px;
  }
`;
