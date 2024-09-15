import React from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Content } from "./Content"
export class Home extends React.Component {
    render() {

        return (
           <div className="container">
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
           </div>
        )
    }
}

