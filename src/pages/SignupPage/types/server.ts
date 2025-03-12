interface Server {
  id: number;
  title: string;
}

export interface FetchServersResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    count: number;
    serverList: Server[];
  };
}
