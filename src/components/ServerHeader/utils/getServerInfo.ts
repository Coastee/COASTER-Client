import { SERVERINFO } from "@/constants/serverInfo";

export const getServerInfo = (id: number) => {
  return SERVERINFO.find((server) => server.id === id);
};
