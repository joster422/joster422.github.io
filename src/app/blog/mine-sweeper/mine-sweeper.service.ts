import { Injectable } from '@angular/core';

@Injectable()
export class MineSweeperService {
  constructor() { }

  checkedNeighbors: Cell[] = []

  public start(rows: number, columns: number, mines: number): Cell[][] {
    let grid = []


    for(let i = 0; i < rows; i++) {
      grid[i] = []
      for(let j = 0; j < columns; j++) {
        grid[i][j] = {
          x: i,
          y: j,
          score: 0,
          mine: false,
          hidden: true,
          mark: false
        }
      }
    }

    for(let i = 0; i < mines; i++) {
      let minePlaced = false
      while(!minePlaced) {
        let x = Math.floor(Math.random() * rows)
        let y = Math.floor(Math.random() * columns)

        if(!grid[x][y].mine && grid[x][y].hidden) {
          grid[x][y].mine = true
          let neighbors = this.getNeighbors(grid[x][y], grid)
          neighbors.forEach((neighbor) => neighbor.score++)
          minePlaced = true
        }
      }
    }

    let unhideFirstTile = false
    while(!unhideFirstTile) {
      let x = Math.floor(Math.random() * rows)
      let y = Math.floor(Math.random() * columns)

      if(!grid[x][y].mine) {
        this.checkForMine(grid[x][y], grid)
        unhideFirstTile = true
      }
    }

    return grid
  }

  public checkForMine(cell: Cell, grid: Cell[][]):boolean {
    if(cell.mine) {
      return true
    }

    cell.hidden = false

    if(cell.score == 0) {
      this.checkedNeighbors = []
      this.unhideNeighbors(cell, grid)
    }

    return false
  }

  private unhideNeighbors(cell: Cell, grid: Cell[][]): void {
    if(this.checkedNeighbors.indexOf(cell) > -1) { return;}
    this.checkedNeighbors.push(cell)
    let neighbors = this.getNeighbors(cell, grid)
    neighbors.forEach((neighbor) => {
      neighbor.hidden = false
      if(neighbor.score == 0) {
        this.unhideNeighbors(neighbor, grid)
      }
    })
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

interface Cell {
  x: number,
  y: number,
  score: number,
  mine: boolean,
  hidden: boolean,
  mark: boolean
}