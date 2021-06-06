import React from "react";
import Modal from "./Modal";
import RandomUser from "./RandomUser";

export default class App extends React.Component {

  state = {
    modalVisible: false,
  };

  showModal = (_) => this.setState((_) => ({ modalVisible: true }));
  hideModal = (_) => this.setState((_) => ({ modalVisible: false }));

  render() {
    const { modalVisible } = this.state;

    return (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <button onClick={this.showModal}>Show modal</button>

        {modalVisible && (
          <Modal closeHandler={this.hideModal}>
            <RandomUser />
          </Modal>
        )}
      </div>
    );
  }
}
