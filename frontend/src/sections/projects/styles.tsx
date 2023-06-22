import Image from "next/image";
import styled from 'styled-components';

export const Container = styled.figure`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fit, 1fr);
  align-items: center;
  padding: 0px;
  gap: 16px;
  max-width: 100%;
  position: relative;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto-fit, 1fr);
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(auto-fit, 1fr);
  }
`;

export const Wrapper = styled.section``;

export const Title = styled.h3``;
