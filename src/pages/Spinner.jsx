import React from "react";
import Webheader from "./website/Webheader";
import Webfooter from "./website/Webfooter";
import { Link } from "react-router-dom";
const Spinner = () => {
  return (
    <>
      <Webheader />
      <hr style={{ margin: "0", height: "1px", color: "white" }} />

      <section>
        <section class="spiner-main-sec text-center">
          <div class="container">
            <img class="img-fluid" src="./img/animation-up-img.gif" alt="" />
            <h1 class="mb-5">Congratulations!</h1>
            <p>You won IPAD MINI</p>
            <div class="ipad">
              <img class="img-fluid" src="./img/ipadmini.webp" alt="" />
            </div>

            <div class="mb-5">
              <Link to="/card" class="succ-btn">
                Validate
              </Link>
            </div>
          </div>
        </section>
      </section>
      <Webfooter />
    </>
  );
};

export default Spinner;
