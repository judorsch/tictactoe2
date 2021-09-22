interface ButtonProps{
  change: (text:string) =>void,
  textTitle:string,
  symbolC: (text:string) =>void,
  symbol:string,
  end:boolean,
  incr: (num:number) =>void
  turns: number
}

export const TicButton = ({change, textTitle, symbolC, symbol, end, incr, turns}: ButtonProps): JSX.Element => {
  const flip = () =>  {
    if((symbol === "") && (end === false)){
      if(textTitle === "Player O Turn"){
        change("Player X Turn")
        symbolC("O")
      }
      else{
        change("Player O Turn")
        symbolC("X")
      }
      const num = turns + 1;
      incr(num)
    }
  }

  return <button className = "space" onClick={() => flip()}>{symbol}</button>
}