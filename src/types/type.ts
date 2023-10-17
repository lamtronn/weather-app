export type LocationType = {
  lat: number;
  lon: number;
  // name?: string;
};

export type MainType = {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

export type SystemType = {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
};

export type WeatherType = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

export type WindType = {
  deg: number;
  gust: number;
  speed: number;
};

export type CloudType = {
  all: number;
  gust: number;
  speed: number;
};

export type WeatherDataType = {
  base: string;
  cloud: CloudType;
  cod: number;
  coor: LocationType;
  dt: number;
  id: number;
  main: MainType;
  name: string;
  sys: SystemType;
  timezone: number;
  visibility: number;
  weather: WeatherType[];
  wind: WindType;
};
