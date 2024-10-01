import type { Metadata } from "next";
import { PageWrapper } from "../components/PageWrapper";

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {

  return (
    <>
      <PageWrapper />
    </>
  );
}
