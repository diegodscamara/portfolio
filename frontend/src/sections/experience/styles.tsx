import styled from 'styled-components';
interface AccordionProps {
  open: boolean;
}
interface HeaderProps {
  open: boolean;
}

export const Section = styled.section``;

export const Title = styled.h3``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--space-xmd);
  gap: var(--space-sm);
  width: 100%;
  height: 100%;
  background: linear-gradient(55.27deg, rgba(240, 240, 240, 0.04) 0%, rgba(240, 240, 240, 0) 100%);
  backdrop-filter: var(--background-blur);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-10);

  &:hover {
    background: linear-gradient(55.27deg, rgba(240, 240, 240, 0.06) 0%, rgba(240, 240, 240, 0) 100%);
    box-shadow: var(--shadow-20);
  }
`;

export const Accordion = styled.div < AccordionProps > `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: var(--space-xmd);
  border-bottom: 1px solid var(--gray-800);
  padding-bottom: ${(props) => props.open ? 'var(--space-xmd)' : '0'};
`;

export const Header = styled.header < HeaderProps > `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  gap: var(--space-xs);
  width: 100%;
  cursor: pointer;

  svg[alt="Toggle icon"] {
    transition: var(--transition-03);
    transform: ${(props) => props.open ? 'rotate(-180deg)' : 'unset'}
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px;
  gap: var(--space-sm);
  min-height: auto;
`;

export const Company = styled.h5``;
export const Details = styled.span`
  height: 100%;
  font-style: normal;
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-xxs);
  color: var(--gray-200);
`;

interface ContentProps {
  open: boolean;
}

export const Content = styled.div < ContentProps > `
  display: flex;
  height: ${(props) => props.open ? 'auto' : '0'};
  overflow: hidden;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-sm);
  transition: var(--transition-03);
`;

export const Position = styled.h5`
  color: var(--gray-100);
`;

export const Intro = styled.span`
  color: var(--gray-100);
`;

export const Responsibilities = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Responsibility = styled.li`
  list-style-type: disc;
  list-style-position : inside;
  color: var(--gray-100);
`;