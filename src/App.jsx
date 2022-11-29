import Header from "./components/Header";
import Post from "./components/Post";
import StoryAvatar from "./components/StoryAvatar";
import { Container } from "./styles";

export default function App() {
  return (
    <Container>
      <Header />
      <div className="wrapperContent">
        <div className="content">
          <div className="stories">
            <StoryAvatar name="guh_enzo" />
            <StoryAvatar name="alexia" />
            <StoryAvatar name="bina_ps_" />
            <StoryAvatar name="vicktor" />
            <StoryAvatar name="jadson_hudson" />
            <StoryAvatar name="heloisaguimaraes" />
            <StoryAvatar name="lucas" />
          </div>
          <div className="feed">
            <Post
              name="ifma_campuscaxias"
              date="HÁ 1 HORA"
              firstLike="guh_enzo"
              totalLikes={1000}
              totalComments={3}
              description="Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur"
            >
              <img src="https://picsum.photos/600/600" alt="" />
            </Post>
            <Post
              name="ifma_campuscaxias"
              date="HÁ 1 HORA"
              firstLike="guh_enzo"
              totalLikes={1000}
              totalComments={3}
              description="Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur"
            >
              <img src="https://picsum.photos/600/600" alt="" />
            </Post>
          </div>
        </div>

        <div className="sidebar">
          Sidebar
          <div className="footer"></div>
        </div>
      </div>
    </Container>
  );
}
