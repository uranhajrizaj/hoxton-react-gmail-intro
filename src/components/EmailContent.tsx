import "../components-style/emailcontent.css";

import backArrow from "../assets/icons/back-arrow.png";
import downloadButton from "../assets/icons/download-button.png";
import rateStarButton from "../assets/icons/rate-star-button.png";
import rubbishButton from "../assets/icons/rubbish-bin-delete-button.png";

import flaticonWelcomeImage from "../assets/images/flaticon-welcome-image.png";

function EmailContent() {
  return (
    <main className="email-view">
      <nav className="email-toolbar">
        <ul>
          <li>
            <img className="icon" src={backArrow} alt="reply button" />
          </li>
          <li>
            <img className="icon" src={downloadButton} alt="archive button" />
          </li>
          <li>
            <img className="icon" src={rubbishButton} alt="delete button" />
          </li>
        </ul>
        <div className="space"></div>
        <div>
          <p>1 of 25</p>
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </nav>
      <article className="email-content">
        <div className="title">
          <h1>Welcome to Flaticon</h1>
        </div>
        <header className="email-content--header">
          <div className="avatar"></div>
          <div className="email-info">
            <div className="sender-info">
              <h2>Freepik Company</h2>
              <em>&lt;no-reply@freepik.com&gt;</em>
            </div>
            <div className="user-info">
              <p>
                to me <em>&lt;nicolas@hoxtonacademy.co.uk&gt;</em>
              </p>
            </div>
          </div>
          <div className="date-info">
            <p>17 March 2021, 09:33</p>
          </div>
          <div className="email-action-icons">
            <ul>
              <li>
                <img className="icon" src={backArrow} alt="reply button" />
              </li>
              <li>
                <img className="icon" src={rateStarButton} alt="star button" />
              </li>
              <li>
                <img className="icon" src={rubbishButton} alt="delete button" />
              </li>
            </ul>
          </div>
        </header>
        <section className="email-body">
          <div className="content">
            <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
          </div>
        </section>
        <section className="email-actions">
          <button>Reply</button>
          <button>Forward</button>
        </section>
      </article>
    </main>
  );
}
export default EmailContent;
