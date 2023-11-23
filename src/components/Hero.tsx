"use client";

import { ReactNode, useEffect, useState } from "react";

import { TUser } from "@/types/types";

import SingleUserCard from "./SingleUserCard";

const Hero = () => {
  const [astroUsers, setAstroUsers] = useState<TUser[]>([]);

  useEffect(() => {
    fetch("/api/get", {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.users);
        setAstroUsers(data.users);
      });
  }, []);

  return (
    <section className="min-h-screen pt-28 min-[600px]:pt-36 lg:pt-28 pb-10">
      <div className="w-[90%] md:w-[80%] lg:w-[95%] xl:w-[90%] mx-auto">
        <h1 className="pb-4 md:pt-4 lg:pt-0 uppercase font-bold text-xl lg:text-2xl text-center">
          Welcome to outer space where you can find other astronauts!
        </h1>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:justify-items-center md:py-4 max-w-[1280px]">
          {astroUsers.length == 0 && (
            <p className="pt-4 font-medium text-lg text-center">
              There are no users. Click the icon in the menu to add a new user
            </p>
          )}
          {astroUsers.length > 0 &&
            astroUsers.map((user: TUser): ReactNode => {
              return (
                <SingleUserCard
                  key={user._id.toString()}
                  userId={user._id}
                  user={user}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
