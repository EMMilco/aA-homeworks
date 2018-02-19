import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  element.innerHtml = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
