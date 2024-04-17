import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div style={{ border: "2px solid blue", padding: "2rem" }}>{children}</div>
  );
};

export default Wrapper;
