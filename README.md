## Homepage

![Homepage Screenshot](/public/1.png)

# Job Board - Next.js

![Next.js](https://img.shields.io/badge/Next.js-Framework-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-blue)
![Vercel](https://img.shields.io/badge/Vercel-Deployment-blue)

## Overview

This is a job board application built using **Next.js**, **PostgreSQL**, **Prisma**, and **Vercel Blob**. The application allows users to post and browse job listings with a modern and intuitive interface.

## Features

- **Job Listings:** Users can browse available job listings.
- **Post a Job:** Companies can post new job openings.
- **Job Details:** Detailed view of each job listing.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Technologies Used

- **Next.js:** React framework for server-side rendering and static site generation.
- **PostgreSQL:** Relational database for storing job listings and user data.
- **Prisma:** ORM for database interaction.
- **Vercel Blob:** File storage for handling file uploads.

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Install dependencies
yarn install
# or
npm install

# Set up the database:
# Create a .env file in the root of the project and add your PostgreSQL connection string
DATABASE_URL="postgresql://user:password@localhost:5432/jobboard"
# Run Prisma migrations
npx prisma migrate dev --name init
#Start the development server:
yarn dev
# or
npm run dev
```

## Contributing

Contributions to ConnectVerse App are welcome! Feel free to submit pull requests with new features, enhancements, or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
