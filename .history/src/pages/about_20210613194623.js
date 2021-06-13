import React from "react";
import { useStaticQuery, graphql} from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import SEO from "../components/seo";
import LayoutWhite from "../components/LayoutWriting";

export default function AboutPage({ data }) {
  const cvPdf = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "cv" }) {
        name
        extension
        publicURL
      }
      GetImage: file(relativePath: { eq: "metaInfo/about.jpg" }) {
        childImageSharp {
          fluid(quality: 100, webpQuality: 100, maxWidth: 650) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <LayoutWhite>
      <SEO title="About" description="nisch about" classProp="bg-white text-red"/>
      <section className="mx-2/25 flex-1 md:m-px50">
        <div className="hyphens-auto md:max-w-px550 lg:overflow-visible">
          <h1 className="mt-px20 mb-px30 text-4p5r text-orange tracking-npx6 leading-1em text-black font-helvetica font-thin md:text-5p75r">
            About
          </h1>
          <div className="my-px20 lg:w-px650">
            <Img fluid={data.file.childImageSharp.fluid} alt="about"></Img>
          </div>
          <p className="my-px20">
            I&apos;m a joint PhD student and I split my time between Philosophy at the 
            {" "}
            <a
              href="https://philosophy.cass.anu.edu.au/"
              className=" border-b border-orange hover:border-red"
            >
              Australian National University
            </a>{" "}
            and Computational Neuroscience at the{" "}  
            {" "}
            <a
              href="https://elsc.huji.ac.il/"
              className=" border-b border-orange hover:border-red"
            >
              Hebrew University of Jerusalem
            </a>{" "}.
            I am interested in understanding mechanisms of biological and artificial intelligence and philosophy of 
            objects such as computation and representation that we might use to that end. I am also interested in 
            normative issues surrounding technology in society and have a Masters in Applied Cybernetics from the{" "} 
            {" "}
            <a
              href="https://3ainstitute.org/"
              className=" border-b border-orange hover:border-red"
            >
              3AI institute
            </a>{" "} 
            at the Australian National University, where we took a system perspective of position and implications
            of technology. All of this started with an undergraduate degree in Mathematics from 
            {" "}
            <a
              href="https://nyuad.nyu.edu/en/"
              className=" border-b border-orange hover:border-red"
            >
              New York University Abu Dhabi
            </a>{" "}.
            For more details, here is my {" "}
            <a
              href={cvPdf.pdf.publicURL}
              className=" border-b border-orange hover:border-red"
            >
              CV
            </a>.
          </p>
        </div>
      </section>
    </LayoutWhite>
  );
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};
// export const query = graphql`
//   query GetImage {
//     file(relativePath: { eq: "metaInfo/about.jpg" }) {
//       childImageSharp {
//         fluid(quality: 100, webpQuality: 100, maxWidth: 650) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// `;
