import scaleImg from 'public/boy.jpg';
import Hero from '../../components/hero';
import Snippet from '../snippet/new/page'
import { db } from '@/src/db';

export default async function scalePage() {
    const snippets = await db.snippet.findMany();
    const renderedSnippets = snippets.map((snippet) => {
        return <div key={snippet.id}>{snippet.title}</div>
    })
    return (
        <div>
            <Hero imgData={scaleImg} imgAlt='ronaldo' title='beckham' />
            <Snippet />
            <div>
                {renderedSnippets}
            </div>
        </div>
    )
}