import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../../components/footer.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const VisitUs = () => {
  const mainCampusCoords = [25.1341886, 67.0252268];
  const cityOfficeCoords = [24.8602069, 67.0535218];
  const mainCampusCoordsURL = `https://www.google.com/maps?q=${25.1341886},${67.0252268}&z=15`;
  const cityOfficeCoordsURL = `https://www.google.com/maps?q=${24.8602069},${67.0535218}&z=15`;

  return (
    <>
      <div className="pt-5 visit-us-main" style={{ fontFamily: "Nunito Sans" }}>
        <div className="container">
          <div className="row">
            <div className="offset-lg-1 col-lg-9 pt-5 pt-md-0">
              <h1
                className="banner__title title color-white title--xl2 ml-0"
                style={{ color: "#223c59", paddingTop: "30px" }}
              >
                Visit Us
              </h1>
              <h2 className="title title--lg py-3 pt-md-0">
                Experience Global Hub School Karachi firsthand! We welcome you to visit our campus, explore our
                state-of-the-art facilities, and meet our dedicated team. Schedule a visit to see how we are shaping the
                future, one student at a time.
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="offset-lg-1 col-lg-10">
              <div className="row">
                <div className="col-md-5">
                  <h3 className="title title--md">Global Hub School</h3>
                  <hr />
                  <p>
                    <strong>Please get in touch to schedule a visit to GHS Karachi:</strong>
                  </p>
                  <a href="tel:+92 324 4717777">
                    <p>+92 324 4717777</p>
                  </a>
                  <a href="mailto:info@ghskarachi.com">
                    <p>info@ghskarachi.com</p>
                  </a>
                  <p>Hub Dam Road (5 KM from Hamdard University), Karachi, Sindh, Pakistan</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="map-visit-us">
          <a href={mainCampusCoordsURL} target="_blank" rel="noopener noreferrer">
            <MapContainer
              center={mainCampusCoords}
              zoom={18}
              style={{ height: "450px", width: "100%", borderRadius: "10px" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={mainCampusCoords}>
                <Popup>
                  Global Hub School Karachi
                  <br />
                  Hub Dam Road, Karachi.
                </Popup>
              </Marker>
            </MapContainer>
            </a>
          </div>
        </div>
        <div className="container pt-5">
          <div className="row">
            <div className="offset-lg-1 col-lg-10">
              <div className="row">
                <div className="col-md-5">
                  <h3 className="title title--md">Global Hub School Karachi-Karachi City Office</h3>
                  <hr />
                  <p>
                    <strong>For more information, you can also visit our Karachi city office:</strong>
                  </p>
                  <p>
                    113-A، Main Shahrah-e-Faisal Rd, Sindhi Muslim Cooperative Housing Society Karachi, 74400,
                    Pakistan.
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="map-visit-us">
          <a href={cityOfficeCoordsURL} target="_blank" rel="noopener noreferrer">
            <MapContainer
              center={cityOfficeCoords}
              zoom={18}
              style={{ height: "450px", width: "100%", borderRadius: "10px" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={cityOfficeCoords}>
                <Popup>
                  Global Hub School Karachi - City Office
                  <br />
                  Shahrah-e-Faisal Rd, Karachi.
                </Popup>
              </Marker>
            </MapContainer>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisitUs;
