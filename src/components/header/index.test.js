import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import sinon from 'sinon';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n'; // initialized i18next instance
import * as accountActions from '../../actions/account';
import * as dialogActions from '../../actions/dialog';
import Header from './header';
import HeaderHOC from './index';
import store from '../../store';


describe('HeaderHOC', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Provider store={store}>
      <I18nextProvider i18n={ i18n }>
        <HeaderHOC />
      </I18nextProvider>
    </Provider>);
  });

  it('should render Header', () => {
    expect(wrapper.find(Header)).to.have.lengthOf(1);
  });

  it('should bind accountLoggedOut action to Header props.logOut', () => {
    const actionsSpy = sinon.spy(accountActions, 'accountLoggedOut');
    wrapper.find(Header).props().logOut({});
    expect(actionsSpy).to.be.calledWith();
    actionsSpy.restore();
  });

  it('should bind dialogDisplayed action to Header props.setActiveDialog', () => {
    const actionsSpy = sinon.spy(dialogActions, 'dialogDisplayed');
    wrapper.find(Header).props().setActiveDialog({});
    expect(actionsSpy).to.be.calledWith();
    actionsSpy.restore();
  });
});
