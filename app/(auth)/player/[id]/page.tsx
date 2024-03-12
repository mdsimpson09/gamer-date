'use client'
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from "@/lib/auth";
import Link from 'next/link';
import { FaXTwitter } from "react-icons/fa6";
import { FaTwitch } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlGameController } from 'react-icons/sl';
import { BsTwitch } from "react-icons/bs"
import { useRouter } from 'next/navigation';
import { toast, useToast } from '@/components/ui/use-toast';


interface UserProfileProps {
  player_id: string;
  first_name: string | null;
  username: string | null;
  bio: string | null;
  favorite_games: string | null;
  favorite_device: string | null;
  looking_for: string | null;
  image: string | null;
  instagram: string | null;
  facebook: string | null;
  twitter: string | null;
  twitch: string | null;
  discord: string | null;
}

const UserProfilePage: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfileProps | null>(null);
  const pathname = usePathname();
  const { toast } = useToast();

  const router = useRouter();

  const navigateToLink = (url: string | null) => {
    if (url) {
      window.open(url, '_blank');
    } else {
     
      console.log("This service is not linked.");
      toast({
        title: 'Uh oh!',
        description: 'This Player has not linked this social media account yet.',
        variant: 'destructive',
        className: 'bg-indigo-400 text-white text-lg',
      });
    }
  }; [toast];


  useEffect(() => {
   
    const player_id = pathname.split('/')[2]; 

    if (player_id) {
      fetch(`/api/player-profile/${player_id}`)
        .then(response => response.json())
        .then(data => setUserProfile(data))
        .catch(error => console.error("Error fetching user data:", error));
    }
  }, [pathname]);

  if (!userProfile) {
    return  <div className="flex justify-center items-center h-screen">
    <SlGameController className="text-indigo-400 text-9xl animate-spin-slow" />
  </div>;
  }

  return (
    <div className=' container flex justify-center items-center bg-indigo-300 p-5 md:p-10 rounded-xl w-full max-w-xs md:max-w-lg h-auto mb-0 max-h-[600px] md:max-h-[700px] lg:max-w-[500px] min-w-7'>
<div className='max-w-3xl py-4 px-4 md:py-6 md:px-6 bg-white shadow-md rounded-md my-8 w-full h-auto overflow-y-auto hide-scrollbar max-h-[500px] md:max-h-[550px] lg:max-w-[400px]'> 
{/* <div className='flex justify-center items-center bg-indigo-300 p-10 rounded-xl min-w-7 w-[475px] h-[700px]'>
      <div className='max-w-3xl py-6 px-6 bg-white shadow-md rounded-md my-8 w-[500px] h-[600px] overflow-y-auto hide-scrollbar'> */}
      
        <div className="flex justify-center items-center ">
          <img
            src={userProfile.image || "/profile-image.jpg"}
            alt="Profile"
            className="w-full h-64 object-cover rounded-md mb-4" // Adjusted classes for image to match second page
          />
        </div>
        <h1 className="text-2xl font-semibold mb-2 capitalize">
          {userProfile.first_name || ""}
        </h1>
        <p className="text-gray-500 mb-4">{userProfile.username || ""}</p>
        <p className="text-gray-700 font-bold capitalize"> about me: </p>
        <p> {userProfile.bio || ""}</p>
        <br />
        <p className="text-gray-700 font-bold capitalize"> I&apos;m looking for:</p>
        <p className="text-gray-700">{userProfile.looking_for || ""}</p>
        <br />

        <p className="text-gray-700 font-bold capitalize"> Favorite Games: </p>
        <p> {userProfile.favorite_games || ""}</p>
        <br />
        <p className="text-gray-700 font-bold capitalize"> How I Play: </p>
        <p> {userProfile.favorite_device || ""}</p>
        <br />
        
        <br></br>
        <h1 className="text-xl font-bold mb-4 capitalize">Connect with {userProfile.username}</h1>
        <ul className="flex list-none p-0 justify-between">
          <li className="mr-4" onClick={() => navigateToLink(userProfile.twitch)}>
            <div className="flex items-center justify-center bg-purple-700 rounded-lg cursor-pointer" style={{ width: '40px', height: '40px' }}>
              <FaTwitch className='text-white text-2xl'/>
            </div>
          </li>
          <li className="mr-4" onClick={() => navigateToLink(userProfile.discord)}>
            <div className="flex items-center justify-center bg-indigo-400 rounded-lg cursor-pointer" style={{ width: '40px', height: '40px' }}>
              <FaDiscord className="text-white text-2xl" />
            </div>
          </li>
          <li className="mr-4" onClick={() => navigateToLink(userProfile.instagram)}>
            <div className="flex items-center justify-center bg-pink-600 rounded-lg cursor-pointer" style={{ width: '40px', height: '40px' }}>
              <FaInstagram className="text-white text-2xl" />
            </div>
          </li>
          <li className="mr-4" onClick={() => navigateToLink(userProfile.twitter)}>
            <div className="flex items-center justify-center bg-blue-500 rounded-lg cursor-pointer" style={{ width: '40px', height: '40px' }}>
              <FaXTwitter className="text-white text-2xl" />
            </div>
          </li>
          <li onClick={() => navigateToLink(userProfile.facebook)}>
            <div className="flex items-center justify-center bg-blue-600 rounded-full cursor-pointer" style={{ width: '40px', height: '40px' }}>
              <FaFacebook className="text-white text-2xl" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

  
};

export default UserProfilePage;

