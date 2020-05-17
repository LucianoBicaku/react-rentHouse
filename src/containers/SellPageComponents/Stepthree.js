import React, { Component } from 'react'
import axios from 'axios'

export class Stepthree extends Component {
    state = {
        selectedFile: null,
        previewSrc: []
    }
    func = (e) => {
        e.preventDefault();
        console.log(e.persist);
        this.setState({ selectedFile: e.target.files[0] })
        console.log(this.state.selectedFile);


    }
    handlePreview = (e) => {
        e.preventDefault();

        let file = e.target.files[0];
        let reader = new FileReader();

        if (e.target.files.length === 0) {
            return;
        }
        reader.onloadend = (e) => {
            this.setState({
                previewSrc: [...this.state.previewSrc, [reader.result]]
            });
        }
        reader.readAsDataURL(file);
    }
    clearPreview = index => evt => {
        console.log("works");
        var imgs = document.querySelector('.upload-pictures-container').getElementsByTagName('img');
        console.log(imgs);
        if (imgs[index].src !== undefined) {
            console.log(imgs[index])
            imgs[index].src = '';
            console.log("works");
            var array = [...this.state.previewSrc]; // make a separate copy of the array
            if (index !== -1) {
                array.splice(index, 1);
                this.setState({ previewSrc: array });
                console.log(this.state.previewSrc);
            }
        }

    }
    // fileSelectedHandler = (e) => {
    //     this.setState({ selectedFile: e.target.files[0] })
    // }
    // fileUploadHandler = () => {
    //     const fd = new FormData();
    //     fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    //     axios.post('', fd)
    //         .then(res => {
    //             console.log(res)
    //         })
    // }
    render() {
        console.log(this.state.previewSrc);
        return (
            <div className="row upload-pictures-container" >
                <div className="st-col">
                    <label className="text-md">*Please include at least one photo for every room</label>
                    <label for="img" className="custom-file-upload ">&#43;</label>
                    <input className="block-element" type="file" id="img" name="img" accept="image/*" onChange={this.handlePreview} />
                </div>
                <div className="sc-col">
                    <div className="preview-text">Preview</div>
                    <div className="box">
                        {this.state.previewSrc[0] ? <div className="clear-photo" onClick={this.clearPreview(0)}>x</div> : null}
                        <img src={this.state.previewSrc[0]} alt="" /></div>
                    <div className="box">
                        {this.state.previewSrc[1] ? <div className="clear-photo" onClick={this.clearPreview(1)}>x</div> : null}
                        <img src={this.state.previewSrc[1]} alt="" /></div>
                    <div className="box">
                        {this.state.previewSrc[2] ? <div className="clear-photo" onClick={this.clearPreview(2)}>x</div> : null}
                        <img src={this.state.previewSrc[2]} alt="" /></div>
                </div>
                <div className="rd-col">
                    <div className="box">
                        {this.state.previewSrc[3] ? <div className="clear-photo" onClick={this.clearPreview(3)}>x</div> : null}
                        <img src={this.state.previewSrc[3]} alt="" /></div>
                    <div className="box">
                        {this.state.previewSrc[4] ? <div className="clear-photo" onClick={this.clearPreview(4)}>x</div> : null}
                        <img src={this.state.previewSrc[4]} alt="" /></div>
                    <div className="box">
                        {this.state.previewSrc[5] ? <div className="clear-photo" onClick={this.clearPreview(5)}>x</div> : null}
                        <img src={this.state.previewSrc[5]} alt="" /></div>
                </div>
            </div>
        )
    }
}

export default Stepthree
