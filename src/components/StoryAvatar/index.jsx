import { Container } from "./styles";
import Avatar from "../../assets/images/avatar.jpg";

export default function StoryAvatar({
  name,
  size = "medium",
  historyData = { image: [] },
}) {
  console.log(historyData.image !== []);
  return (
    <Container size={size} borderColorful={historyData.image !== []}>
      <div className="avatar">
        <img src={Avatar} alt="" />
      </div>
      {name && <span>{name}</span>}
    </Container>
  );
}
