import React from 'react';
import styled from 'styled-components';

export const Container = React.memo(styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  isolation: isolate;
  background: linear-gradient(55.27deg, rgba(240, 240, 240, 0.04) 0%, rgba(240, 240, 240, 0) 100%);
  backdrop-filter: blur(21px);
  border-radius: 4px;

  img {
    width: 100%;
    height: 100%;
  }
`);

export const Content = React.memo(styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px;
  gap: 24px;

  img {
    width: 16px;
    height: 16px;
  }
`);

export const Header = React.memo(styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`);

export const Title = React.memo(styled.h4`
  color: #F0F0F0;
`);

export const Description = React.memo(styled.span`
  color: #CFCFCF;
`);
