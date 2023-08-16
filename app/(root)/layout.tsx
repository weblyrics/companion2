import { FC, ReactNode } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { checkSubscription } from "../lib/subscription";

interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = async ({ children }) => {
  const isPro = await checkSubscription();
  return (
    <div className=" h-full">
      <Navbar isPro={isPro} />
      <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
        <Sidebar isPro={isPro} />
      </div>
      <main className=" md:pl-20 pt-16 h-full">{children}</main>
    </div>
  );
};

export default layout;
