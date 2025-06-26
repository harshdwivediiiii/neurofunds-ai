
import SwirlBackground from "@/components/background";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
    <SwirlBackground />
    
      <SignIn />
    </>
  );
}