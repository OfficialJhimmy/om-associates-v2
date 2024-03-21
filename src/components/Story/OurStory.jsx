import "./index.css";
import advice from "../../assets/images/advice.png";
import growth from "../../assets/images/growth.png";
import best from "../../assets/images/best.png";
import ontime from "../../assets/images/ontime.png";

const OurStory = () => {
  return (
    <section className="ourstory__container">
      <div className="ourstory__left">
        <p className="ourstory__span">our Story</p>
        <p className="ourstory__topheading">
          We are Here to Ease Your Financial Obstacles
        </p>
        <p className="ourstory__toppara">
          Embark on a journey with O.M.
          Associates. We understand that navigating the complexities of finance
          can be challenging, and that is why we are dedicated to providing you
          with tailored solutions that alleviate your financial obstacles.
        </p>
        <div className="ourstory__steps">
          <div className="ourstory__steps-one">
            <div className="ourstory__steps--number deets-yellow">1</div>
            <div className="ourstory__steps--deets">
              <p className="ourstory__steps--deets__toppara">Contact Us</p>
              <p className="ourstory__steps--deets__bottompara">
                Reach out to us directly. Our team is ready to assist you with
                any inquiries or concerns. Your financial journey begins with a
                simple conversation.
              </p>
            </div>
          </div>

          <div className="ourstory__steps-one">
            <div className="ourstory__steps--number deets-green">2</div>
            <div className="ourstory__steps--deets">
              <p className="ourstory__steps--deets__toppara">Consult with Us</p>
              <p className="ourstory__steps--deets__bottompara">
                Schedule a consultation to discuss your unique financial needs.
                Our experts will work closely with you to analyze your situation
                and provide personalized guidance and solutions.
              </p>
            </div>
          </div>

          <div className="ourstory__steps-one">
            <div className="ourstory__steps--number deets-black">3</div>
            <div className="ourstory__steps--deets">
              <p className="ourstory__steps--deets__toppara">
                Visit Our Office
              </p>
              <p className="ourstory__steps--deets__bottompara">
                Step into our office to experience personalized service. Our
                doors are open, and we welcome you to discuss your financial
                goals in person. Let us work together to shape a prosperous
                future
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ourstory__right">
        <p className="ourstory__right--span">Growing with our clients</p>
        <p className="ourstory__right--heading">Decades of Collective Experience</p>
        <p className="ourstory__right--mainpara">
          O.M. ASSOCIATES was founded in June 2005 by a group of professionals
          with decades of experience and expertise in a variety of fields. Our
          experiences and knowledge gained in various managerial jobs across
          sectors have been extremely valuable in providing high-quality
          service.
        </p>

        <p className="ourstory__right--subpara">
          We are also known for our competence in financial/accounting reporting,
          filing required returns (NSE, SEC, CAC), internal/external audit and
          investigations.
        </p>

        <div className="ourstory__right--cards">
          <div className="ourstory__right--card">
            <img src={advice} alt="om.associates icons" />
            <p className="ourstory__right--card__heading">Advices and Guides</p>
            <p className="ourstory__right--card__info">
              Our fast and innovative approach ensures an enjoyable and
              professional experience. Rely on our expert insights to make
              informed decisions.
            </p>
          </div>

          <div className="ourstory__right--card">
            <img src={growth} alt="om.associates icons" />
            <p className="ourstory__right--card__heading">Company Growth</p>
            <p className="ourstory__right--card__info">

                Our commitment to fast and innovative financial solutions
                ensures that your company not only thrives but experiences
                sustainable growth.

            </p>
          </div>

          <div className="ourstory__right--card">
            <img src={ontime} alt="om.associates icons" />
            <p className="ourstory__right--card__heading">On Time Services</p>
            <p className="ourstory__right--card__info">
              Our fast and innovative approach guarantees on-time services,
              ensuring that you receive efficient and reliable financial
              solutions precisely when you need them.
            </p>
          </div>

          <div className="ourstory__right--card">
            <img src={best} alt="om.associates icons" />
            <p className="ourstory__right--card__heading">Best Support</p>
            <p className="ourstory__right--card__info">
              Our expert team is here to offer the best support, bringing you
              tailored business solutions that challenge established thinking
              and drive transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
