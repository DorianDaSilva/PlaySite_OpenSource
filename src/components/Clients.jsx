import { clients } from "../constants";
import "./css/aboutOri.css";
const Clients = () => {

  const handleClientClick = (link) => {
    window.open(link, "_blank");
  }

  const handleClientMouseOver = (event) => {
    event.target.style.cursor = "pointer";
  }

  return (
    <section className="flex justify-center items-center flex-wrap mb-10 mt-10 play__section">
      <div className="flex justify-center items-center flex-wrap w-[70vw] clients">
        {clients.map((client) => (
          <div key={client.id} className="flex-1 flex justify-center items-center m-5">
            <img 
              src={client.logo} 
              alt="client_logo" 
              className="object-contain cursor-pointer "
              onClick={() => handleClientClick(client.link)}
              onMouseOver={handleClientMouseOver}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;
