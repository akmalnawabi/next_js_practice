import { db } from "@/src/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SnippetShowPageProps {
    params: {
        id: string;
    }
}

export default async function showSnippetPage(props: SnippetShowPageProps) {

    const snippet = await db.snippet.findFirst({
        where: { id: parseInt(props.params.id) }
    })

    if (!snippet) {
        return notFound()
    }

    return <div>
        <div className="flex m-4 justify-between items-center">
            <h1 className="text-xl font-bold">
                {snippet.title}
            </h1>
            <div>
                <Link key={snippet.id} href={`/snippet/${snippet.id}/edit`} className="p-2 border rounded">Edit</Link>
                <button className="p-2 border rounded">Delete</button>
            </div>
        </div>
        <pre className="ml-5">
            <h5>{snippet.code}</h5>
        </pre>
    </div>
}