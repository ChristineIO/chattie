import Link from "next/link";

export default function HomeLink() {
    return (
        <h1 className="text-2xl font-semibold">
            <Link href="/">Chattie</Link>
        </h1>
    )
}