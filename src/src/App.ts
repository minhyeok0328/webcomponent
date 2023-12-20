import { Component } from '../core/decorator';
import './component/organisms';

@Component('app-component')
export default class AppComponent {
  style = `
    div {
      width: 500px;
      height: 500px;
      background-color: red;
    }
    
    ul { display: none; }
  `;

  render() {
    return `
      <app-header></app-header>
      <div>안녕하세요</div>
      <app-footer></app-footer>
    `;
  }
}
