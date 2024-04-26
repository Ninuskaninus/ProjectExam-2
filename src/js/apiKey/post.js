export default async function getApiKey() {
  const url = "https://v2.api.noroff.dev/auth/create-api-key";
  const token = localStorage.getItem("token");
  const body = {
    name: "API-key",
  };

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json.data.key;
  } catch (error) {
    console.log(error);
  }
}
