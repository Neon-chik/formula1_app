import backIcon from "../assets/images/menu-btn.svg"
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

    return(       
         <section class="mobile-block">
        <Link to="/category" class="back-button">
            <div class="mobile-block_header is-dark mobile-block_header-row">
                    <img src={backIcon} alt="Back" />
                        Квалификации 
            </div>
        </Link>
        <div class="all-news-block">
            <div class="news-card">
                <div class="container">
                    <h3 class="news-card_title">{post.title}</h3>
                    <span class="news-card_date">{post.date}</span>
                    <span class="news-card_category">{post.category}</span>
                </div>
            </div>
        </div>
        <div class="all-news-block">
            <div class="news-card">
                <div class="container">
                    <h3 class="news-card_title"> Третья квалификация  -
                        1. Джордж Рассел
                        2. Шарль Леклер
                        3. Ландо Норис </h3>
                    <span class="news-card_date">14.09.2024</span>
                    <span class="news-card_category">Квалификация</span>
                </div>
            </div>
        </div>
        <div class="all-news-block">
            <div class="news-card">
                <div class="container">
                    <h3 class="news-card_title">Вторая квалификация - 1.Шарль Леклер 2.Чеко Перес 3.Льюис Хэмилтон</h3>
                    <span class="news-card_date">13.09.2024</span>
                    <span class="news-card_category">Квалификация</span>
                </div>
            </div>
        </div>
        <div class="all-news-block">
            <div class="news-card">
                <div class="container">
                    <h3 class="news-card_title"> Первая квалификация - 1.Макс Ферстаппен 2.Льюис Хэмилтон 3.Чеко Перес</h3>
                    <span class="news-card_date">13.09.2024</span>
                    <span class="news-card_category">Квалификация</span>
                </div>
            </div>
        </div>
        <div class="all-news-block">
            <div class="news-card">
                <div class="container">
                    <h3 class="news-card_title">Пол позиция в Италии у Ландо Норриса </h3>
                    <span class="news-card_date">31.08.2024</span>
                    <span class="news-card_category">Квалификация</span>
                </div>
            </div>
        </div>
    </section>
    );
}

export default PostDetailPage;