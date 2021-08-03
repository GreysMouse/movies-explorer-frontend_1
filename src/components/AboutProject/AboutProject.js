import './about-project.css';
import './about-project__text-container.css';

import SectionHeader from '../SectionHeader/SectionHeader';
import TextBox from '../TextBox/TextBox';

const headerOne = 'Дипломный проект включал 5 этапов';
const headerTwo = 'На выполнение диплома ушло 5 недель';

const textOne = 'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.';
const textTwo = 'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.';

function AboutProject() {
  return (
    <section className="about-project">
      <SectionHeader>О проекте</SectionHeader>
      <div className="about-project__text-container">
        <TextBox header={ headerOne } text = { textOne } />
        <TextBox header={ headerTwo } text = { textTwo } />
      </div>
      <div className="about-project__grid">
        <p className="about-project__grid-text about-project__grid-text_color_black"></p>
        <p className="about-project__grid-text about-project__grid-text_color_white"></p>
        <p className="about-project__grid-text about-project__grid-text_color_grey"></p>
        <p className="about-project__grid-text about-project__grid-text_color_grey"></p>
        <div className="about-project__grid-backgroud"></div>
      </div>
    </section>
  );
}

export default AboutProject;
