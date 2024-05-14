export interface IWeather {
  icon: string;
  temperature: {
    current: number;
    lowest: number;
    highest: number;
  };
  current_weather: {
    temperature: number;
    weathercode: number;
  };
  daily: {
    temperature_2m_min: number[];
    temperature_2m_max: number[];
  };
}
