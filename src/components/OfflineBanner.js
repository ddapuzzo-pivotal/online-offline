import {Offline} from "react-detect-offline";
import React from 'react';

export const OfflineBanner = () =>
    <Offline>
        <div id={'offline-banner'}>
            You are offline
        </div>
    </Offline>