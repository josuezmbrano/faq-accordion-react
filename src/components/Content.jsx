import data from "../data/accordion-data";
import Plus from "../assets/icon-plus.svg";
import Minus from "../assets/icon-minus.svg";
import FaqItem from "./FaqItem";
import useAccordionPerItem from '../hooks/useAccordionPerItem'

export default function Content() {

  const [isId, toggleItem] = useAccordionPerItem()

  return data.map((info) => {
    return (
      <FaqItem activeId={isId} toggleItem={toggleItem} itemId={info.id} key={info.id}>{(isActive, toggle) => {
        return (
            <section>
                <div className="question-title">
                    <h2>{info.titulo}</h2>
                    <button className="button-style" onClick={toggle}><img src={isActive ? Minus : Plus} /></button>
                </div>
                <div className={`accordion-content ${isActive ? "open" : ""}`}>
                    <p className="question-answer">{info.informacion}</p>
                </div>
            </section>
        )
      }}</FaqItem>
    );
  });
}
