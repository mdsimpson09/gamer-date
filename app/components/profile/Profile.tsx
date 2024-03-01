//app/components/profile/profile.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { SlGameController } from 'react-icons/sl';
import { FaXTwitter } from "react-icons/fa6";
import { FaTwitch } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitch } from "react-icons/bs"
import { useRouter } from 'next/navigation';

import Link from 'next/link';
import { Button } from '@radix-ui/themes';

interface ProfileProps {
  player: {
    first_name?: string | null;
    username?: string | null;
    bio?: string | null;
    looking_for?: string | null;
    favorite_games?: string | null;
    favorite_device?: string | null;
    image?: string | null;
    player_id?: number;
    instagram?: string | null;
    twitter?: string | null;
    discord?: string | null;
    twitch?: string | null;
    facebook?: string | null;
  };
}

const Profile: React.FC<ProfileProps> = ({ player }) => {
  const [profileData, setProfileData] =
    useState<ProfileProps["player"]>(player);
    const router = useRouter();

    const navigateToLink = (url: string | null) => {
      if (url) {
        window.open(url, '_blank');
      } else {
        
        console.log("This service is not linked.");
      }
    };

  useEffect(() => {
    const apiUrl = "/api/profile/";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.player) {
          setProfileData(data.player);
        }
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []);

  if (!profileData) {
    return (
      <div className="flex justify-center items-center h-screen">
      <SlGameController className="text-indigo-400 text-9xl animate-spin-slow" />
    </div>
    );
  }

  return (
/////use this layout
    <div className='flex justify-center items-center bg-indigo-200 p-7 rounded-xl min-w-7 w-[475px] h-[650px]'>
        <div className='text-black p-4 bg-white
         rounded-lg shadow-lg items-center justify-center h-[600px] sm:p-8 w-full overflow-y-auto hide-scrollbar'>
        <img
          src={profileData.image || "/profile-image.jpg"}
          alt="Profile"
          className="w-full h-80 object-cover rounded-md mb-4"
        />
        <h1 className="text-2xl font-semibold mb-2 capitalize">
          {profileData.first_name || ""}
        </h1>
        <p className="text-gray-500 mb-4">{profileData.username || ""}</p>
        <p className="text-gray-700 font-bold capitalize"> About Me: </p>
        <p> {profileData.bio || ""}</p>
        <br></br>
        <p className="text-gray-700 font-bold capitalize"> I&apos;m looking for:</p>
        <p className="text-gray-700">{profileData.looking_for || ""}</p>
        <br></br>
        <p className="text-gray-700 font-bold capitalize"> My Favorite Games: </p>
        <p> {profileData.favorite_games || ""}</p>
        <br></br>
        <p className="text-gray-700 font-bold capitalize"> How I Play: </p>
        <p> {profileData.favorite_device || ""}</p>
        <br></br>
    
       <h1 className="text-xl font-bold mb-4">Where players can connect with you!</h1>
        <ul className="flex list-none p-0 justify-between">
          <li className="mr-4" onClick={() => navigateToLink(player.twitch)}>
            <div className="flex items-center justify-center bg-purple-700 rounded-lg cursor-pointer" style={{ width: '40px', height: '40px' }}>
              <FaTwitch className='text-white text-2xl'/>
            </div>
          </li>
          <li className="mr-4" onClick={() => navigateToLink(player.discord)}>
            <div className="flex items-center justify-center bg-indigo-400 rounded-lg cursor-pointer" style={{ width: '40px', height: '40px' }}>
              <FaDiscord className="text-white text-2xl" />
            </div>
          </li>
          <li className="mr-4" onClick={() => navigateToLink(player.instagram)}>
            <div className="flex items-center justify-center bg-pink-600 rounded-lg cursor-pointer" style={{ width: '40px', height: '40px' }}>
              <FaInstagram className="text-white text-2xl" />
            </div>
          </li>
          <li className="mr-4" onClick={() => navigateToLink(player.twitter)}>
            <div className="flex items-center justify-center bg-blue-500 rounded-lg cursor-pointer" style={{ width: '40px', height: '40px' }}>
              <FaXTwitter className="text-white text-2xl" />
            </div>
          </li>
          <li onClick={() => navigateToLink(player.facebook)}>
            <div className="flex items-center justify-center bg-blue-600 rounded-full cursor-pointer" style={{ width: '40px', height: '40px' }}>
              <FaFacebook className="text-white text-2xl" />
            </div>
          </li>
        </ul>
    
      </div>
    </div>
  );
};

export default Profile;