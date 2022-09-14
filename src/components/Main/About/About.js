import valeria__photo from '../../../images/valeria__photo.jpg';

import './About.css';

function AboutMe() {
    return (
        <section className="about-me">
            <div className="about-me__description">
                <img src={valeria__photo} alt="фото" className="about-me__description-photo" />
                <div className="about-me__description-text">
                    <h3 className="about-me__description-title">Себя не находят</h3>
                    <p className="about-me__description-subtitle">&sim;&ensp;себя создают!</p>
                    <p className="about-me__description-paragraph">
                        Меня зовут Валерия, я колорист с опытом работы с волосами и оттенками более 10 лет.
                        Подберу для Вас индивидуальный образ с учетом особенностей внешности, образа жизни и личных пожеланий!
                        Так же помогу подобрать грамотный и правильный домашний уход именно для Ваших волос!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;