import React from 'react';
import { useSelector } from 'react-redux';
// import cartreducer from '../reducer/cartreducer';

const DisplayGame = () => {
    const game = useSelector(store => store.gameValue)
    // const player=useSelector(store=>store.player_nme)
    return (

        <>
            <h1>Name Of The Game : {game.game_name}</h1>
            <h2>Name of the player: {game.player_name}</h2>
        </>);
};

export default DisplayGame;
