import React, { Component } from "react";
import { Modal } from "reactstrap";
import img from "../../img/location.png";
import Mapp from "./Map";

export default class Stepone extends Component {
  state = {
    modal: false,
  };

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  showModal = () => {
    this.setState({ modal: !this.state.modal });
    console.log("work!");
  };
  render() {
    return (
      <div className="sell-form">
        <div className="row justify-content-center">
          <div className="left-fields">
            <div className="form-group address">
              <label htmlFor="addres">Address</label>
              <input
                type="text"
                className="form-control"
                id="addres"
                onChange={this.props.handleChange("address")}
              />
              <img
                src={img}
                alt=""
                className="location-place-holder"
                onClick={this.showModal}
              />
              <div className="map-container">
                <Modal
                  isOpen={this.state.modal}
                  size={"lg"}
                  toggle={this.toggle.bind(this)}
                  style={{ width: "70vw" }}
                >
                  <Mapp
                    zoom={14}
                    center={{ lat: 41.33248247576301, lng: 19.813755914873443 }}
                  />
                </Modal>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="surface">
                Surface(m
                <small>
                  <sup>2</sup>
                </small>
                )
              </label>
              <input
                type="text"
                className="form-control"
                id="surface"
                onChange={this.props.handleChange("sip")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="no-of-rooms">Number of rooms</label>
              <input
                type="text"
                className="form-control"
                id="no-of-rooms"
                onChange={this.props.handleChange("nr_dhomash")}
              />
            </div>
          </div>
          <div className="right-fields">
            <div className="form-group">
              <label htmlFor="typeofproperty">Type of property</label>
              <input
                type="text"
                className="form-control"
                id="typeofproperty"
                onChange={this.props.handleChange("lloji")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="surface">Floor of property</label>
              <input
                type="text"
                className="form-control"
                id="surface"
                onChange={this.props.handleChange("kati")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cmimi">Price(per month)</label>
              <input
                type="text"
                className="form-control"
                id="cmimi"
                onChange={this.props.handleChange("cmimi")}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
