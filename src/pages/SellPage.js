import React, { Component } from 'react'
import DarkHeader from "../containers/global_components/Header/DarkHeader";
import SellPageWallpaper from "../containers/SellPageWallpaper/SellPageWallpaper";
export class SellPage extends Component {
    render() {
        return (
            <>
                <DarkHeader />
                <SellPageWallpaper />
            </>
        )
    }
}

export default SellPage
