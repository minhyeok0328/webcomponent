import { Component } from '../../../core/decorator';

@Component('app-header')
export default class AppHeader {
  render() {
    return `
        <header>
            <ul>
              <li>memu1</li>
              <li>menu2</li>
              <li>menu3</li>
            </ul>
        </header>
    `;
  }
}
