import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  width: 100%;
  border: 2px solid #E5E7EB;
  border-radius: 0.375rem;
`;

export const CardTitle = styled.h4`
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const CardDescription = styled.span`
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

export const ExpertiseContainer = styled.section`
  margin: 0 auto;
  padding: 8rem 2rem;
`;

export const ExpertiseTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  text-align: center;
  color: #ffffff;
`;

export const ExpertiseCardWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;