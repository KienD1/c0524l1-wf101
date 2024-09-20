import React from "react"
export class Content extends React.Component {
    constructor() {
        super() // Khởi tạo các thành phần từ lớp cha
        this.state = { // là 1 đôi tượng đặc biệt cho phép tạo và quản lý dữ liệu trong nội bộ component
            count: 1,
            name: "kien"
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        }) // Cập nhật dữ liệu thông qua hàm setState
    }

    change = () => {
        this.setState({
            name: "kien Hoai"
        })
    }

    render() {
        return (
            <div>
                <hr></hr>
                <h1>{this.state.count}</h1>
                <h2>{this.state.name}</h2>
                <button onClick={this.increment}>Tang</button>
                <button onClick={this.change}>Doi ten</button>

            </div>
        )
    }
}

