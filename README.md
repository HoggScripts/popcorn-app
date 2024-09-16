# 🎬 Popcorn Movie App

Popcorn is a movie exploration and tracking web app where users can search for movies, view details, and keep track of the movies they've watched. Built using React, it integrates the OMDb API for movie data and allows users to rate and store their watched movies locally.

## 🛠️ Features

- **Search Movies**: Search for movies using the OMDb API by typing in the search bar.
- **Movie Details**: View detailed information about movies, including runtime, actors, plot, director, and IMDb rating.
- **Watched List**: Add movies to your watched list, rate them, and view a summary of all the movies you've seen.
- **Local Storage**: Movies added to the watched list are stored locally on your device, so your data persists across sessions.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## 🚀 Live Demo

Check out the live version deployed on Vercel:  
🔗 [Popcorn Movie App](https://popcorn-app-dusky.vercel.app/)

## 🛠️ Technologies Used

- **React**: For building the UI and managing state.
- **OMDb API**: To fetch movie data.
- **useState & useEffect**: For managing state and side effects.
- **Custom Hooks**: `useKey` and `useLocalStorageState` are used for handling key events and persisting data.
- **Vercel**: For hosting and deploying the project.
