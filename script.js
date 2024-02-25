"use strict";

class Weather {
  constructor(temperature, precipitation, description) {
    this.temperature = temperature;
    this.precipitation = precipitation;
    this.description = description;
  }

  changeTemp(temperature) {
    this.temperature = temperature;
  }

  changePrecip(precipitation) {
    this.precipitation = precipitation;
  }

  changeDesc(description) {
    this.description = description;
  }

  displayWeather() {
    console.log(
      `${this.temperature}°F - ${this.precipitation} - ${this.description}`
    );
  }
}

class DayWeather extends Weather {
  constructor(temperature, precipitation, description, specificCondition) {
    super(temperature, precipitation, description);
    this.specificCondition = specificCondition;
  }
  displayWeather() {
    console.log(
      `${this.temperature}°F - ${this.precipitation} - ${this.description} - *${this.specificCondition}*`
    );
  }
}

const myWeather = new Weather(
  72,
  "No signs of rainfall",
  "Slightly cloudy with low winds"
);
const todaysConditions = new DayWeather(
  58,
  "Expecting slight drizzle before noon",
  "Cloudy with high winds",
  "Small Craft Advisory: Cloudy conditions and High Wind Speeds, BE ADVISED"
);

myWeather.displayWeather();

todaysConditions.displayWeather();
