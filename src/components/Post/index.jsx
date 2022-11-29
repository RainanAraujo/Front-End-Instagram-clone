import { Container } from "./styles";
import StoryAvatar from "../StoryAvatar";
import {
  BookmarkSimple,
  ChatCircle,
  DotsThree,
  Heart,
  PaperPlaneTilt,
  Smiley,
} from "phosphor-react";

export default function Post({
  name,
  children,
  firstLike,
  totalLikes,
  totalComments,
  date,
  description,
}) {
  return (
    <Container>
      <div className="header">
        <div className="profile">
          <StoryAvatar size="small" />
          <span>{name}</span>
        </div>
        <button className="rightContent">
          <DotsThree size={24} />
        </button>
      </div>
      <div className="content">{children}</div>
      <div className="actions">
        <div className="left">
          <button>
            <Heart size={28} />
          </button>
          <button>
            <ChatCircle size={28} />
          </button>
          <button>
            <PaperPlaneTilt size={28} />
          </button>
        </div>
        <div className="right">
          <button>
            <BookmarkSimple size={28} />
          </button>
        </div>
      </div>
      <div className="liked">
        <span>
          Curtido por <strong>{firstLike}</strong> e{" "}
          <strong>outras {totalLikes} pessoas</strong>
        </span>
      </div>
      <div className="description">
        <strong>{name}</strong> {description}
      </div>
      <div className="comments">
        <span>Ver todos os {totalComments} comentários</span>
      </div>
      <div className="date">
        <span>{date}</span>
      </div>
      <div className="footer">
        <button className="emojis">
          <Smiley size={28} />
        </button>
        <input type="text" placeholder="Adicione um comentário..." />
        <button className="publish">Publicar</button>
      </div>
    </Container>
  );
}
