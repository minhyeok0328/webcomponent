import { Component } from '../../core/decorator';
import { ComponentType } from '../../core/type';

@Component('app-button')
export default class AppButton implements ComponentType {
  style = `
    button {
      width: 140px;
      height: 50px;
    }
  `;

  componentDidMount() {
    console.log(this.props);
  }
}
