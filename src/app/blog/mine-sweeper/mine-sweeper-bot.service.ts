import { Injectable } from '@angular/core';

@Injectable()
export class MineSweeperBotService {

  constructor() { }

  public getMove(grid: Cell[][]) {
    for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid[i].length; j++) {
        let cell = grid[i][j]
        if(!cell.hidden) {
          let neighbors = this.getNeighbors(cell, grid)
          let searchSpace = neighbors.filter(neighbor => neighbor.hidden)
        }
      }
    }
  }

  private getNeighbors(cell: Cell, grid: Cell[][]): Cell[] {
    let ret = []
    for(let i = -1; i <= 1; i++) {
      for(let j = -1; j <= 1; j++) {
        (i != 0 || j != 0) && grid[cell.x+i] !== undefined && grid[cell.x+i][cell.y+j] !== undefined && ret.push(grid[cell.x+i][cell.y+j])
      }
    }
    return ret
  }
}

interface Coord {
  x: number,
  y: number
}

interface Cell {
  x: number,
  y: number,
  score: number,
  mine: boolean,
  hidden: boolean,
  mark: boolean
}