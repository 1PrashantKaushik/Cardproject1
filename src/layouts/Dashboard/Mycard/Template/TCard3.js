import React from "react";
import { Button } from "react-bootstrap";

class TCard3 extends React.Component {
  state = {
    buttonhover: "0"
  };

  opacitychange = () => {
    if (this.state.buttonhover === "0") this.setState({ buttonhover: "1" });
    else this.setState({ buttonhover: "0" });
  };

  render() {
    // console.log("Props Coming is:", this.props);
    let { User, editModal, index } = this.props;
    return (
      <div
        style={{
          border: "1px solid black",
          width: "425px",
          height: "238px"
        }}
        onMouseOver={this.opacitychange}
        onMouseOut={this.opacitychange}
      >
        <div
          style={{
            border: "1px solid black",
            height: "15%"
          }}
        >
          <img
            src="https://png.icons8.com/carbon-copy/24/1D1C1C/iphone.png"
            style={{ marginBottom: "5px", display: "inline-block" }}
          />
          <p style={{ display: "inline-block" }}>{User.phone}</p>
          <p style={{ float: "right", display: "inline-block" }}>{User.name}</p>
        </div>
        <div style={{ border: "1px solid black", height: "42%" }}>
          <img
            src="https://png.icons8.com/ios/30/1D1C1C/address.png"
            style={{ margin: "4%" }}
          />
          <p>{User.address}</p>
        </div>
        <div
          style={{
            border: "1px solid black",
            height: "19%"
          }}
        >
          <p style={{ display: "inline-block" }}>
            <img src="https://png.icons8.com/ios/30/1D1C1C/new-post.png" />
            &nbsp;&nbsp;
            {User.email}
          </p>
          <p>
            <img
              src="https://png.icons8.com/plasticine/50/1D1C1C/domain.png"
              style={{}}
            />
            {User.website}
          </p>
        </div>
        <div style={{ opacity: `${this.state.buttonhover}` }}>
          <Button
            bsSize="medium"
            style={{
              float: "right",
              display: "inline-block",
              marginTop: "0.5em"
            }}
            onClick={() => {
              this.props.editModal(this.props.index);
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    );
  }
}

export default TCard3;
