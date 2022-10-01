import { useState } from "react";
import { HeaderElement, Options, Wrapper } from "./header.styled";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Burger from "./Burger/Burger";
import LanguageSelect from "./LanguageSelect/LanguageSelect";

export default function Header() {
  const [isNavDisplayed, setNavDisplayed] = useState(false);

  return (
    <Wrapper>
      <HeaderElement>
        <Logo />
        <Navigation isDisplayed={isNavDisplayed} />
        <Options>
          <LanguageSelect />
          <Burger
            onClickedOutside={() => setNavDisplayed(false)}
            onClick={() => setNavDisplayed(!isNavDisplayed)}
          />
        </Options>
      </HeaderElement>
    </Wrapper>
  );
}
