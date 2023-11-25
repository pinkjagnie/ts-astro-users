"use client";

import { useEffect, useState } from "react";

import { Params } from "@/types/types";

export default function EditUser({ params }: Params) {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/api/get/${params.hash}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const user = data.user;
        setUser(user);
      });
  }, [params.hash]);

  return (
    <section className="min-h-screen pt-28 min-[600px]:pt-36 lg:pt-28 pb-10 bg-zinc-100 text-slate-900">
      <h1 className="pb-4 md:pt-4 lg:pt-0 uppercase font-bold text-xl lg:text-2xl text-center">
        Wanna change data of this user? Here you have
      </h1>
      {/* <EditUserDataForm user={props.user}/> */}
    </section>
  );
}
