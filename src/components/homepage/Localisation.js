"use client";

import fetchWeather from "@/lib/fetchWeather";
import categorizeWeatherCode from "@/lib/weatherMapping";
import { useEffect, useState } from "react";
import ImgFetcher from "@/lib/imgFetcher";
import Image from "next/image";

export default function Home() {
  const [weatherStatus, setWeatherStatus] = useState(null);
  const [isDay, setIsDay] = useState(null);
  const [temp, setTemp] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeather();
        const code = data.hourly.weather_code[0];
        const status = categorizeWeatherCode(code);
        setWeatherStatus(status);

        const daylight = data.hourly.is_Day[0];
        setIsDay(daylight === 1);

        const temperature = parseFloat(
          data.hourly.temperature_2m[0].toFixed(2)
        );
        setTemp(temperature);

        const img = await ImgFetcher(status, daylight === 1);
        setImgSrc(img);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="lg:w-[350px] min-w-[300px] mb-10">
      <div className="flex flex-col items-center w-full rounded-2xl border border-white/10 bg-black/50 shadow-lg">
        {/* Weather illustration */}
        <div className="p-4 flex items-center justify-center">
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt="weather_image"
              width={200}
              height={200}
              className="rounded-md"
            />
          ) : (
            <p className="text-sm opacity-70">Loading...</p>
          )}
        </div>

        {/* Weather data */}
        <div className="p-4 text-center space-y-1">
          <p className="text-lg md:text-xl font-medium">City: Paris</p>
          <p className="text-lg md:text-xl opacity-90 whitespace-nowrap">
            Weather status:{" "}
            {isDay === null
              ? "Loading..."
              : isDay
              ? "Daytime, "
              : "Nighttime, "}
            {weatherStatus || "Loading..."}
          </p>
          <p className="text-lg md:text-xl opacity-90 whitespace-nowrap">
            Temperature: {temp !== null ? `${temp}°C` : "Loading..."}
          </p>
        </div>
      </div>
    </section>
  );
}
