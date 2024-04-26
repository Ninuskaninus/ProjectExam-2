import login from "../login/post.js";

export default async function register(registerObject) {
  const url = "https://v2.api.noroff.dev/auth/register";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: registerObject.name,
        email: registerObject.email,
        password: registerObject.password,
        venueManager: registerObject.venueManager || false,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      await login({
        email: registerObject.email,
        password: registerObject.password,
      });
      return data;
    } else {
      throw new Error(`Registration failed: ${data.errors.message}`);
    }
  } catch (error) {
    throw new Error(`Registration failed: ${error.message}`);
  }
}
