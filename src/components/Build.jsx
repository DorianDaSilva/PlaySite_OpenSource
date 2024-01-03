import { technologies } from "../constants";
import styles from "../style";
import "./css/aboutOri.css"

const Build = () => {

  const handleClientClick = (link) => {
    window.open(link, "_blank");
  }

  const handleClientMouseOver = (event) => {
    event.target.style.cursor = "pointer";
  }

  return (
    <section className={`${styles.flexCenter} my-4 play__section`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {technologies.map((technology) => (
          <div key={technology.name} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
            <img src={technology.icon}
            alt="logo"
            className="sm:w-[192px] w-[100px] object-contain"
            onClick={() => handleClientClick(technology.link)}
            onMouseOver={handleClientMouseOver}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Build;