import { Injectable } from '@angular/core';

@Injectable()
export class MineSweeperBotService {

  constructor() { }

  public getMove(grid: Cell[][]): Cell {
    grid.forEach(row => row.forEach(cell => cell.mark = false))

    for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid[i].length; j++) {
        let cell = grid[i][j]
        if(cell.hidden == false && cell.score !== 0) {
          let neighbors = this.getNeighbors(cell, grid)
          let hiddenNeighbors = neighbors.filter(neighbor => neighbor.hidden)
          let markedNeighbors = neighbors.filter(neighbor => neighbor.mark)
          if(cell.score == hiddenNeighbors.length) {
            hiddenNeighbors.forEach((cell) => cell.mark = true)
          }
          else if(cell.score == markedNeighbors.length) {
            let safe = hiddenNeighbors.filter((neighbor) => !neighbor.mark)
            return this.choose(safe)
          }
        }
      }
    }

    let hiddenCells = grid.reduce((acc, val) => {
      return acc.concat(val.filter(cell => cell.hidden))
    }, [])
    return this.choose(hiddenCells)
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

  private choose(cells: Cell[]): Cell {
    return cells[Math.floor(Math.random() * cells.length)];
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