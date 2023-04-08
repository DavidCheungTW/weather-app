function dateOrdinal(d) {
  let ordinal;
  if (d === "31" || d === "21" || d === "01") {
    ordinal = "st";
  } else if (d === "22" || d === "02") {
    ordinal = "nd";
  } else if (d === "23" || d === "03") {
    ordinal = "rd";
  } else {
    ordinal = "th";
  }
  if (d.charAt(0) === "0") {
    return d.charAt(1) + ordinal;
  }
  return d + ordinal;
}

export default dateOrdinal;
