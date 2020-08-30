import React from "react";
import "./Form.css";
import { useForm } from "react-hook-form";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import MessageIcon from "@material-ui/icons/Message";
import { Button } from "@material-ui/core";

const Form = ({ onSubmit, submitStatus, setSubmitStatus }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
      {/* NAME */}
      <div className="form__row">
        <PersonIcon />
        <div className="form__inputContainer">
          <p className="form__label">Imię i Nazwisko</p>
          <input
            className={`form__input ${errors.name ? "form__input--error" : ""}`}
            type="text"
            name="name"
            ref={register({ required: true })}
            // defaultValue="imie i nazwisko"
          />
          {errors.name && (
            <p className="form__error">Uzupełnij wymagane pole</p>
          )}
        </div>
      </div>

      {/* E-MAIL */}
      <div className="form__row">
        <MailIcon />
        <div className="form__inputContainer">
          <p className="form__label">E-mail</p>
          <input
            className={`form__input ${
              errors.email ? "form__input--error" : ""
            }`}
            type="text"
            name="email"
            ref={register({
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            // defaultValue="test@s"
          />
          {errors.email && (
            <p className="form__error">Podaj prawidłowy adres e-mail</p>
          )}
        </div>
      </div>

      {/* PHONE */}
      <div className="form__row">
        <PhoneIcon />
        <div className="form__inputContainer form__inputContainer--notRequired">
          <p className="form__label">Telefon</p>
          <input
            className={`form__input ${
              errors.phone ? "form__input--error" : ""
            }`}
            type="text"
            name="phone"
            ref={register({ pattern: /^[\d() +-]+$/ })}
            // defaultValue="2313121231"
          />
          {errors.phone && (
            <p className="form__error">Podaj prawidłowy numer telefonu</p>
          )}
        </div>
      </div>

      {/* MESSAGE */}
      <div className="form__row textarea">
        <MessageIcon className="form__rowIcon" />
        <div className="form__inputContainer">
          <p className="form__label">Wiadomość</p>
          <textarea
            className={`form__input ${
              errors.message ? "form__input--error" : ""
            }`}
            type="text"
            rows="4"
            name="message"
            ref={register({ required: true })}
            // defaultValue="wiadomosc przykladowa"
          />
          {errors.message && (
            <p className="form__error">Uzupełnij wymagane pole</p>
          )}
        </div>
      </div>

      <Button
        className="form__button"
        variant="contained"
        type="submit"
        disabled={submitStatus.sending}
        onClick={() =>
          setSubmitStatus({
            sending: false,
            status: "",
            message: "",
          })
        }
      >
        {submitStatus.sending ? "WYSYŁANIE..." : "WYŚLIJ"}
      </Button>

      {submitStatus.status === "SUCCESS" && (
        <p className="form__submit form__submit--success">
          {submitStatus.message}
        </p>
      )}

      {submitStatus.status === "FAIL" && (
        <p className="form__submit form__submit--fail">
          {submitStatus.message}
        </p>
      )}
    </form>
  );
};

export default Form;
