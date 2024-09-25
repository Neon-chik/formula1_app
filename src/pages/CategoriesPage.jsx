import firstIcon from "../assets/images/formula-1-svgrepo-com (1).svg";
import secondIcon from "../assets/images/formula-1-svgrepo-com (2).svg";
import lastIcon from "../assets/images/target-arrow-svgrepo-com.svg";
import backIcon from "../assets/images/menu-btn.svg";
import { Link } from "react-router-dom";

function CategoriesPage () {
    return(
        <section class="mobile-block">
        <div class="mobile-block_header is-f1 mobile-block_header-row">
        <img src={backIcon} alt="Back" />
           Категории
        </div>
        <div class="container_2">
            <div class="category-row">
                <Link to="/" class="category-item">
                    <img class="pilots" src={firstIcon} alt="Home" />
                    <span class="category-item__title">Гран-при</span>
                </Link>
                <Link to="/pilots" class="category-item">
                    <img class="pilots" src={secondIcon} alt="Football" />
                    <span class="category-item__title">Пилоты</span>
                </Link>
            </div>
        </div>
    </section>
    );
}

export default CategoriesPage;