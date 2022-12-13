import { Container } from "./styles";
import Avatar from "../../assets/images/avatar.jpg";

export default function StoryAvatar({ name, size = "medium" }) {
  return (
    <Container size={size}>
      <div className="avatar">
        <img src={Avatar} alt="" />
      </div>
      {name && <span>{name}</span>}
    </Container>
  );
}
