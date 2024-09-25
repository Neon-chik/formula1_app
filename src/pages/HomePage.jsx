import PostList from "../components/PostList";
import backIcon from "../assets/images/menu-btn.svg";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";



function HomePage() {


    const { id } = useParams();
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


    return(
        <section class="mobile-block">
            <Link to="/category" class="back-button">
                <div class="mobile-block_header is-secondary mobile-block_header-row">
                        <img src={backIcon} alt="Back" />
                        Гран-При
                </div>
            </Link>
        <PostList />

    </section>
        
    );
}


export default HomePage;