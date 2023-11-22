import React from "react";
import Webheader from "./website/Webheader";
import Webfooter from "./website/Webfooter";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <>
      <Webheader />
      <hr style={{ margin: "0", height: "1px", color: "white" }} />
      <section>
        <div class="hero-sec">
          <div class="container-fluid">
            <h1>O2 Promo Discount Applied Successfully!</h1>
          </div>
        </div>
        {/* <!-- main section --> */}
        <section class="success-main-sec text-center">
          <div class="container">
            <img class="img-fluid" src="./img/animation-up-img.gif" alt="fff" />
            <h1 class="mb-5">Congratulations!</h1>
            <p class="mb-5">
              {" "}
              You have successfully applied a 30% discount to your upcoming
              bill. Additionally we have a gift hamper for you. Please click on
              the tap below to claim your gift hamper.{" "}
            </p>
            <div class="mb-5">
              <Link to="/spinner" class="succ-btn">
                Claim Here
              </Link>
            </div>
          </div>
        </section>
      </section>
      <Webfooter />
    </>
  );
};

export default Success;
