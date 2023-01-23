import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default function Head({ title }) {
  let pageTitle = `${title} - Farmácias São João`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Helmet>
  );
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
};
