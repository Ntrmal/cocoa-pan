import "./LocationInfo.css";

function LocationInfo() {
  return (
    <section className="location-info">
      <h3 className="location-heading">
        Delighting you from the convenient locations below.
      </h3>

      <ul className="location-list">
        <li>
          <a
            href="https://www.google.com/maps/search/?api=1&query=S+S+Nagar+B+Layout+Bannimantap+Mysuru"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍Mysuru, Karnataka
          </a>
        </li>

        <li>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Poppins+Kids+Track+Q5V7+6G3+Opposite+Old+Jose+Theatre+Pulpally+Kerala"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍Pulpally, Kerala (opp. Old Jose Theatre)
          </a>
        </li>
      </ul>

      
    </section>
  );
}

export default LocationInfo;
