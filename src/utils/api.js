export async function getJokes() {
  const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=twopart');
  const data = await response.json();
  return data;
}
