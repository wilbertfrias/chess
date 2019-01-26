import React from 'react';
import { ItemTypes } from './Constant';
import { DragSource } from 'react-dnd';

import {setActual} from './Game';

const knightSource = {
  beginDrag(props) {
    let id=props.id;
    setActual(id);
    return {
      id: id
    };
  }
};

function collect(connect, monitor) {
  
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
    };
}

function Knight({ connectDragSource, isDragging }) {

    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 72,
        fontWeight: 'bold',
        cursor: 'move',
      }}
      >
        ♘
      </div>,
    );
  
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);