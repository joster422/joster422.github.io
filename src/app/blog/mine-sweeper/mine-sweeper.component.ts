import { Component, OnInit } from '@angular/core'
import { MineSweeperService } from './mine-sweeper.service'

@Component({
  selector: 'jsite-mine-sweeper',
  providers: [MineSweeperService],
  templateUrl: './mine-sweeper.component.html',
  styleUrls: ['./mine-sweeper.component.scss']
})
export class MineSweeperComponent implements OnInit {
  constructor(private mineSweeperService: MineSweeperService) { }
  grid: Cell[][] = []
  rows: number = 10
  columns: number = 10
  mines: number = 20
  losingPhrases: string[] = [
    'You clicked on a mine',
    'RIP',
    'Mine activated',
    'BOOM'
  ]

  ngOnInit() {
    this.start()
  }

  check(cell: Cell) {
    if(!cell.hidden || cell.mark) {
      return
    }

    if(this.mineSweeperService.checkForMine(cell, this.grid)) {
      let losingPhrase = this.losingPhrases[Math.floor(Math.random() * this.losingPhrases.length)]
      alert(losingPhrase)
    }
  }

  mark($event: Event, cell: Cell) {
    $event.preventDefault()
    cell.mark = !cell.mark
  }

  start() {
    this.grid = this.mineSweeperService.start(this.rows, this.columns, this.mines)
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