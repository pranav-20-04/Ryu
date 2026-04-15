# 🎬 Ryu - Anime  Streaming Platform

> Experience uninterrupted, ad-free streaming with seamless progress tracking thanks to AniList integration, powered by the Consumet API. Built using Next.js 14, NextUI, MongoDB, and Redis for a smooth and enjoyable user experience.

---

## ✨ Features

- 🔍 **Search**: Get a list of all animes and mangas you want using advanced filters.
- 🎥 **Watch**: Stream any available episode, whether dubbed or subbed.
- 💬 **Comment**: Share your thoughts on episodes or provide helpful information for others.
- 🔐 **Log In**: Sign in with your AniList account *(note: some restrictions may apply)*.
- 🔗 **AniList Integration**: Seamlessly sync your AniList account to carry over settings and anime/manga lists.
- ⏯️ **Keep Watching**: Resume episodes from where you left off with local tracking.
- 📚 **Track Your Favorites**: Organize your animes and mangas into *Completed*, *Dropped*, *Planning*, and more.
- ✅ **Episode Tracking**: Mark episodes you've watched and pick up where you left off.
- ⚡ **Effortless Search**: Quickly search for any anime with ease.
- 🎮 **Modern Video Player**: Enjoy a sleek and up-to-date video player experience with Artplayer.
- 📱 **Fully Responsive**: Access and enjoy your content on all devices.

---

## ⚙️ Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

```env
# Base URL for your application
NEXT_PUBLIC_URL=http://localhost:3000
# Replace with your website URL if deployed, otherwise keep localhost with your port.
# Ensure there is no trailing slash ("/") at the end.

# Consumet API URL
NEXT_PUBLIC_CONSUMET_URL=
# Add the URL for your Consumet API here. This is required for your website to function correctly.

# AniList API Configuration
GRAPHQL_ENDPOINT=https://graphql.anilist.co
ANILIST_CLIENT_ID=
# Obtain your AniList Client ID from: https://anilist.co/settings/developer
ANILIST_CLIENT_SECRET=
# Obtain your AniList Client Secret from: https://anilist.co/settings/developer

# NextAuth Configuration
NEXTAUTH_SECRET=
# Generate a secret for NextAuth using the following command:
# openssl rand -base64 32
# Paste the result here.

NEXTAUTH_URL=http://localhost:3000
# Replace with your website URL if deployed, otherwise keep localhost with your port.
# Ensure there is no trailing slash ("/") at the end.

# MongoDB Connection URI
MONGODB_URI=
# Provide your MongoDB connection string here.

# Node Environment
NODE_ENV=production
# Set the environment for Node.js. Typical values are "development" or "production".

📚 Technologies Used
Front-end

    Next.js 14
    JavaScript
    Axios
    Context API
    react-icons
    GraphQL
    Framer Motion
    React Progress Bar
    AniList API
    Consumet API
    Redis IO
    Disqus
    Artplayer
    NextUI

Back-end

    Mongoose
    Next.js API Route Handler
    MongoDB
    Redis

🚀 Run Locally

    Clone the project

    bash
    https://github.com/pranav-20-04/Ryu.git

    Go to the project directory

    bash
    1 cd ryu

    Install dependencies
    1 npm install


    Start the server

    bash
    1 npm run dev

    Open your browser

    1 http://localhost:3000

📝 Notes

    Make sure you have Node.js and npm installed before running the project.
    Obtain your AniList API credentials from AniList Developer Settings
    .
    Set up a MongoDB instance (local or Atlas) and provide the connection string.
    For production deployment, update NEXT_PUBLIC_URL and NEXTAUTH_URL with your domain.

🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

    Fork the project
    Create your feature branch (git checkout -b feature/AmazingFeature)
    Commit your changes (git commit -m 'Add some AmazingFeature')
    Push to the branch (git push origin feature/AmazingFeature)
    Open a Pull Request

📄 License
Distributed under the MIT License. See LICENSE for more information.

 Acknowledgements

    AniList
     - For the amazing API
    Consumet
     - For streaming sources
    Next.js
     - The React framework
    NextUI
     - Beautiful UI components

    ⚠️ Disclaimer: This project does not host any video files. All content is streamed via third-party APIs. Please support the official release of anime and manga.