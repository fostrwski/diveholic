import Box from "@mui/joy/Box";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import TextSeparator from "common/components/TextSeparator";
import type { Dive } from "common/types";
import React from "react";

interface WeatherProps {
  dive: Dive;
}

const calculateProgressValue = (
  temperature: number,
  minValue: number,
  maxValue: number
) => {
  if (temperature === 0) return 0 + Math.abs(minValue);

  if (temperature > 0)
    return (
      ((Math.abs(minValue) + temperature) / (Math.abs(minValue) + maxValue)) *
      100
    );

  if (temperature < 0) return 0 + Math.abs(minValue) + temperature;
};

const Weather: React.FC<WeatherProps> = ({ dive }) => {
  const {
    water: { surface, bottom },
    air
  } = dive.temperature;

  const temperatures = [
    {
      title: "Air",
      value: air,
      minValue: -30,
      maxValue: 50,
      color: "neutral"
    },
    {
      title: "Water surface",
      value: surface,
      minValue: -30,
      maxValue: 40,
      color: "primary"
    },
    {
      title: "Water bottom",
      value: bottom,
      minValue: -30,
      maxValue: 40,
      color: "warning"
    }
  ];

  return (
    <>
      <TextSeparator>Weather</TextSeparator>

      <Box sx={{ display: "flex", gap: 2, flexDirection: "column", mt: 4 }}>
        {temperatures.map((temperature) => (
          <Box key={temperature.title}>
            <Typography level="subtitle1" mb={1.4}>
              {temperature.title} temperature
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <LinearProgress
                determinate
                value={calculateProgressValue(
                  temperature.value,
                  temperature.minValue,
                  temperature.maxValue
                )}
                // @ts-ignore
                color={temperature.color}
                sx={{
                  "--LinearProgress-thickness": "18px"
                }}
              />

              <Typography>
                {temperature.value}
                {dive.units === "metric" ? "°C" : "°F"}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Weather;
