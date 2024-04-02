import {
  Column,
  Container,
  ScrollLink,
  Subtitle,
  Title,
  Wrapper,
} from "./styles";

import { AudioContext } from "../../context/AudioContext";
import { Button } from "../../components/button";
import { PlayAudio } from "../play-audio";
import { useContext } from "react";

/**
 * Renders the Hero component.
 *
 * @return {JSX.Element} The rendered Hero component.
 */
export function Hero(): JSX.Element {
  const { audio } = useContext(AudioContext);

  return (
    <Wrapper id="Home">
      <Container>
        <Column>
          <Title>
            Hi, I&apos;m Diego Câmara
            <br />
            A Front End Developer
            <br />
            Based in Toronto
          </Title>
          <Subtitle>
            I help businesses and companies reach
            <br />
            their goals by designing and developing
            <br />
            user-centric web applications
          </Subtitle>
          <Button variant="filled">
            <a href="#Contact" title="Get in touch">
              Get in touch
            </a>
          </Button>
        </Column>

        <Column>
          <img
            src="/images/profile.jpeg"
            alt="Diego Câmara - Front End Developer"
            width={320}
            height={220}
            className="radius"
          />
        </Column>
      </Container>

      <ScrollLink
        href="#About"
        title="Scroll down"
        onClick={() => {
          audio === "on" && PlayAudio({ file: "/sounds/click.wav" });
        }}
      >
        <img
          src="/icons/scroll-down-icon.svg"
          alt="Scroll down"
          width={24}
          height={24}
        />
      </ScrollLink>
    </Wrapper>
  );
}
