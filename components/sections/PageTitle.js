import Link from "next/link";
import React from "react";

const PageTitle = (props) => {
  return (
    <section
      className="page-title"
      style={{ backgroundImage: "url(/images/background/page-title-bg.png)" }}
    >
      <div className="auto-container">
        <div className="title-outer text-center">
          <h1 className="title">{props.pageName}</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            {props.serviceName && (
              <li>
                <Link href="/services">Our Services</Link>
              </li>
            )}
            {props.portfolioName && (
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
            )}

            <li>{props.pageName}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
