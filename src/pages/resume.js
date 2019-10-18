import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ResumeItem from "../components/resume-item";

const SecondPage = () => (
  <Layout>
    {/* <SEO title="Page two" /> */}
    <div className="mb-20 mt-10 lg:mt-6 md:border-t md:border-gray-400 md:pt-2 lg:border-t-0 lg:pt-0">
      <div className="md:flex items-baseline pb-8 ">
        <div className="w-full md:w-1/3">
          <h2 className="font-medium sm:font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900">
            Experience
          </h2>
        </div>
        <div className="w-full md:w-2/3">
          <StaticQuery
            query={graphql`
              query ExperienceQuery {
                allExperienceJson {
                  edges {
                    node {
                      name
                      company
                      location
                      period
                      description
                    }
                  }
                }
              }
            `}
            render={data =>
              data.allExperienceJson.edges.map(item => (
                <ResumeItem
                  name={item.node.name}
                  company={item.node.company}
                  location={item.node.location}
                  period={item.node.period}
                  description={item.node.description}
                />
              ))
            }
          />
        </div>
      </div>
      <div className="md:flex items-baseline pb-8 ">
        <div className="w-full md:w-1/3">
          <h2 className="font-medium sm:font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900">
            Education
          </h2>
        </div>
        <div className="w-full md:w-2/3">
          <ResumeItem
            name="Coding Bootcamp"
            company="Makers Academy"
            location="London, UK"
            period="Nov 2016 - Feb 2017"
          />
          <ResumeItem
            name="MSc Quantitative Finance & Financial Engineering"
            company="Manchester Business School"
            location="UK"
            period="Sep 2009 - Sep 2010"
          />
          <ResumeItem
            name="BSc Mathematics with Finance"
            company="University of Manchester"
            location="UK"
            period="Sep 2006 - June 2009"
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default SecondPage;
