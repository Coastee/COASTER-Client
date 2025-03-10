import { jsonKy } from "@/ky/ky";

// [GET] Find All Servers
export const fetchAllServers = async () => {
  try {
    const response = await jsonKy("api/v1/servers").json();
    console.log("fetchAllServers: ", response);
    return response;
  } catch (error) {
    console.error("Error fetching all servers:", error);
  }
};

// [GET] Server Home
export const fetchServerHome = async (serverId: number) => {
  try {
    const response = await jsonKy(`api/v1/servers/${serverId}`).json();
    console.log("fetchServerHome: ", response);
    return response;
  } catch (error) {
    console.error(`Error fetching home for server ${serverId}:`, error);
  }
};
