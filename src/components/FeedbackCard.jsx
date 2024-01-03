import { quotes } from "./assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div
    className="flex justify-center flex-col px-10 py-12 rounded-[20px]  max-w-[370px] items-center md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
    style={{ border: "3px solid RGB(91, 14, 135, 0.3)" }}
  >
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
    />

    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white items-center my-5">
      {content}
    </p>

    <img
      src={img}
      alt={name}
      className="w-[150px] h-[150px] rounded-full mt-5 mb-10"
    />

    <div className="flex flex-row">
      <div className="flex flex-col items-center ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
