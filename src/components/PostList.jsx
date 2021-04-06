import React from "react";
import {Link} from "react-router-dom";

function Tr(props){
    return <tr>
        <th scope="row">{props.index} [{props.id}]</th>
        <td><Link to={"/post/"+props.id}>{props.title}</Link></td>
        <td>{props.author}</td>
        <td>{props.dare_added}</td>
        <td><span className='delete-post-btn' onClick={()=>{
            const formData = new FormData();
            formData.append('id',props.id);
            //backend file
            fetch('http://creatingws.beget.tech/php/removePost.php',{
                method: "POST",
                body: formData
            }).then(response=>response.json())
                .then(result=>{
                    let posts = props.parent.state.posts;
                    posts.splice(props.index-1, 1);
                    props.parent.setState({
                        posts:posts
                    })
                })
        }
        }>[Удалить эту статью]</span></td>
    </tr>
}

export class PostList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        console.log("Компонет PostList отрисован");
        fetch("http://creatingws.beget.tech/php/getPosts.php")
            .then(response=>response.json())
            .then(result=>{
                console.log(result);
                let rows = [];
                for (let i = 0; i < result.length; i++) {
                    rows.push(<Tr
                        key={i}
                        index={i+1}
                        id={result[i].id}
                        title={result[i].title}
                        author={result[i].author}
                        dare_added={result[i].dare_added}
                        parent={this}
                    />)
                }
                this.setState({
                    posts: rows
                })
            })
    }

    render() {
        console.log("Компонет PostList рисуется");
        return <table className="table">
            <thead>
            <tr>
                <th scope="col">№ п/п</th>
                <th scope="col">Заголовок статьи</th>
                <th scope="col">Автор</th>
                <th scope="col">Дата добавления</th>
                <th scope="col">Управление</th>
            </tr>
            </thead>
            <tbody>
                {this.state.posts}
            </tbody>
        </table>
    }
}