import Header from "./components/Header";
import Post from "./components/Post";
import StoryAvatar from "./components/StoryAvatar";
import { Container, Sidebar } from "./styles";
import Avatar from "./assets/images/avatar.jpg";

export default function App() {
  return (
    <Container>
      <Header />
      <div className="wrapperContent">
        <div className="mainContent">
          <div className="stories">
            <StoryAvatar name="user_monitoria" historyData={{ image: [] }} />
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

        <Sidebar>
          <div className="user">
            <img src={Avatar} alt="" />
            <div className="info">
              <span className="nameID">user_monitoria</span>
              <span className="name">Monitoria</span>
            </div>
            <button>Trocar</button>
          </div>
          <div className="suggestions">
            <div className="title">
              <span>Sugestões para você</span>
              <button>Ver tudo</button>
            </div>
            <div className="suggestion">
              <img src={Avatar} alt="" />
              <div className="info">
                <span>yuri</span>
              </div>
              <button>Seguir</button>
            </div>
            <div className="suggestion">
              <img src={Avatar} alt="" />
              <div className="info">
                <span>pedro_lucas</span>
              </div>
              <button>Seguir</button>
            </div>
          </div>
          <footer>
            <nav>
              <ul>
                <li>
                  <a href=" ">
                    <span>Sobre</span>
                  </a>
                </li>
                <li>
                  <a href=" ">
                    <span>Ajuda</span>
                  </a>
                </li>
                <li>
                  <a href=" ">
                    <span>Press</span>
                  </a>
                </li>
                <li>
                  <a href=" ">
                    <span>API</span>
                  </a>
                </li>
                <li>
                  <a href=" ">
                    <span>obs</span>
                  </a>
                </li>
                <li>
                  <a href=" ">
                    <span>Privacy</span>
                  </a>
                </li>
                <li>
                  <a href=" ">
                    <span>Terms</span>
                  </a>
                </li>
                <li>
                  <a href=" ">
                    <span>Locations</span>
                  </a>
                </li>
                <li>
                  <a href=" ">
                    <span>Language</span>
                  </a>
                </li>
              </ul>
            </nav>
            <span className="copy">© 2022 INSTAGRAM FROM META</span>
          </footer>
        </Sidebar>
      </div>
    </Container>
  );
}
