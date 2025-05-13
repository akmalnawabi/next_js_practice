interface snippetEditPageProps {
    params: {
        id: string
    }
}

export default function snippetEditPage(props: snippetEditPageProps){
    const id = parseInt(props.params.id)

    return <div>
        editing page with id {id}
    </div>
}