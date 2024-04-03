/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import TypingLeadspace from "../components/typing-leadspace";

/**
 * Homepage
 *
 * @returns {*} JSX for Homepage
 */
const Home = () => (
  <>
    <TypingLeadspace 
      title="Lead space title"
      copy="Use this area for a short line of copy to support the title"
      ctas={[]}
    />
    <div></div>
  </>
);

export default Home;



// import { Desktop, Pattern, Touch } from "@carbon/pictograms-react";
// import {
  // TableOfContents,
  // LeadSpace,
  // Layout,
  // ContentBlockMedia,
  // LinkList,
  // ContentBlockMixed,
  // ContentBlockSegmented,
  // ContentBlockSimple,
  // CardSectionImages,
  // CardSectionSimple,
// } from "@carbon/ibmdotcom-react";
// import { ArrowRight20 } from "@carbon/icons-react";