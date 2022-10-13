export const getAllPodcasts = async () => {
  let response = await fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );
  return response.json();
};

export const getUserDetails = async (podcastId) => {
  let response = await fetch(`https://itunes.apple.com/lookup?id=${podcastId}`);
  return response.json();
};
