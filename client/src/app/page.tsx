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
          <Link href='/login' className="accent underline text-2xl">Get Started</Link>
        </section>
      </main>
    </div>
  );
}
