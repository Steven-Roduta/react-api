import post from "../data/post";
import Postlist from "./Postlist";

export default function postCard() {
    return (
        <div className="post-list">
            {post.map((post, id) => {
                <Postlist
                key={id} 
                title={post.title} 
                content={post.content}
                image={post.image}
                />
            })}
        </div>
    )
}