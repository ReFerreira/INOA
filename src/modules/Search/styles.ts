import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormContainer = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

export const SelectedContainer = styled.div`
    display: flex;
    column-gap: 5px;
    margin-top: 10px;
`;

export const SelectedList = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #333;
  flex-direction: row;

  span {
    margin-right: 10px;
  }

  svg {
    cursor: pointer;
  }
`;
