import React from "react";
import loading from "../asset/tenor.gif";
import { connect } from "react-redux";
import styled from "styled-components";

function Loading({ loadings }) {
  if (loadings) {
    return (
      <StyledLoading>
        <img src={loading} alt="loading" />
      </StyledLoading>
    );
  } else {
    return <React.Fragment></React.Fragment>;
  }
}
const mapStateToProps = state => {
  return {
    loadings: state.loading.showLoading
  };
};

export default connect(mapStateToProps, null)(Loading);
const StyledLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  z-index: 9999;
  img {
    width: 70px;
    height: 70px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
