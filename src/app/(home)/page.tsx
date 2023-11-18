"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/transform");
    }, 1000);
  }, []);

  return (
    <div>
      <p>You being redirected to transform page...</p>
    </div>
  );
}
