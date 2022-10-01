import { useContext } from "react";
import { translation } from "library/Translation/translation";
import { Menu, MenuItem, MenuLink, Nav } from "./navigation.styled";
import SharedContext from "components/ContextProvider";
import Link from "next/link";
const context = require("./context.json");

interface Props {
  isDisplayed: boolean;
}

export default function Navigation(props: Props) {
  const { isDisplayed } = props;
  const { language } = useContext(SharedContext);

  const t = translation(language);
  const nav_keys = Object.keys(context);

  return (
    <Nav isDisplayed={isDisplayed}>
      <Menu>
        {nav_keys.map((key) => (
          <MenuItem key={key}>
            <Link href={`${context[key].path}/${language}`}>
              <MenuLink>{t(context[key]).toUpperCase()}</MenuLink>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Nav>
  );
}
