import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login/page";
// import Register from "./login/register";
// import WebAppHome from "./home";
// import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Login />
    </div>
  );
}
