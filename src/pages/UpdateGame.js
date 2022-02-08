import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const UpdateGame = () => {
    const [gamename, setGamename] = useState("")

    const [playername, setPlayername] = useState("")
    
    const dispatch = useDispatch()
    return <div>
        <input type={"text"} onChange={e => setGamename(e.target.value)} />
        <button onClick={() => dispatch({type:'UPDATE_GAME',payload: gamename })}>Update Game</button><br/>
        <input type={"text"} onChange={e => setPlayername(e.target.value)} />
        <button onClick={() => dispatch({type:'UPDATE_PLAYER',payload:playername })}>Update player</button>
    </div>;
};

export default UpdateGame;

