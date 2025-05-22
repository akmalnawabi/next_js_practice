'use client';

import type { Snippet } from "@/generated/prisma";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import * as actions from '../actions/index'

interface SnippetEidtFormProps {
    snippet: Snippet;
}

export default function snippetEditForm({snippet}: SnippetEidtFormProps) {

    const [code, setCode] = useState(snippet.code)

    const handleChange = (value: string = '') => {
        setCode(value)
    }

    const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code)

    return <div>
        <Editor 
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        onChange={handleChange}
        />

        <form action={editSnippetAction}>
            <button type="submit" className="p-2 border rounded">Save</button>
        </form>
    </div>
}