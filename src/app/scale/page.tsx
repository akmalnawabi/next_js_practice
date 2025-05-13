import scaleImg from 'public/boy.jpg';
import Hero from '../../components/hero';
import { db } from '@/src/db';
import Link from 'next/link';

export default async function scalePage() {
    const snippets = await db.snippet.findMany();
    const renderedSnippets = snippets.map((snippet) => {
        return <Link key={snippet.id}
            href={`/snippet/${snippet.id}`}
            className='flex justify-between items-center p-2 border rounded mx-8 my-2'>
            <div>{snippet.title}</div>
            <div>View</div>
        </Link>
    })

    return (
        <div>
            <Hero imgData={scaleImg} imgAlt='ronaldo' title='beckham' />
            {/* <Snippet /> */}
            <div className='flex flex-col gap-2 mt-8'>
                <div className='flex justify-between mx-8'>
                    <h2 className='text-xl font-bold'>Snippet</h2>
                    <Link href='/snippet/new' className='border rounded p-2'>New</Link>
                </div>
                <div>{renderedSnippets}</div>
            </div>
        </div>
    )
}
