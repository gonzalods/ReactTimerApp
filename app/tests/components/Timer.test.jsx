var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handelStatusChange', () => {
    it('should set state to started and countup', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(2);
        expect(timer.state.timerStatus).toBe('started');
        done();
      }, 2001);
    });
    it('should pause countup on paused status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      setTimeout(() => {
        timer.handleStatusChange('paused');
        expect(timer.state.count).toBe(2);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 2001);
    });
    it('should reset count on stopped', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(2);
        timer.handleStatusChange('stopped');
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 2001);

    });
  });
});
