import { tokenInstance } from "@/apis/instance";

export const enterServer = async (serverId: number) => {
  return await tokenInstance.post(`api/v1/servers/${serverId}`).json();
};

export const exitServer = async (serverId: number) => {
  return await tokenInstance.delete(`api/v1/servers/${serverId}`).json();
};
