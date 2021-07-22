import React, {Component} from "react"
import $ from "jquery";

class Portfolio extends Component {
    constructor(props) {
        console.log("1")
        super(props)
        this.state = { userData: {} }
    }

    componentDidMount() {
        console.log("2")
        $.get("https://api.github.com/users/themegatree", (data) => {
            this.setState({userData: data})
        })
    }

    render() {
        return(
            <div>
                <h1 id="user-name">{this.state.userData.login}</h1>
                <img src={this.state.userData.avatar_url} />
            </div>
        )
    }
}
export default Portfolio