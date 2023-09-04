import * as React from 'react';
import { ListOperation } from '../../../../Domains/service';
import { IMenuProps } from './IMenuProps';
import styles from '../Ecomerce.module.scss';
import { Link } from 'react-router-dom';
import EcomerceContext, { PropertyContext } from '../../../../Context/context';

export interface IMenu {
    Id: number;
    Name: string;
    Price: number;
    Size: string;
    Image: string;
}
export interface IMenuState {
    menuMasterData: IMenu[];
    cartItem: number;
}
export default class Menu extends React.Component<IMenuProps, IMenuState, {}> {
    private menuListOperations: ListOperation;
    constructor(props) {
        super(props);
        this.state = {
            menuMasterData: [],
            cartItem: 0
        };
        this.menuListOperations = new ListOperation();
    }

    public componentDidMount = async () => {
        let menuData = await this.menuListOperations.GetAllItemsFromList("MenuMaster", "", [], []);
        console.log(menuData);
        this.setState({ menuMasterData: menuData });
    }

    public render() {
        return (
            <PropertyContext.Consumer>
                {
                    context => (
                        <>
                            <div>
                                <h3>Menu List</h3>
                            </div>
                            <div className="row text-center mt-3">
                                {
                                    this.state.menuMasterData.map((item) => {
                                        const imageJSON = JSON.parse(item.Image);
                                        return <>
                                            <div className="col-md-3 col-lg-3 col-xl-3 mb-5">
                                                <div className='p-1 border'>
                                                    <Link to={`/SingleProduct/${item.Id}`}>
                                                        <div>
                                                            <img className={styles.imageCard} src={imageJSON.serverRelativeUrl} alt='Pepperoni'></img>
                                                        </div>
                                                        <div className='justify-content-around text-center mt-1 text-dark'>
                                                            <h4>{item.Name}</h4>
                                                            <span>{item.Size}</span>
                                                        </div>
                                                    </Link>
                                                    <div className='flex justify-content-center mt-1 font-bold text-dark'>
                                                        <span style={{ marginRight: "30px", fontWeight: "bold", fontSize: "18px" }}>₹{item.Price}</span>
                                                        <button type="button" className='btn btn-secondary btn-sm' onClick={(e) => { context.cartIncrementCount(e, item) }}>Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>;
                                    })
                                }
                            </div>
                        </>
                    )
                }
            </PropertyContext.Consumer>
        );
    }
}
