import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div
      className="flex flex-row justify-between items-center"
      style={{ width: "90vw", maxWidth: "992px", margin: "0 auto" }}
    >
      {children}
    </div>
  );
};
