import React from "react";
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import Comments from "./Comments";


const App = () => {
    return (
        <div className="ui container comments">
            <Comments/>
            <Comments/>
            <Comments/>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));

