const listRepos = async (username) => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  const markup = repos
    .map(
      (repo) => `
    <li>
      <a href="${repo.html_url}">${repo.name}</a>
      (⭐ ${repo.stargazers_count})
    </li>
    `
    )
    // IMAS NIZ LIST ITEM STRINGOVA, A TI IH SPOJI U SINGLE STRING
    .join(""); // separator je prazan string (SECAJ SE KAKO join FUNKCIONISE)

  // KREIRAO SAM OVAJ ELEMENT U HTML-U KAO I STO SI VIDEO
  const container = document.getElementById("content");

  container.innerHTML = `<ul>${markup}</ul>`;
};

// ZELIM DA RENDER-UJEM LISTU REPO-A JEM-A YOUNG-A
listRepos("young");
