import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03), 0 2px 3px rgba(0, 0, 0, 0.05);

  width: 227px;
  height: 327px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 568px) {
    min-width: 227px;
    margin-bottom: 16px;
  }

  .image-skeleton {
    max-width: 179px;
    width: 100%;
    height: 179px;

    border-radius: 50%;

    margin-top: 16px;
  }

  div {
    width: 100%;
    margin: auto auto 0 auto;

    .row-skeleton {
      width: 80%;
      height: 16px;

      border-radius: 16px;

      margin-bottom: 8px;

      :nth-child(2) {
        width: 60%;
      }

      :nth-child(3) {
        width: 40%;
      }
    }
  }
`;