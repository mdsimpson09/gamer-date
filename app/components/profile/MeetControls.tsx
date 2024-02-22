//profile/meetcontrols
import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

import HeartIcon from '@mui/icons-material/FavoriteOutlined';
import HateIcon from '@mui/icons-material/CloseOutlined';
import ExitIcon from '@mui/icons-material/ExitToAppOutlined';
import RedoIcon from '@mui/icons-material/ReplayOutlined';
import { Icon, IconButton } from '@mui/material';
import TinderCard from'react-tinder-card'
import DislikeButton from './dislike-button';
import LikeButton from './like-button';
import Link from 'next/link';


interface MeetProps {
  player: {
    player_id: number | null;
    first_name: string | null;
    username: string | null;
    bio: string | null;
    looking_for: string | null;
    image: string | null;
    instagram?: string | null;
    twitter?: string | null;
    discord?: string | null;
    twitch?: string | null;
    facebook?: string | null;
  } | null;

  toggleRefresh: () => void;
}
const MeetControls: React.FC<MeetProps> = ({ player, toggleRefresh }) => {
  if (!player) {
    return null;
  }

  return (
    // <div className="container p-2 flex items-center justify-between space-x-4">
    <div className="flex p-2 items-center justify-between space-x-2 md:space-x-4 w-full max-w-xs md:max-w-lg lg:max-w-xl mx-auto">

      <div
        onClick={toggleRefresh}
        className="font-bold text-3xl rounded-full bg-red-500 w-16 h-16 md:w-28 md:h-28 hover:bg-red-600 focus:outline-none focus:ring-opacity-50 shadow-lg flex items-center justify-center"
      >
        <DislikeButton playerIdToDislike={player?.player_id} />
      </div>

      <div className="font-bold text-2xl rounded-full bg-blue-400 md:w-28 md:h-28 text-white hover:bg-blue-500 focus:outline-none focus:ring-opacity-50 shadow-lg flex items-center justify-center">
        <Link href="/">
          <IconButton>
            <ExitIcon className="text-gray-50" />
          </IconButton>
        </Link>
      </div>

      <div
        onClick={toggleRefresh}
        className="font-bold text-3xl rounded-full bg-green-500 w-16 h-16 md:w-28 md:h-28 hover:bg-green-600 focus:outline-none focus:ring-opacity-50 shadow-lg flex items-center justify-center"
      >
        <LikeButton playerIdTolike={player?.player_id} />
      </div>
    </div>
  );
}




export default MeetControls;