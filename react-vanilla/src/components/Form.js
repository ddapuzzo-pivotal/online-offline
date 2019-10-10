import React, {useState} from "react"
import {offlineRequest} from "../offline";

const createSubmissionAction = ({text, setStatus, onSuccess}) => () => fetch("https://online-offline-backend.apps.pcfone.io/reverse-me", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({text})
})
    .then(() => setStatus("Successfully Saved: " + text))
    .then(onSuccess)
    .catch(console.log);

const getReversedValue = (setStatus) => () => fetch("https://online-offline-backend.apps.pcfone.io/reverse-me")
    .then(it => it.text().then(setStatus))
    .catch(console.log);


export const Form = () => {
    const [text, setText] = useState("");
    const [status, setStatus] = useState("");

    return <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            const onSuccess = getReversedValue(setStatus);
            offlineRequest(createSubmissionAction({text, setStatus, onSuccess}), setStatus)
        }}>
            <input type={'text'}
                   value={text}
                   onChange={e => setText(e.target.value)}
            />
            <button type={"submit"}>Submit</button>
        </form>
        <p id={'monitor'}>
            {status}
        </p>
    </div>;
};