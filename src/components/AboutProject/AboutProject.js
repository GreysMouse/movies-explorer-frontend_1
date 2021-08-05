import './about-project.css';
import './about-project__text-container.css';
import './about-project__textbox-title.css';
import './about-project__textbox-text.css';
import './about-project__plan-grid.css';

import SectionHeader from '../SectionHeader/SectionHeader';
import PlanGrid from '../PlanGrid/PlanGrid';

function AboutProject() {
  return (
    <section className="about-project">
      <SectionHeader>О проекте</SectionHeader>
      <div className="about-project__text-container">
        <div className="about-project__textbox">
          <p className="about-project__textbox-title">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__textbox-text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__textbox">
          <p className="about-project__textbox-title">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__textbox-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      {/*}
      <div className="about-project__grid">
        <p className="about-project__grid-text about-project__grid-text_color_black"></p>
        <p className="about-project__grid-text about-project__grid-text_color_white"></p>
        <p className="about-project__grid-text about-project__grid-text_color_grey"></p>
        <p className="about-project__grid-text about-project__grid-text_color_grey"></p>
        <div className="about-project__grid-backgroud"></div>
      </div> */}
      <PlanGrid addClasses="about-project__plan-grid" />
    </section>
  );
}

export default AboutProject;
