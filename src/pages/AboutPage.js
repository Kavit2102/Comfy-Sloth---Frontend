import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            In the heart of the digital marketplace, Comfy Sloth unveils its
            transformative E-commerce Furniture Web Application, inviting users
            into a realm where comfort meets style in perfect harmony.
            Navigating through this virtual haven is a sensory adventure, with a
            curated collection of cozy sofas and chic decor waiting to captivate
            every visitor. The platform goes beyond conventional shopping,
            introducing innovative features such as Virtual Room Design, where
            users like Emma can seamlessly visualize their dream spaces. The
            Comfy Sloth Experience unfolds through engaging content, revealing
            the craftsmanship and sustainable practices behind each piece. As
            users explore, a personalized journey awaits, guided by an intuitive
            algorithm that understands individual preferences. Serenity Spaces
            is not just a marketplace; it's a community where comfort seekers
            unite, sharing experiences and inspirations.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
