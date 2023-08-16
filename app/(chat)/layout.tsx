import { FC, ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return <div className="mx-auto max-w-4xl h-full w-full">{children}</div>;
};

export default layout;
