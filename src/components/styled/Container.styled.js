import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 35px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* padding: 0 50px; */
  }
`;
