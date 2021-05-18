
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import StreamCreate from './steams/StreamCreate'
import StreamEdit from './steams/StreamEdit'
import StreamDelete from './steams/StreamDelete'
import StreamList from './steams/StreamList'
import StreamShow from './steams/StreamShow'
import Header from './steams/Header'


// 877689361230-9k9t7v93ri9kals726sfqvqbgfdao3u6.apps.googleusercontent.com

const App = () => {

    return (
        <div className=" ui container">
            
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit" exact component={StreamEdit} />
                    <Route path="/streams/delete" exact component={StreamDelete} />
                    <Route path="/streams/show" exact component={StreamShow} />
                </div>
            </BrowserRouter>
            
        </div>
    )
}

export default App 