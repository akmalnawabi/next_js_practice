'use server'

import { redirect } from "next/navigation";
import { db } from "../db";

export async function editSnippet(id: number, code: string) {
    await db.snippet.update({
        where: {id},
        data: {code}
    })

    redirect(`/snippet/${id}`)
}