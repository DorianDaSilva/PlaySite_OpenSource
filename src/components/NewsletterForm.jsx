import MailchimpSubscribe from "react-mailchimp-subscribe"
import styles from "../style"
import "./css/aboutOri.css"

const url = "https://gmail.us21.list-manage.com/subscribe/post?u=96ed6471cb5d591a033b984fe&amp;id=dff27eff0f&amp;f_id=00e5afe1f0";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>

// use the render prop and your custom form
const NewsletterForm = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col play__about rounded-[20px] box-shadow mt-20px mb-20px play__section`}>
  <div className="flex-1  flex flex-col items-center">
      <h2 className={"items-center text-gradient font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]"}
        >REGISTER YOUR EMAIL!</h2>


          <p className="items-center font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]" style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>Be the first to know about future developments, news & promotions!</p>
      <div className="gpt3__header-content__input">
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <div>
              <SimpleForm onSubmitted={formData => subscribe(formData)} />
              {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
              {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
              {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
            </div>
          )}
        />
      </div>
  </div>
  </section>
)

export default NewsletterForm