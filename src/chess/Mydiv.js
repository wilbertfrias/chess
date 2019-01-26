import React from 'react';

import MyDragControlContext from './ctx';
import Board from './Board'

import {ChessConsumer} from './ChessContext';

class Mydiv extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state={};
    }

    render(){
        
        return (
            
            <ChessConsumer>
                { ({ knightStorage }) => (
                    Board(knightStorage)
                ) }
            </ChessConsumer>
        );
    }

}

export default MyDragControlContext(Mydiv);