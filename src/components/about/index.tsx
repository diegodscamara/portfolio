import { Content, Description, Header, Title, Wrapper } from "./styles";

import { Button } from "../../components/button";

/**
 * Renders the About component.
 *
 * @return {JSX.Element} The rendered About component.
 */
export function About(): JSX.Element {
  return (
    <Wrapper id="About">
      <img
        src="/images/about.svg"
        alt="Front End Developer"
        width={650}
        height={400}
      />
      <Content>
        <Header>
          <img
            src="/icons/fast-arrow-right.svg"
            alt="Fast arrow"
            width={24}
            height={24}
          />
          <Title>About Me</Title>
        </Header>
        <Description>
          Experienced Front End Developer skilled in Next.js, React, and
          TypeScript. Spearheaded innovative projects at Genetec, including the
          implementation of a cutting-edge AI-powered system and optimization of
          CI/CD pipelines. Led the development of a Learning Management System
          (LMS) for medical professionals and contributed to e-commerce platform
          initiatives at NSH Technologies. Adept at translating design concepts
          into seamless user interfaces and optimizing performance.
        </Description>
        <Button variant="outlined">
          <a
            href="/documents/resume.docx"
            target="_blank"
            rel="noopener noreferrer"
            title="Open resume in new tab"
          >
            Download resume
            <img
              src="/icons/download.svg"
              alt="Download resume"
              width={16}
              height={16}
            />
          </a>
        </Button>
      </Content>
    </Wrapper>
  );
}
