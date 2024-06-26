import React, { ReactNode, FC } from "react";
type Props = {
  children: React.ReactNode;
};
const Wrapper: FC<Props> = ({ children }: Props) => {
  return (
    <section className="w-full md:max-w-6xl md:mx-auto">{children}</section>
  );
};

export default Wrapper;
