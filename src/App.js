import React, {Component} from 'react';
import {App as AppOrigin} from 'whs';
import {TransitionBase} from './TransitionBase';

export class App extends TransitionBase {
  constructor(...props) {
    super(...props);

    this.native = new AppOrigin();
    this.native.start();
  }

  componentDidMount() {
    const element = this.refs.whscontainer;
    this.native.manager.add('element', element, {alias: '$element'});

    this.props.modules.forEach(module => {
      this.native.applyModule(module);
    });

    this.mount();
  }

  render() {
    return (
      <div className='whs' ref='whscontainer'>
        {this.applyChildren()}
      </div>
    )
  }
}