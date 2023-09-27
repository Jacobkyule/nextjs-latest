import DeletePostButton from "./DeletePostButton"
export default function post({id, title, content, authorName}){
    return (
        <div style={{border: '1px solid black', padding: '15px'}}>
            <h3>{authorName}</h3>
            <h4>{title}</h4>
            <p>{content}</p>
            <DeletePostButton postId={id}/>
        </div>
    )
}