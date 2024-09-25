import categoryIcon from "../assets/images/redbull-logo-svgrepo-com.svg";


function Header() {
    return (
        <header class="header">
        <div class="container">
            <span class="btn-category">
                <img src={categoryIcon} alt="menu-btn" />
            </span>

        </div>

    </header>


    );
}

export default Header;