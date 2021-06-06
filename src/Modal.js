import React from "react";

export default class Modal extends React.Component {
  closeModal = (e) => {
    if (e.target.dataset.closer) {
      this.props.closeHandler();
    }
  };

  render() {
    const { children } = this.props;

    return (
      <div className="modal" data-closer onClick={this.closeModal}>
        <div className="inner">
          <div className="close" data-closer onClick={this.closeModal}>
            X
          </div>
          {children}
        </div>
      </div>
    );
  }
}
