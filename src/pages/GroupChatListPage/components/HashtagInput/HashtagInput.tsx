import { toHashTag } from "@/utils/hashTag";
import { useLayoutEffect, useRef, useState } from "react";
import * as s from "./HashtagInput.styles";

interface HashtagInputProps {
  addHashtag: (content: string) => void;
}

const HashtagInput = ({ addHashtag }: HashtagInputProps) => {
  const [value, setValue] = useState("");
  const [fontWidth, setFontWidth] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      e.preventDefault();
      if (value.trim().length > 0) {
        addHashtag(toHashTag(value));
        setValue("");
      }
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: Ignore unnecessary dependency warning
  useLayoutEffect(() => {
    if (spanRef.current) {
      setFontWidth(spanRef.current.getBoundingClientRect().width);
    }
  }, [value]);

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={handleInput}
        onKeyDown={onKeyDown}
        css={s.addHashtagStyle(fontWidth)}
        placeholder="#직접입력"
        ref={inputRef}
      />
      <span css={s.hiddenSpanStyle} ref={spanRef}>
        {value}
      </span>
    </>
  );
};

export default HashtagInput;
