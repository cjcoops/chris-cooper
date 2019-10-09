import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ResumeItem from "../components/resume-item";

const SecondPage = () => (
  <Layout>
    {/* <SEO title="Page two" /> */}
    <div class="mb-20 mt-10 lg:mt-6 md:border-t md:border-gray-400 md:pt-2 lg:border-t-0 lg:pt-0">
      <div class="md:flex items-baseline pb-8 ">
        <div className="w-full md:w-1/3">
          <h2 className="font-medium sm:font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900">
            Experience
          </h2>
        </div>
        <div className="w-full md:w-2/3">
          <ResumeItem />
          <ResumeItem />
          <ResumeItem />
        </div>
      </div>
      <div class="md:flex items-baseline pb-8 ">
        <div className="w-full md:w-1/3">
          <h2 className="font-medium sm:font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900">
            Education
          </h2>
        </div>
        <div className="w-full md:w-2/3">
          <ResumeItem />
          <ResumeItem />
          <ResumeItem />
        </div>
      </div>
    </div>
  </Layout>
);

export default SecondPage;
