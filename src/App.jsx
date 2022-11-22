import Header from "./components/Header";
import { Container } from "./styles";

export default function App() {
  return (
    <Container>
      <Header />
      <div className="wrapperContent">
        <div className="content">
          <div className="stories">
            <div className="story">
              <div className="avatar">
                <img src="" alt="" />
                <span className="name">Nome do usuário</span>
              </div>
            </div>
          </div>
          <div className="feed"></div>
        </div>

        <div className="sidebar">
          Sidebar
          <div className="footer"></div>
        </div>
      </div>
    </Container>
  );
}
