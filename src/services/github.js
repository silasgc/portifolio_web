export async function getRepos() {
  const response = await fetch(
    "https://api.github.com/users/SEU_USUARIO/repos"
  );

  const data = await response.json();

  return data
    .filter(repo => !repo.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);
}