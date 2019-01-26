import {KnightPosition} from './KnightPosition';
import {KnightStorage} from './KnightStorage';

let knightPosition = [ new KnightPosition(1, 0, 0), new KnightPosition(2, 0, 1), new KnightPosition(3, 0, 2) ];
let actualKnight = -1;
let knightStorage = new KnightStorage(actualKnight, knightPosition);

let observer = null;

export function getActual()
{
  return knightStorage.actualKnight;
}

export function setActual(id)
{
  knightStorage.actualKnight = id;
}

export function getPosition(id)
{
  for(let i = 0; i < knightStorage.knightPosition.length; i++)
  {
    if( knightStorage.knightPosition[i].id === id )
    {
      return knightStorage.knightPosition[i];
    }
  }
  return null;
}

function setPosition(toX, toY)
{
  
  let id = getActual();
  let item = new KnightPosition(id, toX, toY);

  for(let i = 0; i < knightStorage.knightPosition.length; i++)
  {
    if(knightStorage.knightPosition[i].id === id)
    {
      knightStorage.knightPosition[i] = item;
      break;
    }
  }

}

function exists(id)
{
  for(let i = 0; i<knightStorage.knightPosition.length; i++)
  {
    if(knightStorage.knightPosition[i].id === id)
    return true;
  }
  return false;
}

export function getByPosition(x, y){
  for(let i = 0; i < knightStorage.knightPosition.length; i++)
  {
    let item = knightStorage.knightPosition[i];
    if(item.x === x && item.y === y)
    {
      return item.id;
    }
  }
  return -1;
}

export function canMoveKnight(toX, toY) {

  //const x = id % 8;
  //const y = Math.floor(id/ 8);
  const x = toX;
  const y = toY;

  let knightId = getActual();
  if(knightId===-1)
  {
    return false;
  }
  if(!exists(knightId))
  {
    return false;
  }
  console.log(knightId);

  let item = getPosition( knightId );
  if(item != null){

  console.log(item);
  const dx = x - item.x;
  const dy = y - item.y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);

  }
  return false;
}

export function emitChange() {
  observer(knightStorage);
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

export function moveKnight(toX, toY) {
  setPosition(toX, toY);
  emitChange();
}