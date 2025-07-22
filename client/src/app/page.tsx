import Link from "next/link";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="">
      <main className="main-page ">
        <section className="mt-16">
          <h1 className="main-title">
            Chattie
          </h1>
        </section>
        <section>
          <Button classname={`pt-4 pb-4 pl-2 pr-2 rounded-xl w-44 main-btn`}>
            <Link href='/login' className="text-5x1">Start Chatting</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
