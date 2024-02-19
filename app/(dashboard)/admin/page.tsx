import React from 'react'
import { getServerSession } from 'next-auth';
// import { authOptions } from "../../../lib/auth";
import { authOptions } from "@/lib/auth";
import Player from "../../User";



 async function page(){
  const session = await getServerSession(authOptions);

    if (session?.player) {
      return (<h2 className= 'text 4-xl uppercase'>Welcome to Gamer Date, {session.player.username}</h2>
  )}
    return (
      <h2>Please login to see your profile page </h2>
    )
}
export default page;

