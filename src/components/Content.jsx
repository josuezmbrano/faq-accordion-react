import data from "../data/accordion-data";
import Plus from "../assets/icon-plus.svg";
import Minus from "../assets/icon-minus.svg";
import FaqItem from "./FaqItem";

export default function Content() {

  return data.map((info) => {
    return (
      <FaqItem key={info.id}>{(isOpen, toggle) => {
        return (
            <section>
                <div className="question-title">
                    <h2>{info.titulo}</h2>
                    <button className="button-style" onClick={toggle}><img src={isOpen ? Minus : Plus} /></button>
                </div>
                <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                    <p className="question-answer">{info.informacion}</p>
                </div>
            </section>
        )
      }}</FaqItem>
    );
  });
}
