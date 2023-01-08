import React from "react";
import { useItem } from "./index";

const Render = () =>{
	const [item, setItem] = useItem();
	pr(item)
	function update_cards(){
		setItem((prev) => ({...prev, cards_of_player: prev.cards_of_player + ["green_5"]}))
	}
   return (
		<>
   	<h1>
         Welcome to the Player Render!!
      </h1>
		</>
    )
}

export default Render
