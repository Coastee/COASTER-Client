interface Server {
  id: number;
  title: string;
}

export interface ServerResponseTypes {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    count: number;
    serverList: Server[];
  };
}
