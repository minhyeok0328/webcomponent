import { Component } from './core/decorator';
import { html } from './core/dom';
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

  render() {
    return html`
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
