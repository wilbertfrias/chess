import React from 'react';
import { ItemTypes } from './Constant';
import { DragSource } from 'react-dnd';

const knightSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

function Knight({ connectDragSource, isDragging }) {
console.log(connectDragSource);
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