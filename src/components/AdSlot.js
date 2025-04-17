// src/components/AdSlot.js
import React, { useEffect, useRef } from "react";

function AdSlot({ id, width, height, slotId, siteId, publisherId }) {
  const adContainerRef = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    // Load Prebid.js script
    if (!initialized.current) {
      initialized.current = true;

      // Initialize AVANO_SLOTS if it doesn't exist
      if (!window.AVANO_SLOTS) {
        window.AVANO_SLOTS = [];
      }

      // Add this slot to AVANO_SLOTS
      window.AVANO_SLOTS.push({
        slotId: slotId,
        siteId: siteId,
        publisherId: publisherId,
        size: `${width}x${height}`,
        type: "banner",
        containerId: id,
        floorPrice: 0.1,
        position: "article",
      });

      // If Prebid.js is not already loaded, load it
      if (!document.getElementById("avano-prebid-script")) {
        const script = document.createElement("script");
        script.id = "avano-prebid-script";
        script.async = true;
        script.src = "https://cdn.avano.io/prebid.js"; // Your hosted Prebid.js script
        script.onload = () => {
          console.log("Prebid.js loaded successfully");
          // If AVANO is initialized, render ads
          if (window.AVANO && window.AVANO.renderAds) {
            window.AVANO.renderAds();
          }
        };
        document.head.appendChild(script);
      } else {
        // If AVANO is already initialized, render ads
        if (
          window.AVANO_INITIALIZED &&
          window.AVANO &&
          window.AVANO.renderAds
        ) {
          window.AVANO.renderAds();
        }
      }
    }

    // For development only: show a placeholder ad if no real ads are available
    const placeholderTimeout = setTimeout(() => {
      if (adContainerRef.current && !adContainerRef.current.innerHTML.trim()) {
        adContainerRef.current.innerHTML = `
          <div style="width:${width}px;height:${height}px;background:#f0f0f0;color:#888;
            display:flex;align-items:center;justify-content:center;border:1px solid #ddd;font-size:12px;">
            Ad Placeholder (${width}x${height})
          </div>
        `;
      }
    }, 2000);

    return () => {
      clearTimeout(placeholderTimeout);
    };
  }, [id, width, height, slotId, siteId, publisherId]);

  return (
    <div className="ad-container">
      <div className="ad-label">Advertisement</div>
      <div id={id} ref={adContainerRef} style={{ width, height }}></div>
    </div>
  );
}

export default AdSlot;
