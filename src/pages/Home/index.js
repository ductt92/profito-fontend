import React from "react";
import Typewriter from "typewriter-effect";
import { TextElement, WrapperContainer, ButtonBottom } from "./HomeElement";
import { FaAngleDoubleDown } from "react-icons/fa";

const HomeContainer = () => {
  return (
    <WrapperContainer>
      <TextElement>Wellcome</TextElement>
      <Typewriter
        options={{
          strings: [`I'm Tran Trong Duc`, "I'm a developer"],
          autoStart: true,
          loop: true,
          wrapperClassName: "typeWriter",
          cursorClassName: "typeWriter",
        }}
      />
      <ButtonBottom >
        <FaAngleDoubleDown />
      </ButtonBottom>

      
    </WrapperContainer>
  );
};

export default HomeContainer;
