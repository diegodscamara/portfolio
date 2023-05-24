import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 24px;
  width: 100%;
  border: 2px solid #494949;
  border-radius: 4px;
`;

export const CardTitle = styled.h4``;

export const CardDescription = styled.span`
  text-align: center;
  color: #B5B5B5;
`;

export const ExpertiseContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const ExpertiseTitle = styled.h3``;

export const ExpertiseCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;