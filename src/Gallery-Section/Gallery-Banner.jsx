import React from "react";
function GalleryBanner() {
  return (
    <>
      <div className="gallery-banner-img">
        <div className="gallery-banner">
          <div className="gallery-content">
            <h3>Our Gallery</h3>
            <span className="div-photo"></span>
            <p>
              <span>
                <a href="/">Home</a>
              </span>
              /<span>Our Gallery</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export { GalleryBanner };
