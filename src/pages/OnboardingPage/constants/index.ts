export const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${import.meta.env.VITE_KAKAO_API_KEY}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URL}`;
export const NAVER_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${import.meta.env.VITE_NAVER_API_KEY}&redirect_url=${import.meta.env.VITE_NAVER_REDIRECT_URL}&state=STATE_STRING`;

export const RETRY_COUNT = 3;
