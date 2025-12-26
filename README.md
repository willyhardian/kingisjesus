# Discover Jesus - Christian Media Website

A Next.js 15 application built with TypeScript and TailwindCSS for sharing Christian content, testimonials, and daily devotions.

## Features

- SEO-optimized pages with Next.js App Router
- Responsive design with TailwindCSS
- Daily devotions with scripture references
- User testimonials
- MongoDB integration (configured but using static data for MVP)

## Pages

- **Home**: Introduction to Christianity with featured testimonials and devotions
- **Devotions**: Daily devotional content with scripture references
- **Testimonials**: Real-life stories of faith and transformation
- **About**: Information about the website's mission and values

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- TailwindCSS v4
- MongoDB (configured for future use)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/kingisjesus.git
   cd kingisjesus
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your MongoDB credentials (not required for MVP with static data)

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `src/app/`: Next.js App Router pages and layouts
- `src/components/`: Reusable UI components
- `src/data/`: Static data for testimonials and devotions
- `src/lib/`: Utility functions and MongoDB configuration
- `src/types/`: TypeScript interfaces

## Future Enhancements

- User authentication
- Content management system
- Prayer request submission
- Community discussion forum
- Email newsletter subscription

## License

This project is licensed under the MIT License - see the LICENSE file for details.
