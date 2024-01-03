import { feedback } from "../constants";
import { styles, layout } from "../style";
import FeedbackCard from "./FeedbackCard";
import "./css/aboutOri.css"

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col play__multichain-heading relative text-center play__section`}>
    <div className="absolute z-0 w-60 h-60 -right-60 rounded-full bottom-40" />
    <div className="w-full flex justify-between md:flex-row flex-col sm:mb-16 mb-6 relative z-1">
      <h2 className={styles.heading2}>
          FOUNDING TEAM
      </h2>
    </div>
    <div className="flex flex-wrap play__multichain sm:justify-start feedback-container relative z-1">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
