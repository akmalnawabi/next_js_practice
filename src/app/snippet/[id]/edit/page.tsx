import { db } from "@/src/db"
import { notFound } from "next/navigation"
import SnippetEditForm from "@/src/components/snippet-edit-form"

interface snippetEditPageProps {
    params: {
        id: string
    }
}

export default async function snippetEditPage(props: snippetEditPageProps){
    const id = parseInt(props.params.id)
    const snippet = await db.snippet.findFirst({
        where: {id}
    })

    if(!snippet){
        return notFound()
    }

    return <div>
        <SnippetEditForm snippet={snippet} />
    </div>
}