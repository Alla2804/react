import React from "react";

export class Post extends React.Component{
    constructor(props) {  // 1 it has painted
        super(props);
        this.state = {
            title: "",
            text: "",
            dare_added: "",
            author: ""
        }
    }
    componentDidMount() { // 3
        const formData = new FormData();
        formData.append("id",this.props.match.params.id);
        fetch("http://creatingws.beget.tech/php/getPost.php",{
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                this.setState({
                    title: result.title,
                    text: result.text,
                    dare_added: result.dare_added,
                    author: result.author
                })
            })
    }
    render() { // 2
        return <div>
            <h3 className="text-center">{this.state.title}</h3>
            <p>{this.state.text}</p>
            <p>Добавлено: {this.state.dare_added}</p>
            <p>Автор: {this.state.author}</p>
        </div>
    }
}

