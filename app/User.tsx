'use client';
import { useSession } from 'next-auth/react'
import React from 'react'

function player() {
    const {data: session} = useSession();
    return <pre>{JSON.stringify(session)}</pre>;
  
};

export default player
