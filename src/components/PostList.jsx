import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import axios from "axios";
function PostList() {

    const [posts, setPosts] = useState ([]);

    useEffect (() => {
        async function fetchPosts() {
            try {
                const response = await axios.get('https://8b0b6b2ae21de602.mokky.dev/post');
                setPosts(response.data);
            } catch(error) {
                console.log (error);
            }
        }
        fetchPosts();
    }, []);



    return(
        <div class="all-news-block">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />

            ))}
        </div>
    );
}


export default PostList;