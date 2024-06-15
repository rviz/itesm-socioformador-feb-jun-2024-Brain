async function getUser() {
  // GET DEL USUARIO
  const responseUser = await fetch("/api/user");
  const dataUser = await responseUser.json();
  return dataUser;
}

export default getUser;
