import { Link } from "react-router-dom";

function PostCard({post}) {
    return (
        <div class="all-news-block">
         <Link to={`/post/${post.id}`} class="news-card">
             <div class="container">
                 <h3 class="news-card_title">{post.title}</h3>
                 <span class="news-card_date">{post.date}</span>
                 <span class="news-card_category">{post.category}</span>
             </div>
         </Link>
    </div>
    );
}

export default PostCard;