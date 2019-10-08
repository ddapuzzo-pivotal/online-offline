import React from 'react';

import {Monitor, Form} from "./components/Form";
import {OfflineBanner} from "./components/OfflineBanner";

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
