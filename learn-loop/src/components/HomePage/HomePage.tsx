import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./HomePage.css";
import Nav from "../Nav/Nav";

function HomePage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((store: any) => store.user.userReducer);

  return (
    <div>
      <Nav />

      <h1>Welcome to Auth React</h1>
    </div>
  );
}

export default HomePage;
