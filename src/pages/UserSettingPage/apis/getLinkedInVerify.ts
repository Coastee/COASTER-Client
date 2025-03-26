import ky from "ky";

export const getLinkedInVerify = async (code: string) => {
  const accessToken = localStorage.getItem("accessToken");

  try {
    const response = await ky.get(
      `${import.meta.env.VITE_BASE_URL}api/v1/login/linkedin-callback?code=${code}&redirect_uri=${import.meta.env.VITE_LINKEDIN_REDIRECT_URL}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
