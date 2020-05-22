import React from 'react';
import Square from './Square';
import calculateWinner from '../utils/calcWinner';


class Board extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          nextX: true,
        };
      }
    
      handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.nextX ? 'X' : 'O';
        this.setState({
          squares: squares,
          nextX: !this.state.nextX,
        });
      }
    
      showSquare(i) {
        return (
          <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
          />
        );
      }
    
      render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + (this.state.nextX ? 'X' : 'O');
        }
        return (
          <div>
            <div className="status">{status}</div>
            <div className="board-row">
              {this.showSquare(0)}
              {this.showSquare(1)}
              {this.showSquare(2)}
            </div>
            <div className="board-row">
              {this.showSquare(3)}
              {this.showSquare(4)}
              {this.showSquare(5)}
            </div>
            <div className="board-row">
              {this.showSquare(6)}
              {this.showSquare(7)}
              {this.showSquare(8)}
            </div>
          </div>
        );
      }
}

export default Board;