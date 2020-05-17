import React, { Component } from 'react'
import DarkHeader from "../containers/global_components/Header/DarkHeader";
import SellPageWallpaper from "../containers/SellPageWallpaper/SellPageWallpaper";
import "../containers/SellPageComponents/sellpage.css";
import Stepone from "../containers/SellPageComponents/Stepone"
import Steptwo from "../containers/SellPageComponents/Steptwo"
import Stepthree from "../containers/SellPageComponents/Stepthree"
export class SellPage extends Component {
    state = {
        address: '',
        sip: '',
        lloji: '',
        kati: '',
        cmimi: '',
        uji: false,
        dritat: false,
        internet: false,
        nr_dhomash: null,
        nr_banjosh: null,
        nr_personash: null,
        parkim: false,
        ashensor: false,
        wifi: false,
        kondicioner: false,
        kafshe: false,
        ballkon: false,
        kopsht: false,
        sendeGatimi: false,
        televizor: false,
        description: '',
        step: 1
    }
    handleChange = input => evt => {
        if (evt.target.type === 'checkbox') {
            this.setState({ [input]: evt.target.checked });
            console.log(input);
            // console.log(this.state.wifi);
            // console.log(this.state.kopsht);
            // console.log(this.state.parkim);
            // console.log(this.state.televizor);
        }
        else {
            this.setState({ [input]: evt.target.value });
            console.log(input);
            console.log(this.state.description);
        }

    }
    nextStep = () => {
        const { step } = this.state;
        if (step !== 3) {
            this.setState({ step: step + 1 })
        }
    }
    nextStep = () => {
        const { step } = this.state;
        if (step !== 1) {
            this.setState({ step: step - 1 })
        }
    }
    render() {
        return (
            <>
                <DarkHeader />
                <SellPageWallpaper />
                <div className="row justify-content-center">
                    <div className="text">Add your house now!</div>
                </div>
                <div className="row justify-content-center">
                    <div className="steps-container row justify-content-center">
                        <div className="step1">
                            <div className="dot1">1</div>
                        </div>
                        <div className="first-dot-tittle">House Information</div>
                        <div className="blue-line gray-line"></div>
                        {this.state.step === 1 ? <div className="blue-line blue-line-1" /> : this.state.step === 2 ? <div className="blue-line blue-line-2" /> : this.state.step === 3 ? <div className=" blue-line blue-line-3" /> : null}
                        <div className="space col-4"></div>
                        <div className="step2">
                            <div className="dot2">2</div>
                        </div>
                        <div className="space col-4"></div>
                        <div className="nd-dot-tittle">House Details</div>
                        <div className="step3">
                            <div className="dot3">3</div>
                        </div>
                        <div className="rd-dot-tittle">third text</div>
                    </div>
                </div>
                {/* {this.state.step === 1 ? <Stepone handleChange={this.handleChange} /> :
                    this.state.step === 2 ?
                        <Steptwo handleChange={this.handleChange} /> : null
                } */}
                <Stepthree />
                <div className="row justify-content-center">
                    {this.state.step !== 1 ? <button className="btn" onClick={this.prevStep}>Back</button> : null}
                    <button className="btn" onClick={this.nextStep}>{this.state.step === 3 ? 'Finish' : 'Next'}</button>
                </div>
            </>
        )
    }
}

export default SellPage
