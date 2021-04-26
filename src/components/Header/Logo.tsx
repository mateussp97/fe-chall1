import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 2rem;
    height: 2rem;
    margin-right: 8px;
  }

  h1 {
    font-size: 2rem;
  }
`;

export default function Logo() {
  return (
    <Box>
      <img src="./Logo.png" alt="Cuponeria" />
      <h1>Cuponeria Store</h1>
    </Box>
  );
}
