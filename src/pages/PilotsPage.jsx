import CharlsIcon from "../assets/images/Charles_Leclerc_portrait_2020.png";
import MaxIcon from "../assets/images/Max.png";
import LIcon from "../assets/images/L.jpg";
import LandoIcon from "../assets/images/Lando.png";
import backIcon from "../assets/images/menu-btn.svg";
import { Link } from "react-router-dom";






function PilotsPage() {
    return(
        <section class="mobile-block">
        <Link to="/category" class="mobile-block_header is-red mobile-block_header-row">
        <img src={backIcon} alt="Back" />
            Пилоты
        </Link>

        <div class="all-news-block">
            <div class="news-card">
                <div class="container_2">
                    <img class="pilots" src={CharlsIcon} alt="" />
                    <h1>Шарль Леклер</h1>
                    <h3 class="news-card_title">
                        Шарль Леклер — монегаскский гонщик, родившийся 16 октября 1997 года. Он выступает за команду Ferrari в Формуле-1. Леклер начал свою карьеру в Формуле-1 в 2018 году с командой Sauber, а в 2019 году подписал контракт с Ferrari.
    
                        Шарль быстро завоевал репутацию талантливого гонщика благодаря своим навыкам управления автомобилем и скорости. Он стал одним из самых перспективных гонщиков своего поколения, одержав несколько побед и регулярно занимая высокие позиции на подиумах. Леклер также известен своим агрессивным стилем гонок и умением работать с настройками автомобиля</h3>
                    <span class="news-card_category">Пилоты</span>
                </div>
            </div>
        </div>
        <div class="all-news-block">
            <div class="news-card">
                <div class="container_2">
                    <img class="pilots" src={MaxIcon} alt="" />
                    <h1>Макс Ферстаппен</h1>
                    <h3 class="news-card_title"> Макс Ферстаппен — голландский гонщик, родившийся 30 сентября 1997 года. Он выступает за команду Red Bull Racing в Формуле-1. Ферстаппен стал самым молодым гонщиком в истории Формулы-1, дебютировав в 2015 году в возрасте 17 лет с командой Toro Rosso.
                        Макс быстро завоевал популярность благодаря своему агрессивному стилю вождения и впечатляющим результатам. Он стал первым гонщиком, родившимся в 2000-х годах, который одержал победу в Гран-при, выиграв гонку в Испании в 2016 году. 
                    </h3>
                    <span class="news-card_category">Пилоты</span>
                </div>
            </div>
        </div>
        <div class="all-news-block">
            <div class="news-card">
                <div class="container_2">
                    <img class="pilots" src={LIcon} alt="" />
                    <h1>Логан Сарджент</h1>
                    <h3 class="news-card_title">Логан Сарджент — американский гонщик, родившийся 31 мая 2001 года. Он начал свою карьеру в автоспорте в картинге и постепенно перешел в более серьезные категории. Сарджент выступал в таких чемпионатах, как FIA Formula 3 и Indy Lights, где добился значительных успехов.В 2022 году он подписал контракт с командой Williams в Формуле-1, став первым американцем в этой команде после 2006 года.
                        Логан привнес в Williams свежий взгляд и стал одним из молодых талантов, за которыми следят в Формуле-1.

Сарджент известен своим упорством и стремлением к улучшению, а также способностью быстро адаптироваться к новым условиям. </h3>
                    <span class="news-card_category">Пилоты</span>
                </div>
            </div>
        </div>
        <div class="all-news-block">
            <div class="news-card">
                <div class="container_2">
                    <img class="pilots" src={LandoIcon} alt="" />
                    <h1>Ландо Норрис</h1>
                    <h3 class="news-card_title">Ландо Норрис — британский гонщик, родившийся 13 ноября 1999 года в Браммали, Англия. Он выступает за команду McLaren в Формуле-1. Норрис начал свою карьеру в картинге, а затем продвигался через различные формулы, включая Eurocup Formula Renault и FIA Formula 2.

                        Ландо дебютировал в Формуле-1 в 2019 году и быстро зарекомендовал себя как один из самых перспективных молодых гонщиков.н отличается отличными навыками вождения, умением работать с командой и энергией, которую приносит в спорт. Норрис также получил признание за свои харизматичные выходки и активность в социальных сетях.

                        С момента своего дебюта он регулярно показывает конкурентные результаты, включая несколько подиумов и яркие выступления в гонках.  </h3>
                    <span class="news-card_category">Пилоты</span>
                </div>
            </div>
        </div>
       
      
    </section>
    );
}

export default PilotsPage;