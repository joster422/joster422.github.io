import { Component, OnInit } from '@angular/core'
import { MineSweeperService } from './mine-sweeper.service'
import { MineSweeperBotService } from './mine-sweeper-bot.service'

@Component({
  selector: 'jsite-mine-sweeper',
  providers: [MineSweeperService, MineSweeperBotService],
  templateUrl: './mine-sweeper.component.html',
  styleUrls: ['./mine-sweeper.component.scss']
})
export class MineSweeperComponent implements OnInit {
  constructor(private mineSweeperService: MineSweeperService, private mineSweeperBotService: MineSweeperBotService) { }
  grid: Cell[][] = []
  rows: number = 10
  columns: number = 10
  mines: number = 20
  botStatus: boolean = false
  botInterval: any
  losingPhrases: string[] = [
    'You clicked on a mine',
    'RIP',
    'Mine activated',
    'BOOM'
  ]

  ngOnInit() {
    this.startGame()
  }

  check(cell: Cell) {
    if(!cell.hidden || cell.mark) {
      return
    }

    if(this.mineSweeperService.checkForMine(cell, this.grid)) {
      let losingPhrase = this.losingPhrases[Math.floor(Math.random() * this.losingPhrases.length)]
      alert(losingPhrase)
      this.destroyBot()
    }
  }

  mark($event: Event, cell: Cell) {
    $event.preventDefault()
    cell.mark = !cell.mark
  }

  startGame() {
    this.grid = this.mineSweeperService.start(this.rows, this.columns, this.mines)
  }
  
  toggleBot(state: boolean) {
    console.log(state)
    if(this.botStatus != state && state == true) {
      this.activateBot()
    } else {
      this.destroyBot()
    }
    this.botStatus = state
  }

  activateBot() {
    this.botInterval = setInterval(() => { 
      let move = this.mineSweeperBotService.getMove(this.grid)
      this.check(move)
    }, 3000)
  }

  destroyBot() {
    clearInterval(this.botInterval)
    this.botInterval = 0
    this.botStatus = false;
  }

  changeBotStatus() {
    this.botStatus = false
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