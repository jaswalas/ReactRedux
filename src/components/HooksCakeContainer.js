import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

const HookCakeContainer = ()=> {
    const cakesCount = useSelector( state=> state.numOfCakes);
    const dispatch = useDispatch();
return(
    <>
    <h2>Number of cakes - {cakesCount} </h2>
    <button onClick={()=>dispatch(buyCake())}>Buy Cakes</button>
    </>
)
}

export default HookCakeContainer;