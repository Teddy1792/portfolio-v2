"use client";

import fetchWeather from "@/lib/fetchWeather";
import categorizeWeatherCode from "@/lib/weatherMapping";
import { useEffect, useState } from "react";
import ImgFetcher from "@/lib/imgFetcher";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
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
        const weatherStatus = categorizeWeatherCode(code);
        setWeatherStatus(weatherStatus);

        const daylight = data.hourly.is_Day[0];
        const isItDay = daylight === 1 ? true : false;
        setIsDay(isItDay);

        const temperature = parseFloat(
          data.hourly.temperature_2m[0].toFixed(2)
        );
        setTemp(temperature);

        const imgSrc = await ImgFetcher(weatherStatus, isItDay);
        setImgSrc(imgSrc);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="lg:w-[300px] min-w-[300px]">
      <CardContainer containerClassName="">
        <CardBody className="bg-black shadow-lg">
          <CardItem className="p-4" translateZ={50}>
            {imgSrc ? (
              <Image
                src={imgSrc}
                alt="weather_image"
                width={250}
                height={250}
              />
            ) : (
              "Loading..."
            )}
          </CardItem>
          <CardItem className="p-4 pt-0 h-36" translateZ={20}>
            <h1 className="text-3xl lg:text-3xl">Location</h1>
            <p>City: Paris</p>
            <p className="whitespace-nowrap">
              Weather status:
              {isDay === null
                ? "Loading..."
                : isDay
                ? " Day time, "
                : " Night time, "}
              {weatherStatus ? weatherStatus : "Loading..."}{" "}
            </p>
            <p className="whitespace-nowrap">Temperature status: {temp}°C</p>
          </CardItem>
        </CardBody>
      </CardContainer>
    </section>
  );
}
