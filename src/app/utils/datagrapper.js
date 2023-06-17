const API_URL = process.env.NEXT_API_URL || "http://localhost:3000";

export default async function datafetching() {
  const resp = await fetch(`${API_URL}/api/questions`, {
    next: { cache: "no-store" },
  });
  return resp.json();
}
