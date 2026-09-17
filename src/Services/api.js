const URL = "https://api.tvmaze.com";

export const searchShows = async (query) => {
  const response = await fetch(`${URL}/search/shows?q=${query}`);
if (!response.ok) {
    throw new Error("Failed to search shows");
  }
  return response.json();
};

export const getAllShows = async () => {
  const response = await fetch(`${URL}/shows`);
  if (!response.ok) {
    throw new Error("Failed to fetch shows");
  }

  return response.json();
};
