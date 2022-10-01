import { Button, Wrapper } from "./modal.styled";
import { useState, useMemo, ReactNode } from "react";
import ReactDOM from "react-dom";

export default function useModal(isCloseBtnVisible = false, zIndex = 999) {
  const [content, setContent] = useState<null | ReactNode>(null);

  const modal = useMemo(() => {
    if (!typeof window) {
      document.body.style.overflow = content ? "hidden" : "auto";
    }

    return (
      content &&
      ReactDOM.createPortal(
        <Wrapper onClick={() => setContent(null)} zIndex={zIndex}>
          {content}
          {isCloseBtnVisible && <Button>Х</Button>}
        </Wrapper>,
        document.body
      )
    );
  }, [content, isCloseBtnVisible, zIndex]);

  return [modal, setContent];
}
