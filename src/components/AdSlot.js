// src/components/AdSlot.js
import React, { useEffect, useRef } from "react";

function AdSlot({ id, width, height, slotId, siteId, publisherId }) {
  const adContainerRef = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    // Helper function to load scripts
    function loadScript(src, callback) {
      const script = document.createElement("script");
      script.async = true;
      script.src = src;

      if (callback) {
        script.onload = callback;
      }

      document.head.appendChild(script);
    }

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
        floorPrice: 0,
        position: "article",
      });

      // If Prebid.js is not already loaded, load it
      if (!document.getElementById("avano-prebid-script")) {
        const prebidScript = document.createElement("script");
        prebidScript.id = "avano-prebid-script";
        prebidScript.async = true;
        prebidScript.src =
          "https://cdn.jsdelivr.net/npm/prebid.js@latest/dist/prebid.js";

        prebidScript.onload = () => {
          console.log("Prebid.js loaded successfully");

          // Load additional scripts in sequence
          loadScript(
            "https://api.avano.io/static/js/avano-prebid-adapter.js",
            function () {
              loadScript(
                "https://api.avano.io/static/js/avano-prebid.js",
                function () {
                  // Now that all scripts are loaded, render ads
                  if (window.AVANO && window.AVANO.renderAds) {
                    window.AVANO.renderAds();
                  }
                }
              );
            }
          );
        };

        document.head.appendChild(prebidScript);
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
