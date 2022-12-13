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
import Avatar from "../../assets/images/avatar.jpg";

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
            <span>Página inicial</span>
          </MenuButton>
          <MenuButton className="menuButton">
            <MagnifyingGlass size={28} />
            <span>Pesquisa</span>
          </MenuButton>
          <MenuButton className="menuButton">
            <Compass size={28} />
            <span>Explorar</span>
          </MenuButton>
          <MenuButton className="menuButton">
            <MessengerLogo size={28} />
            <span>Mensagens</span>
          </MenuButton>
          <MenuButton className="menuButton">
            <Heart size={28} />
            <span>Notifications</span>
          </MenuButton>
          <MenuButton className="menuButton">
            <PlusCircle size={28} />
            <span>Create</span>
          </MenuButton>
          <MenuButton className="menuButton">
            <AvatarImage src={Avatar} />
            <span>Perfil</span>
          </MenuButton>
        </nav>
      </div>
      <div className="options">
        <MenuButton className="menuButton">
          <List size={28} />
          <span>Mais</span>
        </MenuButton>
      </div>
    </Container>
  );
}
