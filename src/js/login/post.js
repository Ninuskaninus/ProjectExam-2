export default async function login(loginObject) {
  const url = "https://v2.api.noroff.dev/auth/login";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginObject),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Failed to login. HTTP status: ${response.status}`);
    }
    const data = await response.json();
    if (!data.data.accessToken) {
      throw new Error("Access token not found in response data");
    }
    localStorage.setItem("token", data.data.accessToken);
    localStorage.setItem("user", JSON.stringify(data.data.name));
    window.location.href = "/profile";
  } catch (error) {
    throw new Error(`An error occurred during login: ${error.message}`);
  }
}
