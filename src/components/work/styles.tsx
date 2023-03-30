import Button from "../button";
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

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, 1fr);
  }

  .thumbnail-wrapper {
    position: relative;
    flex: 1;
    min-width: 0;

    &:hover img {
    opacity: 0.4;
    transform: scale(1.01);
    }
  }

  a {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-in-out;
  }

  .thumbnail-wrapper:hover a {
    display: inline-block;
  }
`;

export const Thumbnail = styled(Image)`
  border-radius: 4px;
  object-fit: contain;
  height: 100%;
  opacity: 1;
  transition: all 0.3s ease-in-out;
  
  @media only screen and (max-width: 1600px) {
    width: 465px;
  }

  @media only screen and (max-width: 1440px) {
    width: 446px;
  }

  @media only screen and (max-width: 1280px) {
    width: 390px;
  }

  @media only screen and (max-width: 1200px) {
    width: 360px;
  }

  @media only screen and (max-width: 1024px) {
    width: 310px;
  }

  @media only screen and (max-width: 900px) {
    width: 270px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Site = styled(Button)``;

export const Wrapper = styled.section``;

export const Title = styled.h3``;
