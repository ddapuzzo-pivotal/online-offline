import React from 'react';

import {Form} from "./components/Form";
import {OfflineBanner} from "./components/OfflineBanner";
import {Monitor} from "./components/Monitor";

function App() {
    return (
        <div className="App">
            <OfflineBanner/>
            <Form/>
            <Monitor/>
        </div>
    );
}

export default App;
