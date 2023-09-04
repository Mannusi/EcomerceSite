import * as React from 'react';
import { PropertyContext } from '../../../Context/context';

export default class Cart extends React.Component {


  public render() {
    return (
      <PropertyContext.Consumer>
        {
          context => (
            <>
              {context.menuItem.map((item) => {
                return <>
                  <p>{item.Id}</p>
                </>
              })}
            </>
          )
        }

      </PropertyContext.Consumer>

    );
  }
}
