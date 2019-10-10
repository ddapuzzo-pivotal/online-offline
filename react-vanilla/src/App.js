import React from 'react';

import {Form} from "./components/Form";
import {OfflineBanner} from "./components/OfflineBanner";

function App() {
    return (
        <div className="App">
            <OfflineBanner/>
            <Form/>
        </div>
    );
}

export default App;
