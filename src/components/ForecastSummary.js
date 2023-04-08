import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import dateOrdinal from "../utilities/dateOrdinal";
import "../styles/forecast-summary.css";

function ForecastSummary(props) {
  const { date, temperature, description, icon, onSelect } = props;
  const tempDate1 = new Date(date).toDateString();
  const tempDate2 = tempDate1.split(" ");
  const formattedDate = `${tempDate2[0]} ${dateOrdinal(tempDate2[2])} ${
    tempDate2[1]
  }`;

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon.toString()} />
      </div>
      <div className="forecast-summary__description">{description}</div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>

      <button
        type="button"
        onClick={() => {
          onSelect(date);
        }}
      >
        More details
      </button>
    </div>
  );
}

export default ForecastSummary;

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};
