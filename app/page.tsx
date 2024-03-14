// 'use server'
import Link from "next/link";
// import { Button } from './components/ui/button'
import Button from '@mui/material/Button';
import player from "./User";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


export default async function Home() {
 

  return (

<div>

<div className="flex justify-center items-center bg-indigo-200 p-5 sm:p-10 rounded-xl w-full mt-6">
  <div className="bg-white shadow-md rounded-md overflow-y-auto w-full max-w-none lg:max-w-6xl mx-auto p-6">
    <div className="flex lg:flex-row items-center ">
      <img className="h-44 w-44 md:h-32 md:w-32 lg:h-40 lg:w-40 object-cover rounded-full" src="/logo.png" alt="logo" />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 lg:mt-0">Gamer-Date</h1>
        </div>
      <br></br>
      <br></br>

      <section className="mt-8">
      <br></br>
      <p className="text-2xl md:text-lg lg:text-xl text-center mb-2">Where gamers meet other gamers.</p>
      <p className="text-xl md:text-lg lg:text-xl text-center mb-8">Find your friends, build your squad!</p>
            <div className="bg-indigo-50 p-4 sm:p-6 rounded-lg shadow-lg text-center">
        
          <p>
            Welcome to Gamer Date, where gamers can connect, play, and build
            meaningful relationships.
          </p>
        <br></br>
          <p>
            Say goodbye to the days where your team is filled with children. 
          </p>
          </div>
        </section>
        <br></br>
       <section>
       <div className="bg-indigo-50 p-4 sm:p-6 rounded-lg shadow-lg text-center">
        
       <p>Check out your profile by clicking the button below</p>
       <p>Be sure to add more to your profile before trying to find other players</p>
       <br></br>
       

       
        </div>
       </section>
       <br></br>
       <Button variant="contained" className='w-full bg-indigo-700 text-white hover:bg-indigo-900 '>
        <Link href="/profile" className="">Check out your profile!</Link>
       </Button>
        </div>
        </div>
        </div>

  )
}