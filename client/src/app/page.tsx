import Link from "next/link";

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
          <Link href='/login' className={`pt-6 pb-6 pl-4 pr-4 rounded-xl w-44 main-btn`}>Start Chatting</Link>
        </section>
      </main>
    </div>
  );
}
