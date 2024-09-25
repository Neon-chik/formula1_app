import { useState, useEffect } from "react";
import backIcon from "../assets/images/menu-btn.svg"
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function PostDetailPage() {

    const {id} = useParams();
    const [post, setPost] = useState({});


    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await axios.get(`https://8b0b6b2ae21de602.mokky.dev/post/${id}`);
                setPost(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPost();
    }, [id]);


    return (
        <section class="mobile-block absolute-top">
            <Link to="/" class="back-button">
            <div class="mobile-block_header is-dark mobile-block_header-row"></div>
                <div class="container">
                    <img src={backIcon} alt="Back icon" />

                </div>
            </Link>
                <div class="container">
                <div class="post-detail-block">
                        <h3 class="news-card__title">{post.title}</h3>
                        <img class="post_img" src={post.imageUrl} alt={post.title} /> 
                        <p class="description">
                            {post.description}
                        </p>
                        <span class="date">Дата <strong class="light-blue-text">{post.date}</strong></span>
                        <button class="tag-button">{post.category}</button>
                    </div>
                </div>            
        </section>
    );
}

export default PostDetailPage;