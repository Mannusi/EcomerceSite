import * as React from 'react';
import { Link } from 'react-router-dom';
import { IMenuProps } from './IMenuProps';
import { useContext } from 'react';
import { IEcomerceProps } from '../IEcomerceProps';
import { PropertyContext } from '../../../../Context/context';


export default class Navigation extends React.Component<IMenuProps, {}> {
    public render() {
        return (
            <PropertyContext.Consumer>
                {
                    context => (
                        <>
                            <nav>
                                <div className="row w-100">
                                    <div>
                                        <Link to="/">
                                            <img src={require('../../../../Images/logo1.jpg')} alt='logo'>
                                            </img>
                                        </Link>
                                    </div>
                                    <div className='ml-auto'>
                                        <ul className='d-flex justify-content-end' style={{ listStyle: "none" }}>
                                            <li className='pr-md-3 pt-md-3'>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li className='pr-md-3 pt-md-3'>
                                                <Link to="/Products">Products</Link>
                                            </li>
                                            <li className='pr-md-3 pt-md-3'>
                                                <Link to="/About">About</Link>
                                            </li>
                                            <li className='pt-md-1'>
                                                <Link to="/Cart">
                                                    <span>{context.cartItemCount}</span>
                                                    <img src={require('../../../../Images/cart.png')} alt="cart" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </>
                    )}
            </PropertyContext.Consumer>
        );
    }
}
