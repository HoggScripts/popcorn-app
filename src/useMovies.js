import { useState, useEffect } from "react";

const KEY = "3bbb92b2";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      // callback?.();

      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const requestUrl = `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`;

          // Log the request details
          console.log("Request URL:", requestUrl);

          const res = await fetch(requestUrl, { signal: controller.signal });

          // Log the response status and headers
          console.log("Response Status:", res.status);
          console.log("Response Headers:", res.headers);

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();

          // Log the response body (actual data)
          console.log("Response Data:", data);

          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log("Error Message:", err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
