export interface SignUpFormTypes {
  name?: string;
  nickname: string;
  urlList: string[];
  headline: string;
  job: string;
  expYears: number;
  bio: string;
  serverIdList: number[];
}

export const defaultSignUpFormValues: SignUpFormTypes = {
  job: "",
  expYears: 0,
  serverIdList: [],
  headline: "",
  nickname: "",
  urlList: [""],
  bio: "",
};
