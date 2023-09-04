import * as React from 'react';
import Menu from '../components/NavComponent/Menu';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { IMenuProps } from '../components/NavComponent/IMenuProps';

const images = {
    width: "100%",
    objectPosition: "center",
    objectFit: "cover",
};
export default class Home extends React.Component<IMenuProps, {}> {
  public render() {

        return (
            <div>
                <div className="row">
                    <div className='col-md-6 col-lg-6 col-xl-6 d-flex flex-column align-items-start justify-content-center'>
                        <p className='font-italic'>Are you hungry?</p>
                        <h2 className='font-semibold'>Don't Wait !</h2>
                        <button type="button" className="btn btn-secondary">Order Now</button>
                    </div>
                    <div className='col-md-6 col-lg-6 col-xl-6 mt-5 justify-content-between'>
                        <img className='logo2' src={require('../../../Images/logo2.jpg')} alt="logo2"  style={{
                            width: "100%",
                            objectPosition: "center",
                            objectFit: "cover",
                            borderRadius: "15px",
                        }} />
                    </div>
                </div>
                <hr></hr>
                <Menu  description={''} context={this.props.context}></Menu>
            </div>

        );
    }
}

