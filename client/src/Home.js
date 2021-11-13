import React from "react"
import "./App.css";
import not_med from "./material/not_med.png";
import med from "./material/med.png";

const Home = () => (

	<div>
        <blockquote>
            <center><mark><h1> ПРЕДУПРЕЖДЕНИЕ! </h1></mark></center>
                <h2> Этот сайт пока курируется людьми без медицинского образования и не претендует на полную достоверность. Мы стараемся отбирать хорошие статьи без вымыслов и догадок на пустом месте, однако у всех случаются ошибки и мы легко можем пропустить недостоверную информацию из-за отсутствия достаточного количества знаний. Пожалуйста, не верьте каждому слову, что здесь написано, перепроверяйте источники, приложенные к статьям и сообщите нам если вдруг нашли недочёт, мы всегда рады любой помощи. Также просим вас не заниматься самолечением и при недомогании в срочном порядке обращаться к специалистам в этой области - ко врачам. </h2> 
        
        <img src={not_med}/>
        </blockquote>

        <blockquote>
            <center><mark><h1> О Нас: </h1></mark></center>
            <h2> Этот сайт является сборником статей связанными с медициной, вы как читатель можете их комментировать, выставлять рейтинг и жаловаться на недостоверную информацию. Если же вы умеете и хотите создавать статьи, то мы можем предоставить вам средства для их написания, и после проверки опубликуем в общий доступ.</h2>
        <img src={med}/>
        </blockquote>

        <blockquote class="foot">
            <center><mark><h1> Контактная информация : </h1></mark></center>
            <h2><b> Барский Олег Олегович</b> </h2>
            <h3><b> Номер </b>- 8-(977)-453-24-82 </h3>
            <h3><b> Почта </b> barsky2005@gmail.com </h3>
        </blockquote>
</div>

  );

export default Home;