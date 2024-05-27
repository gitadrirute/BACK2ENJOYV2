import React from 'react';

const MapCardComponent = () => {
  return (
    <div className="mapContainer">
      <section className="mx-auto my-5" style={{ maxWidth: '23rem' }}>
        <div id="map-container-google-1" className="z-depth-1-half map-container" style={{ height: '500px' }}>
          <iframe src="https://www.google.com/maps/d/embed?mid=12vNnKMv0JhWMPwzX4MOkl3RyDcyOdkE&ehbc=2E312F" width="640" height="780"></iframe>
        </div>
      </section>
    </div>
  );
};

export default MapCardComponent;