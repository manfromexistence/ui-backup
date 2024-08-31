"use client";

import { ComponentPropsWithoutRef, useEffect, useState } from "react";

type HighlightProps = ComponentPropsWithoutRef<"div"> & {
  trigger: unknown;
  duration: number;
};

export default function Highlight({
  trigger,
  duration,
  children,
  ...props
}: HighlightProps) {
  let [previous, setPrevious] = useState(trigger);
  let [didHighlight, setDidHighlight] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (previous !== trigger) {
        setDidHighlight(true);
      }
      setPrevious(trigger);
    }, duration);

    return () => {
      clearTimeout(handler);
    };
  }, [duration, previous, trigger]);

  return (
    <div
      data-highlight={previous !== trigger ? "on" : didHighlight ? "off" : null}
      {...props}
    >
      {children}
    </div>
  );
}

// USAGE
{/* <Highlight trigger={visitors} duration={500} className="group">
  <div className="bg-gray-900 group-data-[highlight=on]:bg-sky-500">
    <p className="text-white/50">Visitors</p>
    <p className="text-sky-500 group-data-[highlight=on]:text-white">
      {visitors}
    </p>
  </div>
</Highlight> */}

