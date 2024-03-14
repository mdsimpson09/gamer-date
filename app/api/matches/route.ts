
//app/api/matches/route.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';
import { authOptions } from '@/lib/auth';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse){
  try {
    const session = await getServerSession(authOptions);
     // console.log('Session:', session);
 
     if (!session?.user) {
         console.log('No session');
       return NextResponse.json(
         { message: 'Authentication required' },
         { status: 401 }
       );
     }
     const playerId = session?.user?.id;
    //  console.log('playerId:', playerId)

     // Fetch matched profiles where the current user is player_id_1
     const matchesAsPlayer1 = await prisma.matchedProfile.findMany({
       where: { player_id_1: Number(playerId) },
       include: { player2: true }
     });
 
     // Fetch matched profiles where the current user is player_id_2
     const matchesAsPlayer2 = await prisma.matchedProfile.findMany({
       where: { player_id_2: Number(playerId) },
       include: { player1: true }
     });
     const combinedMatches = [
      ...matchesAsPlayer1.map(match => match.player2.player_id),
      ...matchesAsPlayer2.map(match => match.player1.player_id),
    ]; 

    // console.log('Matches from DB:', combinedMatches);
    return NextResponse.json({ matches: combinedMatches });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Internal server error', error });
  }
}



// //app/api/matches/route.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { NextRequest, NextResponse } from 'next/server';
// import { getServerSession } from 'next-auth';
// import { getSession } from 'next-auth/react';
// import { PrismaClient } from '@prisma/client';
// import { authOptions } from '@/lib/auth';


// const prisma = new PrismaClient();

// // Define the handler function for all HTTP methods
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   // Only proceed for GET requests, return 405 Method Not Allowed for others
//   if (req.method !== 'GET') {
//     return res.status(405).end();
//   }

//   try {
//     const session = await getSession({ req });
//     if (!session?.user) {
//       return res.status(401).json({ message: 'Authentication required' });
//     }
//     const playerId = session.user.id;

//     const matchesAsPlayer1 = await prisma.matchedProfile.findMany({
//       where: { player_id_1: Number(playerId) },
//       include: { player2: true }
//     });

//     const matchesAsPlayer2 = await prisma.matchedProfile.findMany({
//       where: { player_id_2: Number(playerId) },
//       include: { player1: true }
//     });

//     const combinedMatches = [
//       ...matchesAsPlayer1.map(match => match.player2.player_id),
//       ...matchesAsPlayer2.map(match => match.player1.player_id),
//     ];

//     return res.json({ matches: combinedMatches });
//   } catch (error) {
//     console.error('Error:', error);
//     return res.status(500).json({ message: 'Internal server error', error });
//   }
// }