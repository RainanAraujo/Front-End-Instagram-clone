import {
  House,
  MagnifyingGlass,
  Compass,
  MessengerLogo,
  Heart,
  PlusCircle,
  List,
} from "phosphor-react";
import { Container, AvatarImage, MenuButton } from "./styles";
import Avatar from "../../assets/images/avatar.svg";

import InstagramLogo from "../../assets/images/instagram-logo.svg";

export default function Header() {
  return (
    <Container>
      <div className="wrapper">
        <figure className="logo">
          <img src={InstagramLogo} alt="" />
        </figure>
        <nav>
          <MenuButton className="menuButton" active={true}>
            <House size={28} weight="fill" />
            Página inicial
          </MenuButton>
          <MenuButton className="menuButton">
            <MagnifyingGlass size={28} />
            Pesquisa
          </MenuButton>
          <MenuButton className="menuButton">
            <Compass size={28} />
            Explorar
          </MenuButton>
          <MenuButton className="menuButton">
            <MessengerLogo size={28} />
            Mensagens
          </MenuButton>
          <MenuButton className="menuButton">
            <Heart size={28} />
            Notifications
          </MenuButton>
          <MenuButton className="menuButton">
            <PlusCircle size={28} />
            Create
          </MenuButton>
          <MenuButton className="menuButton">
            <AvatarImage src={Avatar} />
            Perfil
          </MenuButton>
        </nav>
      </div>
      <div className="options">
        <MenuButton className="menuButton">
          <List size={28} />
          Mais
        </MenuButton>
      </div>
    </Container>
  );
}
