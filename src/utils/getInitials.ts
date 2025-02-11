const consonantMap: { [key: string]: string } = {
  ㄱ: "G",
  ㄲ: "K",
  ㄴ: "N",
  ㄷ: "D",
  ㄸ: "T",
  ㄹ: "L",
  ㅁ: "M",
  ㅂ: "B",
  ㅃ: "P",
  ㅅ: "S",
  ㅆ: "S",
  ㅇ: "Y",
  ㅈ: "J",
  ㅉ: "J",
  ㅊ: "C",
  ㅋ: "K",
  ㅌ: "T",
  ㅍ: "P",
  ㅎ: "H",
};

export const getInitials = (name: string): string => {
  if (!name || name.length < 2) return ""; // 이름이 없거나 1글자 이하인 경우 빈 문자열 반환

  return name
    .slice(1)
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 0xac00 && code <= 0xd7a3) {
        // 한글 음절 범위 내의 문자
        const initialIndex = Math.floor((code - 0xac00) / 588); // 초성 인덱스 계산
        const initials = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
        const initial = initials[initialIndex];

        return consonantMap[initial] || "";
      }
    })
    .join("");
};
