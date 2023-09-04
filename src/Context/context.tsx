import * as React from "react";
import { ListOperation } from "../Domains/service";


export interface IMenu {
  Id: number;
  Name: string;
  Price: number;
  Size: string;
  Image: string;
}
export interface IContextState {
    cartItemCount: number;
    cartIncrementCount(event,item):void;
    menuItem: IMenu,
}

export const PropertyContext: any = React.createContext<IContextState|undefined>(undefined);

export default class EcomerceContext extends React.Component <{},IContextState>{
  private cartItem: ListOperation;
  constructor(props) {
    super(props)
    this.state = {
        cartItemCount: 0,
        cartIncrementCount:this.incrementCount,
        menuItem: null,
    }
    this.cartItem = new ListOperation();
  }
  incrementCount=async (event, item)=>{
    let itemId = item.Id;
    console.log(itemId);
    let filterItem = await this.cartItem.GetAllItemsFromList("MenuMaster", `Id eq ${itemId}`, [], []);
    if (filterItem.length > 0) {
      this.setState({ cartItemCount:this.state.cartItemCount+1,menuItem: filterItem[0] });
    }
    // this.setState({cartItemCount:this.state.cartItemCount+1})
  }

    render() {
        return (
            <PropertyContext.Provider value={this.state}>{this.props.children}</PropertyContext.Provider>
        )
    }
}
