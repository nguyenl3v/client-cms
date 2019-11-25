import React from "react";
import loading from "../asset/tenor.gif";
import { connect } from "react-redux";

function Loading({loadings}) {
  if (loadings) {
    return (
      <div className="loading">
        <img src={loading} alt="loading" />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loadings: state.loading.showLoading
  };
};

export default connect(
  mapStateToProps,
  null
)(Loading);
