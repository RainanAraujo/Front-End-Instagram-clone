import { House, MagnifyingGlass, Compass } from "phosphor-react";
import { Container } from "./styles";
import InstagramLogo from "../../assets/images/instagram-logo.svg";

export default function Header() {
  return (
    <Container>
      <figure className="logo">
        <img src={InstagramLogo} alt="" />
      </figure>
      <button className="menuButton">
        <House size={32} weight="fill" />
        Home
      </button>
      <button className="menuButton">
        <MagnifyingGlass size={32} />
        Pesquisar
      </button>
      <button className="menuButton">
        <Compass size={32} />
        Explore
      </button>
      <button className="menuButton">
        <MagnifyingGlass size={32} />
        Messages
      </button>
      <button className="menuButton">
        <MagnifyingGlass size={32} />
        Notifications
      </button>
      <button className="menuButton">
        <MagnifyingGlass size={32} />
        Create
      </button>
      <button className="menuButton">
        <MagnifyingGlass size={32} />
        Profile
      </button>

      <div className="options"></div>
    </Container>
  );
}
