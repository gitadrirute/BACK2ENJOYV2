import React from 'react';

const MapaHotel = () => {
  return (
    <div className="mapContainer">
      <section className="mx-auto my-5" style={{ maxWidth: '23rem' }}>
        <div id="map-container-google-1" className="z-depth-1-half map-container" style={{ height: '500px' }}>
        <iframe src="https://www.google.com/maps/d/embed?mid=13-SX-LbkETxcyIqzzlQ5N3t2SIq4VJA&ehbc=2E312F" width="640" height="780"></iframe>        
        </div>
      </section>
    </div>
  );
};

export default MapaHotel;