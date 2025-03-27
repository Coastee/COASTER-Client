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
  if (!name || name.length < 2) return "";

  const words = name.trim().split(" ");

  // 공백이 있는 경우
  if (words.length > 1) {
    return words
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
  }

  // 한글인 경우
  const firstChar = name.charAt(0);
  const code = firstChar.charCodeAt(0);
  if (code >= 0xac00 && code <= 0xd7a3) {
    return name
      .slice(1)
      .split("")
      .map((char) => {
        const code = char.charCodeAt(0);
        if (code >= 0xac00 && code <= 0xd7a3) {
          const initialIndex = Math.floor((code - 0xac00) / 588);
          const initials = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
          const initial = initials[initialIndex];
          return consonantMap[initial] || "";
        }
        return "";
      })
      .join("")
      .substring(0, 2);
  }

  // 영어인 경우
  return name.substring(0, 2).toUpperCase();
};
