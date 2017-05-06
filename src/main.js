import React from "react";
import ReactDOM from "react-dom";
import "./public/styles/main.css";
import "./public/styles/frame.css";

import Layout from "./pages/Layout/layout";

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);