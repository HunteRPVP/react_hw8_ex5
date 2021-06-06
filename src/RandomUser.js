import React from "react";

export default class RandomUser extends React.Component {
  state = {
    randomUserData: null,
  };

  fetchRandomUser = (_) => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((randomUserData) => this.setState({ randomUserData }));
  };

  componentDidMount() {
    this.fetchRandomUser();
  }

  render() {
    if (!this.state.randomUserData) return null;

    const { picture } = this.state.randomUserData.results[0];

    return <img src={picture.large} alt="" />;
  }
}
