import React from "react"
import { Comment } from "./page"
import Link from "next/link";

interface CommentListProps {
    comments: Comment[];
    setComments: (comments: Comment[]) => void;
}

export const CommentList: React.FC<CommentListProps> = ({
    comments,
    setComments,
}) => {
    const handleEdit = (commentId:number) => {
        setComments (
            comments.map((comment)=>{
                if(comment.id === commentId){
                    return{...comment,editable:true}
                }
                return comment;
            })
        );
        };
        const handleSave = (commentId: number, newText: string) => {
            setComments(
                comments.map((comment) => {
                    if(comment.id === commentId) {
                        return {...comment, text: newText, editable: false};                    
                    }
                    return comment;
                })
            )
        };
        const handleDelete = (commentId: number) => {
            setComments(comments.filter((comment)=> comment.id !== commentId));
        };

    return(<div>
        {comments.map((comment)=>(
            <div key={comment.id}>
              {comment.editable ? (
                <div className="textarea-button-container">
                       <textarea 
                       value={comment.text}
                        className="comment-container"
                         onChange={(e) => 
                            setComments(
                         comments.map((c) =>
                            c.id === comment.id ? {...c, text: e.target.value } : c)
                             )}
                             /> 
              
    
      
       <div className="edit-delete-container">
        <button onClick={()=> handleSave(comment.id, comment.text)}>Save</button>
        <button className="button-delete">Delete</button>
        </div>
        </div>
        ) :(
            <>
            <div className="comment-container">{comment.text}</div>
            <button onClick={()=> handleEdit(comment.id)} className="button-edit">Edit</button>
            <button onClick={() => handleDelete(comment.id)} className="button-delete">Delete</button></>
        )}
        </div>
        ))}
    </div>
  
)};
export default CommentList