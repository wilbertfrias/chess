import React from 'react';
import ReactDOM from 'react-dom';

import { observe } from './Game';

import Mydiv from './Mydiv';

import { ChessProvider } from './ChessContext';

const root = document.getElementById('root');

export function run()
{
    observe(knightPosition=>
    {
        ReactDOM.render(
            <ChessProvider value={{knightPosition: knightPosition}}>
            
                <Mydiv />
            
            </ChessProvider>
            ,root);
    });
}