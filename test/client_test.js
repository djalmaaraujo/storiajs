var expect = chai.expect;
var historyAPI = {
  pushState: function(data, title, path) {}
};

describe('StoriaClient', function() {
  var m = {};

  beforeEach(function () {
    m.client = new StoriaClient(historyAPI);
  });

  afterEach(function() {
    $('#sandbox').html('');
  });

  describe('#constructor', function() {

    it('expect to exists (dumb)', function() {
      expect(m.client).to.be.an.instanceof(StoriaClient);
    });
  });

  describe('#changeState', function() {
    beforeEach(function() {
      $('#sandbox').append('<div id="about-template-content" style="display: none;"><p>Hello world</p></div><section id="my-first-target" data-storia-wrapper></section>');
    });

    it('expect to receive the route name', function() {
      var spy = sinon.spy(m.client, 'changeState');

      m.client.setup();

      m.client.changeState({pathname: 'about'});

      expect(spy.calledWith({pathname: 'about'})).true
    });

    it('expect to call history.pushState with the pre-defined pattern of a id', function() {
      var spy = sinon.spy(historyAPI, 'pushState');
      var spy2 = sinon.spy(m.client, 'writeWrapperContentFor');

      m.client.setup();
      m.client.changeState({pathname: 'about'});

      expect(spy.calledWith(null, 'about', '/about')).true
      expect(spy2.calledWith('about')).true
    });
  });

  describe('#getRouteElementId', function() {
    it('expect to return false for bad values', function () {
      expect(m.client.getRouteElementId()).equal(false)
      expect(m.client.getRouteElementId(undefined)).equal(false)
      expect(m.client.getRouteElementId(null)).equal(false)
    });

    it('expect to return a pattern like route-name-template-content', function () {
      expect(m.client.getRouteElementId('about')).equal('about-template-content')
      expect(m.client.getRouteElementId('house')).equal('house-template-content')
      expect(m.client.getRouteElementId('cheetos-mama')).equal('cheetos-mama-template-content')
    });
  });

  describe('#getRouteContentFor', function() {
    beforeEach(function() {
      $('#sandbox').append('<div id="about-template-content" style="display: none;">Justin Bieber</div>');
      $('#sandbox').append('<div id="crazy-template-content" style="display: none;"><p>Hello world</p></div>');
    });

    it('expect to capture the html content of a route element', function() {
      expect(m.client.getRouteContentFor('about')).equal('Justin Bieber')
      expect(m.client.getRouteContentFor('crazy')).equal('<p>Hello world</p>')
    });
  });

  describe('#getWrapper', function() {
    beforeEach(function() {
      $('#sandbox').append('<section id="my-first-target" data-storia-wrapper></section>');
    });

    it('expect to return an element with a data-storia-wrapper attribute attached', function() {
      expect(m.client.getWrapper().id).equal('my-first-target')
    });
  });

  describe('#writeWrapperContentFor', function() {
    beforeEach(function() {
      $('#sandbox').append('<div id="crazy-template-content" style="display: none;"><p>Hello world</p></div><section id="my-first-target" data-storia-wrapper></section>');
    });

    it('expect append the route content on the wrapper', function() {
      m.client.writeWrapperContentFor('crazy');
      expect($('#my-first-target').html()).equal('<p>Hello world</p>');
    });
  });

  describe("#bindHandlers", function () {
    beforeEach(function() {
      $('#sandbox').append('<a href="#" data-storia>a</a><a href="#" data-storia>b</a>');
    });

    it('should return client instance', function () {
      expect(m.client.bindHandlers()).to.be.an.instanceof(StoriaClient);
    });
  });
});
