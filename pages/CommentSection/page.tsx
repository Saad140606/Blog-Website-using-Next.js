import { useState } from "react";
import { CommentInput } from "./CommentInput";
import { CommentList } from "./CommentList";
import Link from "next/link";
import React from "react";

export interface Comment {
    id: number;
    text: string;
    editable: boolean;
}


const App: React.FC = () => {
    const [comments , setComments] = useState<Comment[]>([]);
    const handleSubmit = (text:string) => {
        const newComment = { id: Date.now(), text, editable: false};
        setComments([...comments, newComment]);
    }
    return ( 
        
    <div className="main-container">
        <h1 className="font-bold text-5xl text-center pb-05 content text-black-600">COMMENT SECTION</h1>
        <br />
        <h4>(SHARE YOUR THOUGHTS WITH US)</h4>
        <br />
    <CommentList comments={comments} setComments={setComments}/>
    <CommentInput onSubmit={handleSubmit} />
    </div>
    )
}
export default App