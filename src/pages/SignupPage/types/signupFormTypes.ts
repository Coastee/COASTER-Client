export interface signUpFormTypes {
  belonging: string;
  birth: string;
  interests: string[];
  introduction: string;
  name: string;
  nickName: string;
  urls: string[];
}

export const defaultSignUpFormValues: signUpFormTypes = {
  belonging: "",
  birth: "",
  interests: [],
  introduction: "",
  name: "",
  nickName: "",
  urls: [""],
};
