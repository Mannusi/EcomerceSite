import * as React from 'react';
import { ListOperation } from '../../../Domains/service';



export interface IMenu {
  Id: number;
  Name: string;
  Price: number;
  Size: string;
  Image: string;
}
export interface IMenuState {
  menuItem: IMenu;
}

export default class SingleProduct extends React.Component<any, IMenuState>{
  private singleProductOperations: ListOperation;
  constructor(props) {
    super(props)

    this.state = {
      menuItem: null,
    }
    this.singleProductOperations = new ListOperation();
  }
 
  handleBack = () => {
    this.props.history.goBack();
  }

  public componentDidMount = async () => {
    const propId = this.props.match.params._id;
    console.log(propId);
    let filterItem = await this.singleProductOperations.GetAllItemsFromList("MenuMaster", `Id eq ${propId}`, [], []);
    if (filterItem.length > 0) {
      this.setState({ menuItem: filterItem[0] });
    }
  }
  
  public render(): React.ReactElement<any> {
    
    const imageJSON = this.state.menuItem ? JSON.parse(this.state.menuItem.Image) : "";
    return (
      <div className='justify-content-center'>
        <button className='btn btn-primary btn-sm mb-5 mt-5' onClick={this.handleBack}>Back</button>
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mb-5">
            <div className='d-flex'>
              <div>
                <img src={imageJSON.serverRelativeUrl} alt=''></img>
              </div>
              <div className='text-align-center ml-5'>
                <h4 className='font-weight-bold text-nowrap mt-5'>{this.state.menuItem ? this.state.menuItem.Name : ""}</h4>
                <div className='font-weight-normal ml-4'>{this.state.menuItem ? this.state.menuItem.Size : ""}</div>
                <div className='font-weight-bold mt-2 ml-4'>₹{this.state.menuItem ? this.state.menuItem.Price : ""}</div>
                <button type="button" className='btn btn-secondary btn-sm ml-1 text-nowrap mt-2'>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
