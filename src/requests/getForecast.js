import axios from "axios";

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";
  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  return axios
    .get(endpoint)
    .then((response) => {
      setErrorMessage("");
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((error) => {
      setForecasts([]);
      if (error.response === undefined) {
        setErrorMessage("Undefined error, try again!");
        return;
      }
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("No such town or city, try again!");
      }
      if (status === 500) {
        setErrorMessage("Oops, server error, try again later!");
      }
    });
};

export default getForecast;
