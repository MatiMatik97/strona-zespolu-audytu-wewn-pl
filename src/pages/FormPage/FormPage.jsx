import React, { useEffect, useState } from "react";
import "./FormPage.css";
import { pages } from "../../utils/links";
import UniversalPage from "../UniversalPage/UniversalPage";
import Form from "../../components/Form/Form";
import axios from "axios";

const GOOGLE_FORM_NAME_ID = "entry.246367538";
const GOOGLE_FORM_EMAIL_ID = "entry.2103298451";
const GOOGLE_FORM_PHONE_ID = "entry.1910681894";
const GOOGLE_FORM_MESSAGE_ID = "entry.1496957730";
const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSejU76qaRm47TD-h8-rU-I6XLVM0kLpV8YcwQkuryYuaXKuwA/formResponse";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const FormPage = () => {
  const [submitStatus, setSubmitStatus] = useState({
    sending: false,
    status: "",
    message: "",
  });

  const onSubmit = async (data) => {
    setSubmitStatus({
      sending: true,
      status: "",
      message: "",
    });

    const formData = new FormData();
    formData.append(GOOGLE_FORM_NAME_ID, data.name);
    formData.append(GOOGLE_FORM_EMAIL_ID, data.email);
    formData.append(GOOGLE_FORM_PHONE_ID, data.phone);
    formData.append(GOOGLE_FORM_MESSAGE_ID, data.message);

    axios
      .post(CORS_PROXY + GOOGLE_FORM_ACTION_URL, formData)
      .then((response) => {
        // console.log(response);

        setSubmitStatus({
          sending: false,
          status: "SUCCESS",
          message: "Wysłano wiadomość.",
        });

        // [...document.querySelectorAll(".form__input")].map(
        //   (input) => (input.value = "")
        // );
      })
      .catch((error) => {
        // console.error(error);

        setSubmitStatus({
          sending: false,
          status: "FAIL",
          message: "Nie udało się wysłać wiadomości.",
        });
      });
  };

  const formPageComponent = (
    <div className="form">
      <h2>Zespół Audytu Wewnętrznego PL</h2>
      <h4>Formularz</h4>
      <h5>* - pole wymagane</h5>

      <Form
        onSubmit={onSubmit}
        submitStatus={submitStatus}
        setSubmitStatus={setSubmitStatus}
      />
    </div>
  );

  useEffect(() => {
    document.title = pages.FORM_PAGE.title;
  }, []);

  return <UniversalPage component={formPageComponent} />;
};

export default FormPage;
