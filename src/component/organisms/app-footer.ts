import { Component } from '../../core/decorator';
import { ComponentType } from '../../core/type';

@Component('app-footer')
export default class AppFooter implements ComponentType {
  render() {
    return '<footer>this is footer!</footer>';
  }
}
