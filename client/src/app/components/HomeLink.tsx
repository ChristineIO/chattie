import Link from "next/link"

type HomeLinkProps = {
    className?: string;
}

export default function HomeLink({className}:HomeLinkProps) {
    return (
        <h1 className="text-2xl font-semibold">
            <Link href="/" className={className}>Chattie</Link>
        </h1>
    )
}