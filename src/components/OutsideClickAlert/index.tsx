import React, { useRef, useEffect } from "react";

function useOutsideAlerter(ref: any, handlePress: () => void) {
  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !ref.current!.contains(event.target)) {
        handlePress();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handlePress]);
}

function OutsideAlerter(props: {
  handlePress: () => void;
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.handlePress);

  return <div ref={wrapperRef}>{props.children}</div>;
}

export default OutsideAlerter;
