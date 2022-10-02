const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");
const searchResult = document.querySelector(".search-result");

(async function init() {
  const response = await fetch(
    "https://api.github.com/users/GabrielCunhaMariano"
  ).then((response) => response.json());
  console.log(response);

  const pageTitle = document.querySelector(".page-title");
  pageTitle.textContent = response.name;

  const userTwitter = document.querySelector(".twitter");
  userTwitter.textContent = response.twitter_username || "Twitter não exibido";

  const Twitter = document.querySelector(".twitter-additional-information");
  Twitter.textContent = response.twitter_username || "Twitter não exibido";

  const pageBio = document.querySelector(".bio");
  pageBio.textContent = response.bio || "Não existente";

  const pageCreationDate = document.querySelector(".join-date");
  pageCreationDate.textContent = response.created_at;

  const publicRepos = document.querySelector(".font-size-statistics");
  publicRepos.textContent = response.public_repos;

  const pageFollowers = document.querySelector(".counter-follows");
  pageFollowers.textContent = response.followers;

  const followingPeoples = document.querySelector(".following-users");
  followingPeoples.textContent = response.following;

  const locationPeople = document.querySelector(".location-user");
  locationPeople.textContent = response.location;

  const BlogPeople = document.querySelector(".git-user");
  BlogPeople.textContent = response.html_url;
  BlogPeople.setAttribute("href", response.html_url);

  const BlogPeopleComplemente = document.querySelector(".git-user-complemente");
  BlogPeopleComplemente.setAttribute("href", response.html_url);

  const linkedinUser = document.querySelector(".likedin-user");
  linkedinUser.textContent = response.blog;

  const LinkedinPeopleComplemente = document.querySelector(
    ".linkedin-user-complemente"
  );
  LinkedinPeopleComplemente.setAttribute("href", response.blog);

  const userPhoto = document.querySelector(".user-photo");
  userPhoto.setAttribute("src", response.avatar_url);
  userPhoto.setAttribute("class", "img-wrapper");

  //function addStyle() {
  //const sheet = new CSSStyleSheet();
  //sheet.insertRule(`. {
  // background: pink;
  //text-transform: uppercase;
  // }`);
  // document.adoptedStyleSheets = [sheet];
  //}

  //const img = document.createElement("img");
  //document.body.appendChild(img);
  //img.setAttribute("src", response.avatar_url);
  //img.setAttribute("class", "img-wrapper");

  //const getGithubUserData = async (username) => {
  //const response = await fetch(`https://api.github.com/users/${username}`)
  //.then((response) => response.json())
  //.catch((err) => {
  //throw new Error(err);
  //});
  //return response;
  //};
  //searchBtn.addEventListener("click", async () => {
  //if (!searchInput.value) {
  //searchResult.textContent = "Preencha o campo vazio";
  //searchResult.setAttribute("class", "error");
  //return;
  //}
  //const githubUserData = await getGithubUserData(searchInput.value);
  //searchResult.textContent = githubUserData.bio || "Info não existente";
  //searchResult.setAttribute("class", "error");
  //});
})();
