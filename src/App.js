// src/App.js
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";
import Sidebar from "./components/Sidebar";
import AdSlot from "./components/AdSlot";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <div className="container">
          {/* Leaderboard Ad (728x90) */}
          <AdSlot
            id="leaderboard-ad"
            width={728}
            height={90}
            slotId="SLOT_ID_1"
            siteId="SITE_ID"
            publisherId="PUBLISHER_ID"
          />

          <div className="content-layout">
            <div className="article-container">
              <ArticleList />

              {/* Medium Rectangle Ad (300x250) */}
              <AdSlot
                id="rectangle-ad-1"
                width={300}
                height={250}
                slotId="SLOT_ID_2"
                siteId="SITE_ID"
                publisherId="PUBLISHER_ID"
              />
            </div>

            <Sidebar />
          </div>

          {/* Second Leaderboard Ad (728x90) */}
          <AdSlot
            id="leaderboard-ad-2"
            width={728}
            height={90}
            slotId="SLOT_ID_3"
            siteId="SITE_ID"
            publisherId="PUBLISHER_ID"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
