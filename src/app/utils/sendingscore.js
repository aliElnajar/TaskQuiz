const API_URL = process.env.NEXT_API_URL || "http://localhost:3000";

// this function get the whole pathname which is string except the score and getting the score out and giving it to the function that calling the api
export const gettingScore = (path) => {
  const score = Number(path.replace(/^\D+/g, ""));
  return score;
};

export async function sendingScores(path) {
  const score = gettingScore(path);
  const resp = await fetch(`${API_URL}/api/ranking`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(score),
  });
  const rank = await resp.json();
  return rank;
}
