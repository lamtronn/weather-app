/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_APP_API_URL: "https://api.openweathermap.org/",
    REACT_APP_API_KEY: "c7f28e06d209b23c3ba46739cc666074",
    REACT_APP_ICON_URL: "https://openweathermap.org/img/w",
  },
  images: {
    domains: ["openweathermap.org"],
  },
};

module.exports = nextConfig;
