import  React , {useState} from "react"
import Link from "next/link";

export interface CommentInputProps {
    onSubmit: (text:string) => void;
}
export const CommentInput: React.FC<CommentInputProps> = ({ onSubmit }) => {
    const [text, setText] = useState<string>("");
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(text)
        setText("");
    };
    return(
        <div>
        
        <form onSubmit={handleSubmit}>
            <textarea 
            placeholder="Comment....."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-8"
            />
            <button className="comment-button">Submit</button>
        </form></div>
    )
}
export default CommentInput