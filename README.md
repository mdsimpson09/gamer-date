# Gamer-Date App

# www.gamer-date.net

# Tech Stack 
- Frontend and Routing: Next.js with App Router, TypeScript
- Backend/API Management: Next.js API Handlers within the App Router, TypeScript
- ORM for Database Operations: Prisma
- Database: PostgreSQL
- Development Tools: DataGrip for PostgreSQL database managemen

# API Endpoint Documentation
API endpoints, managed through Next.js App Router, are documented as follows:
- Route Path: /api/example
- Handler: Describes the function or component handling the API 
request within the App Router.
- Method: GET | POST
** For comprehensive details on API endpoints, including usage examples, refer to the specific handlers within the app directory.

# Prisma and PostgreSQL Integration
Prisma serves as the connection between this Next.js application and the PostgreSQL database, offering a seamless ORM layer that simplifies database operations. The schema is defined in a Prisma schema file, enabling clear and maintainable database structure definitions, migration management, and query building 

# Key Database Models and Relationships
Player: Central to our application, representing users with fields to capture gaming preferences, social links, and personal information. Relationships include liking, disliking, and matching with other players.

Session: Manages user sessions with unique constraints to support secure authentication and session management.

Account: Facilitates user authentication, storing tokens and provider details.

LikedProfile, DislikedProfile, MatchedProfile: Track user interactions for our matchmaking logic.
Recent Migrations and Schema Updates

- The database schema continued to evolve to support new features and improvements:

Addition of social media and gaming preference fields to the Player model.

Creation of DislikedProfile, LikedProfile, and MatchedProfile tables to manage user interactions.

Implementation of unique indexes and foreign key constraints to ensure data integrity and support complex queries.


# Nextjs 
Nextjs was used to create the application due to its simplicity, flexibility, and the strong support it offers for server-side rendering and static site generation. Its built-in features like route pre-fetching significantly enhance user experience by improving load times. It's funded and maintained by Vercel, which ensures top-notch reliability and ease of deployment, coupled with extensive documentation and a large developer community. These qualities make it an ideal framework for our fast-paced development cycle and for achieving easy production deployments.

# Typescript 
Typescript allows for easy integration with Nextjs, which simplifies setup and encourages type-safe coding practices. TypeScript has static type checking at compile time, which helps catch errors early in the development process, enhancing code quality and maintainability. There is also a powerful plugin for Next.js, further streamlining development.

# Prisma 
Prisma was chosen as as the ORM due to its user-centric design tailored specifically for Node.js and TypeScript environments. Prisma stands out for its commitment to type safety, significantly reducing the risk of runtime errors. Its open, community-focused development process on GitHub provides ongoing reliability and commitment to improvement. 

# Postgresql
Postgresql was used due to its popularity and well-regarded open-source relational databses. It has a large list of features in regards to performance, security, programming extentions and configuration. 

# React Icons 
To ensure a visually consistent and accessible user interface, React Icons were integrated into the application. This library provides a wide array of easily customizable icons, allowing for cohesive design patterns across the app while minimizing additional overhead for managing graphic assets.

# Radix-ui 
Radix UI was our go-to library to use in order to create cohesive sign-up, login, and editing forms. Its unstyled, accessible components gave us the flexibility to implement a cohesive design system tailored to application's aesthetic. The comprehensive documentation and examples facilitated a smooth development process, enabling us to focus on user experience without compromising on accessibility or functionality.


# Testing

Cypress is used for E2E testing due to React docs stating that, since async server components are new to react, some tools are not fully supported, so they recommend end-to-end testing over unit testing. 

tests were run and stored on the cypress cloud. 124 passed and 0 failed tests 

https://cloud.cypress.io/projects/9v8q98/analytics/runs-over-time


# Standard User Flow
1. sign up for an account 
2. Log into account 
3. Add information to user profile, including social media links 
4. Look to meet other gamers in the "Meet" tab
5. Click through profiles using the like or dislike buttons 
6. When you match with another user, their profile will populate on your "Matches" page
7. View their profile after clicking their name on the "Matches" page to see the specific ways to connect with them via their social media. This opens the door to communicate with each other and create new connections. 



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.