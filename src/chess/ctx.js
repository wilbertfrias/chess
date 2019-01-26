import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

export default function MyDragControlContext(DecoratedClass)
{
    return DragDropContext(HTML5Backend)(DecoratedClass);
}