import React, { Component } from 'react'
import Checkbox from './Checkbox'

class Steptwo extends Component {
    state = {
        eletricity: false
    }
    handleChange = input => evt => {
        if (evt.target.type === 'checkbox') {
            // console.log(evt.target.checked)
            this.setState({ input: evt.target.checked });

        }
        else {
            this.setState({ input: evt.target.value });
            console.log(this.state.eletricity)
        }

    }
    render() {
        return (
            <div className="row justify-content-center">
                <div className="house-details-container row">
                    <h5>Is any of the following included in your price?</h5>
                    <Checkbox handleChange={this.props.handleChange} stateName="dritat" labelName="Electricity" />
                    <Checkbox handleChange={this.props.handleChange} stateName="uji" labelName="Water" />
                    <Checkbox handleChange={this.props.handleChange} stateName="internet" labelName="Internet" />

                    <h5>Number of rooms</h5>
                    <div className="form-group">
                        <label htmlFor="bedrooms">Bedrooms</label>
                        <input type="number" min="0" className="form-control" id="bedrooms" onChange={this.props.handleChange('nr_dhomash')} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bathrooms">Bathrooms</label>
                        <input type="number" min="0" className="form-control" id="bathrooms" onChange={this.props.handleChange('nr_banjosh')} />
                    </div>
                    <div className="form-group block-element no-of-people">
                        <h5>How many people do you want to live in this house?</h5>
                        <input type="number" min="0" className="form-control" onChange={this.props.handleChange('nr_personash')} />
                    </div>

                    <h5>Extra Features</h5>
                    <Checkbox handleChange={this.props.handleChange} stateName="parkim" labelName="Parking" />
                    <Checkbox handleChange={this.props.handleChange} stateName="ashensor" labelName="Elevator" />
                    <Checkbox handleChange={this.props.handleChange} stateName="wifi" labelName="Wi-fi" />
                    <Checkbox handleChange={this.props.handleChange} stateName="kondicioner" labelName="Air-conditioning" />
                    <Checkbox handleChange={this.props.handleChange} stateName="kafshe" labelName="Pets allowed" />
                    <Checkbox handleChange={this.props.handleChange} stateName="ballkon" labelName="Balcony" />
                    <Checkbox handleChange={this.props.handleChange} stateName="kopsht" labelName="Garden" />
                    <Checkbox handleChange={this.props.handleChange} stateName="sendeGatimi" labelName="Kitchenware" />
                    <Checkbox handleChange={this.props.handleChange} stateName="televizor" labelName="TV" />

                    <div className="form-group block-element text-area">
                        <h5><label className="block-element" htmlFor="exampleFormControlTextarea1">Description</label></h5>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" onChange={this.props.handleChange('description')}></textarea>
                    </div>
                </div>
            </div>
        )
    }
}

export default Steptwo