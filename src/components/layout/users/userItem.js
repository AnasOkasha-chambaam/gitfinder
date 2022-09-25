import React from "react";

const UserItem = (props) => {
  /*
  constructor(){
    super();
    this.state ={
      id: 'id',
      name: 'Anonymous',
      avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
      html_url: "https://github.com/mojombo"
    };
    this.render = this.render.bind(this)
  } */

  const { id, login, avatar_url, html_url } = props.user;
  let delayDuration = 0.05 * props.indexx;
  return (
    <div
      className="card text-center users"
      id="user"
      style={{ animationDelay: delayDuration + "s" }}
    >
      <img
        src={avatar_url}
        alt={login}
        className="round-img av-img"
        style={{ animationDelay: delayDuration + "s" }}
      />
      <h4 id="user-id" style={{ animationDelay: delayDuration + "s" }}>
        {id}
      </h4>
      <h1>{login}</h1>
      <div className="acc-link acc-btn" id="acc-link">
        <a href={html_url} className="btn btn-dark btn-sm my-1" id="link">
          Profile
        </a>
      </div>
    </div>
  );
};

export default UserItem;
