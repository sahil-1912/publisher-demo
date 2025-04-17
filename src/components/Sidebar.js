// src/components/Sidebar.js
import React from "react";
import AdSlot from "./AdSlot";

function Sidebar() {
  // Mock popular posts
  const popularPosts = [
    { id: 1, title: "Understanding the Latest Market Trends", views: "1.2k" },
    { id: 2, title: "Top 10 Travel Destinations for 2025", views: "986" },
    { id: 3, title: "The Science Behind Healthy Eating", views: "845" },
    { id: 4, title: "New Tech Gadgets Coming This Summer", views: "790" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3>Popular Posts</h3>
        <ul className="popular-posts">
          {popularPosts.map((post) => (
            <li key={post.id}>
              <a href={`/article/${post.id}`}>{post.title}</a>
              <span className="views">{post.views} views</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar Ad (300x250) */}
      <AdSlot
        id="sidebar-ad"
        width={300}
        height={250}
        slotId="SLOT_ID_4"
        siteId="SITE_ID"
        publisherId="PUBLISHER_ID"
      />

      <div className="sidebar-section">
        <h3>Subscribe to Newsletter</h3>
        <form className="newsletter-form">
          <input type="email" placeholder="Your Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </aside>
  );
}

export default Sidebar;
