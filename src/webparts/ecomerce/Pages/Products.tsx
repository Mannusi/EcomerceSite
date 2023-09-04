import * as React from 'react';
import Menu from '../components/NavComponent/Menu';
import { IMenuProps } from '../components/NavComponent/IMenuProps';
import { PropertyContext } from '../../../Context/context';
import { useContext } from 'react';

export default class Products extends React.Component<IMenuProps, {}> {
  public render() {
    return (
      <>
        <Menu description={''} context={this.props.context}></Menu>
      </>
    );
  }
}
