import Image from "next/image";
import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl text-center">Hello World</h1>
      <Pagination itemCount={100} pageSize={10} currentPage={3} />
    </>
  );
}
