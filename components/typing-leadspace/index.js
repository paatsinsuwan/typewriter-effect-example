/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/forbid-dom-props */
/* eslint-disable react/no-unknown-property */

import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { ArrowRight20 } from "@carbon/icons-react";

const TypingLeadspace = (props) => {
  const { title, copy, ctas, large } = props;
  useEffect(() => {
    // document.addEventListener('DOMContentLoaded', () => {
      let whiteTextEle = document.getElementsByClassName("bx--text-white")[0];
      let blackTextEle = document.getElementsByClassName("bx--text-black")[0];
      setTimeout(() => {
        let intervalID = setInterval(() => {
          blackTextEle.textContent =
            blackTextEle.textContent + whiteTextEle.textContent.charAt(0);
          whiteTextEle.textContent = whiteTextEle.textContent.substring(1);
          if (whiteTextEle.textContent.length == 0) {
            clearInterval(intervalID);
          }
        }, 80);
      }, 1000);
    // })
  }, []);
  return (
      <div id="typing-leadspace" className={`bx--grid`}>
        <div className={`bx--row`}>
          <div className={`${large ? "bx--col-lg-14" : "bx--col-lg-12"}`}>
            <div
              className={`bx--typewriter-effect ${
                large ? "bx--typewriter-effect-large" : ""
              }`}
            >
              <h1 className={`bx--leadspace-title`}>
                <span className={`bx--text-black`}></span>
                <span className={`bx--text-blue`}>|</span>
                <span className={`bx--text-white`}>{title}</span>
              </h1>
              <p className={`bx--leadspace-copy`}>{copy}</p>
              {ctas.length > 0 && (
                <ol
                  className="bx--buttongroup"
                  data-autoid="dds--button-group"
                  style={{
                    "--dds--button-group--item-count": ctas.length,
                  }}
                >
                  <li key={ctas[0]} className="bx--buttongroup-item">
                    <a
                      data-autoid="dds--button-group-0"
                      copy={ctas[0].copy}
                      tabIndex="0"
                      className="bx--btn bx--btn--primary bx--btn--expressive"
                      href={ctas[0].href}
                    >
                      {ctas[0].copy}
                      <ArrowRight20 className={`bx--btn__icon`} />
                    </a>
                  </li>
                  {ctas.length == 2 && (
                    <li key={ctas[1]} className="bx--buttongroup-item">
                      <a
                        data-autoid="dds--button-group-1"
                        copy={ctas[1].copy}
                        tabIndex="0"
                        className="bx--btn bx--btn--tertiary bx--btn--expressive"
                        href={ctas[1].href}
                      >
                        {ctas[1].copy}
                        <ArrowRight20 className={`bx--btn__icon`} />
                      </a>
                    </li>
                  )}
                </ol>
              )}
            </div>
          </div>
        </div>
      </div>
  );
};

export default TypingLeadspace;

TypingLeadspace.propTypes = {
  copy: PropTypes.string,
  ctas: PropTypes.array,
  large: PropTypes.bool,
  title: PropTypes.string
};