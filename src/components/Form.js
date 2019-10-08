import React, {useState} from "react"
import {useDispatch} from "react-redux";
import {postTextAction} from "../actions";


export const Form = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    return <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(postTextAction(text))
    }}>
        <input type={'text'}
               value={text}
               onChange={e => setText(e.target.value)}
        />
        <button type={"submit"}>Submit</button>
    </form>;
};