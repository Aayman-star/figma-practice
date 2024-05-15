import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const wrapper = ({ children }: Props) => {
  return (
    <section className="w-full md:max-w-6xl md:mx-auto">{children}</section>
  );
};

export default wrapper;
