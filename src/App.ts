import { Component } from './core/decorator';
import './component/organisms';
import './component/atoms';

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

  test() {
    console.log('asd');
  }

  render() {
    return `
      <app-header></app-header>
      <div>
        안녕하세요
        <app-button
          size="100"
        />
      </div>
      <app-footer></app-footer>
    `;
  }
}
