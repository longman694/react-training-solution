import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagenum: 1
    };
    this.onPageChange = this.onPageChange.bind(this);
    this.onPageChange(1);
  }
  onPageChange(page) {
    let pagenum;
    const pageCount = Math.ceil(this.props.items.length / 5.0);
    pagenum = parseInt(page);
    if (!Number.isInteger(pagenum)) {
      pagenum = 1;
    } else if (pagenum < 1) {
      pagenum = 1;
    } else if (pagenum > pageCount) {
      pagenum = pageCount;
    }
    // console.log(`page: ${pagenum} index: ${(pagenum - 1) * 5} - ${pagenum * 5}`);
    // console.log(pageItems);
    this.setState({ pagenum });
    this.props.onPageChange(pagenum);
  }
  render() {
    const pageCount = Math.ceil(this.props.items.length / 5.0);
    return (
      <div className="row mt-3 mb-3">
        <div className="col-12 card">
          <div className="form-group row pt-3 d-flex justify-content-end mr-3">
            <div className="col-3 d-flex justify-content-end">
              <label className="mt-2 mr-2">Page: </label>
              <input
                className="form-control text-right"
                type="number"
                value={this.state.pagenum}
                min="1"
                max={pageCount}
                onChange={e => {
                  this.onPageChange(e.target.value);
                }}
              />
            </div>
            <div className="mt-2"> / {pageCount}</div>
          </div>
        </div>
      </div>
    );
  }
}

Pagination.propTypes = {
  items: PropTypes.array.isRequired,
  onPageChange: PropTypes.func
};
