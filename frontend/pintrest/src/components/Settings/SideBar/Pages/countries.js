import countryList from "react-select-country-list";

const countries = countryList().getData();

const findCountryByShortCode = shortcode =>
  countries.find(country => country.value === shortcode);

export { countries, findCountryByShortCode };
