import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import { Podcasts, PodcastDetails } from "./views/Podcasts";
import App from "./App";
import "./style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="podcasts/" element={<Podcasts />}>
            <Route path=":id" element={<PodcastDetails />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
