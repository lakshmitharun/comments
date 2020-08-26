import React from "react";
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Comments from "./Comments";
import Approval from "./Approval";


const App = () => {
    let peoples = [{author: 'John', time: 'Today at 6:00 PM', comment: 'good post'}, {
        author: 'Sam',
        time: 'Today at 7:00 PM',
        comment: 'good post 1'
    }, {author: 'Kumar', time: 'Today at 8:00 PM', comment: 'good post 3'}];

    return (
        <div className="ui container comments">
            {
                peoples.map((people,index) => (
                    <Approval key={index}><Comments author={people.author} time={people.time} comment={people.comment}/></Approval>
                ))
            }
        </div>

    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));

