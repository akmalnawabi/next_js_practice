import { db } from "@/src/db"
import { redirect } from "next/navigation"

export default function createSnippetPage(){
    async function snippetCreate(formData:FormData) {
        'use server'
        const title = formData.get('title') as string
        const code = formData.get('code') as string

        // create a new record in db
        const snippet = await db.snippet.create({
            data: {
                title,
                code,
            }
        })
        console.log(snippet)

        // redirect user back to route
        redirect('/')
    }
    return (
        <form action={snippetCreate}>
            <h3 className="font-bold m-3">Create a snippet</h3>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">Title</label>
                    <input className="border rounded p-2 w-full" name="title" id="title" />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="code">Code</label>
                    <textarea className="border rounded p-2 w-full" name="code" id="code" />
                </div>
            </div>

            <button type="submit" className="rounded p-2 bg-blue-200 w-full">Create</button>
        </form>
    )
}