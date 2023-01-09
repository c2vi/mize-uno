import React from "react";
import { useState } from "react";
//import reactDom from "react-dom";
import { createRoot } from 'react-dom/client';
import Render from "./Render";
//import { createContainer } from 'react-tracked';

let useItem = {}
let useThisItem = {}

const hello = "hello from index.js"

class Test extends HTMLElement {
	connectedCallback() {

		//state with react-tracked ... doesn't work
		//const itemState = () => useState({});
		//const { ItemProvider: SharedStateProvider, useTracked: useSharedState } = createContainer(itemState);
		//const container = createContainer(itemState);
		//const ItemProvider = container.Provider
		//const useShared = container.useTracked


		//the hook for the item, we are rendering
	}

	getItemCallback(item_raw){

		const mountPoint = document.createElement('span');
		this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

		this.items = {}
		this.item_raw = item_raw
		this.id = mize.id_to_render

		useItem = (ob) => {
			if (!ob){
				const [state, setState] = useState(item_raw.get_parsed())

				//don't do updates the first time
				if (!this.items[this.id]){
					this.items[this.id] = {item: state, setItem: setState, do_updates: true, raw: this.item_raw}

				} else {
					//waiting for the unparse func to be finished
					//this.items[this.id].raw.update(state)
					
					this.items[this.id].item = state
					this.items[this.id].item = setState
				}

				return [state, setState]

				//if useItem has a param
				} else {
					const [state, setState] = useState({})

					//don't do updates the first time
					if (!this.items[ob.id]){

						this.items[ob.id] = {item: state, setItem: setState, do_updates: true}

						//call get_item only the first time
						mize.get_item(ob.id, (new_item) => {
							this.items[new_item.id].raw = new_item
							this.items[new_item.id].setItem(new_item.get_parsed())
						})

					} else {
						//waiting for the unparse func to be finished
						//this.items[this.id].raw.update(state)
						
						this.items[ob.id].item = state
						this.items[ob.id].item = setState
					}

					return [state, setState]
				}
		}

		//rendering to the webcomponent
		const root = createRoot(mountPoint); // createRoot(container!) if you use TypeScript

		root.render(
			//<ItemProvider>
				<Render />
			//</ItemProvider>
		);

	}

	updateCallback(update){
		this.item_raw = update.now
		this.items[update.now.id].setItem((prev) => ({ ...prev, ...update.now.get_parsed()}));
	}
}

export {useItem, hello}
mize.defineRender(Test)
