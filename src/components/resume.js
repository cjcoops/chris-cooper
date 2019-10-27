import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ResumeItem from "../components/resume-item";

const Resume = () => (
  <StaticQuery
    query={graphql`
      {
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
        allEducationJson {
          edges {
            node {
              name
              company
              location
              period
            }
          }
        }
      }
    `}
    render={data => (
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
              {data.allExperienceJson.edges.map(item => (
                <ResumeItem
                  key={item.node.name}
                  name={item.node.name}
                  company={item.node.company}
                  location={item.node.location}
                  period={item.node.period}
                  description={item.node.description}
                />
              ))}
            </div>
          </div>
          <div className="md:flex items-baseline pb-8 ">
            <div className="w-full md:w-1/3">
              <h2 className="font-medium sm:font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900">
                Education
              </h2>
            </div>
            <div className="w-full md:w-2/3">
              {data.allEducationJson.edges.map(item => (
                <ResumeItem
                  key={item.node.name}
                  name={item.node.name}
                  company={item.node.company}
                  location={item.node.location}
                  period={item.node.period}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    )}
  />
);

export default Resume;
