import { MagnifyingGlass } from "phosphor-react";

import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <div className="logo"></div>
      <div className="searchBar">
        <MagnifyingGlass size={32} />
      </div>
      <div className="options"></div>
    </Container>
  );
}
