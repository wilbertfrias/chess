import React from 'react';
import ReactDOM from 'react-dom';

import { observe } from './Game';

import Mydiv from './Mydiv';

import { ChessProvider } from './ChessContext';

const root = document.getElementById('root');

export function run()
{
    
    observe(knightStorage=>
    {
        ReactDOM.render(
            <ChessProvider value={{ knightStorage:knightStorage }}>
            
                <Mydiv />
            
            </ChessProvider>
            ,root);
    });
}