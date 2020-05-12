import React, { Component } from 'react'
import DarkHeader from "../containers/global_components/Header/DarkHeader";
import SellPageWallpaper from "../containers/SellPageWallpaper/SellPageWallpaper";
import "../containers/SellPageComponents/sellpage.css"
export class SellPage extends Component {
    state = {
        address: '',
        surface: '',
        noOfRooms: '',
        typeOfProperty: '',
        floorOfProperty: '',
        price: ''
    }
    onAddressChange(e) {
        this.setState({ address: e.target.value });
    }
    onSurfaceChange(e) {
        this.setState({ surface: e.target.value });
    }
    onNoOfRoomsChange(e) {
        this.setState({ noOfRooms: e.target.value });
    }
    onTypeOfPropertyChange(e) {
        this.setState({ typeOfProperty: e.target.value });
    }
    onFloorOfPropertyChange(e) {
        this.setState({ floorOfProperty: e.target.value });
    }
    onPriceChange(e) {
        this.setState({ price: e.target.value });
    }
    render() {
        return (
            <>
                <DarkHeader />
                <SellPageWallpaper />
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="text">Add your house now!</div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="steps-container row">
                            <div className="step1 col-2">
                                <div className="dot1">1</div>
                            </div>
                            <div className="first-dot-tittle">Peronal information</div>
                            <div className="line"></div>
                            <div className="space col-8"></div>
                            <div className="step2 col-2">
                                <div className="dot2">2</div>
                            </div>
                            <div className="nd-dot-tittle">Upload Pictures</div>
                        </div>
                    </div>
                    <form className="sell-form">
                        <div className="row justify-content-center">
                            <div className="left-fields">
                                <div className="form-group">
                                    <label htmlFor="addres">Address</label>
                                    <input type="text" className="form-control" id="addres" onChange={this.onAddressChange} /></div>
                                <div className="form-group">
                                    <label htmlFor="surface">Surface(m<small><sup>2</sup></small>)</label>
                                    <input type="text" className="form-control" id="surface" />onChange={this.onSurfaceChange}</div>
                                <div className="form-group">
                                    <label htmlFor="no-of-rooms">Number of rooms</label>
                                    <input type="text" className="form-control" id="no-of-rooms" onChange={this.onNoOfRoomsChange} /></div>
                            </div>
                            <div className="right-fields">
                                <div className="form-group">
                                    <label htmlFor="typeofproperty">Type of property</label>
                                    <input type="text" className="form-control" id="typeofproperty" onChange={this.onTypeOfPropertyChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="surface">Floor of property</label>
                                    <input type="text" className="form-control" id="surface" onChange={this.onFloorOfPropertyChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="no-of-rooms">Price(per month)</label>
                                    <input type="text" className="form-control" id="no-of-rooms" onChange={this.onNOOfRoomsChange()} /></div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="btn">Next</div>
                        </div>
                    </form>

                </div>
            </>
        )
    }
}

export default SellPage
