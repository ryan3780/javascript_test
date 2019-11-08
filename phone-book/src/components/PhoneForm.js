import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    phone: ""
  };

  handleChange = e => {
    let nameLength = e.target.value.length;
    console.log(nameLength);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let nameLength = e.target.name.value.length;
    if (nameLength < 2) {
      return this.setState({
        name: "2글자 이상",
        phone: "형식에 맞게"
      });
    }
    this.props.onCreate(this.state);
    // console.log(this.props.onCreate);
    this.setState({
      name: "",
      phone: ""
    });
  };

  render() {
    // console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
          required
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
          required
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;
