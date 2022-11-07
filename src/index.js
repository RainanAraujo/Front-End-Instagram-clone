import ReactDOM from "react-dom";
import { MagnifyingGlass } from "phosphor-react";

ReactDOM.render(
  <div>
    <div className="header">
      <div className="logo">
        <img
          src="https://i.pinimg.com/originals/58/78/fa/5878faabdbde40edd6a32228e946a120.jpg"
          alt=""
        />
      </div>
      <div className="searchBar">
        <MagnifyingGlass size={32} />
      </div>
      <div className="options"></div>
    </div>
    <div className="container">
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
      <div className="sidebar"></div>
      <div className="footer"></div>
    </div>
  </div>,

  document.getElementById("root")
);
