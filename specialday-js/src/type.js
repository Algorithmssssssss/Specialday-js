
function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class TypeWriter extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "_currentString",
    "");_defineProperty(this, "_charCount",
    0);_defineProperty(this, "_blinkCount",
    0);_defineProperty(this, "state",

    {
      _count: 0,
      currentString: "obj",
      charCount: 0,
      messageBodyStr:
      "This is a typewriter effect built in ReactJS's componentDidUpdate and GreenSock onUpdate.",
      speed: 7,
      character: "|",
      endFlashSpeed: 0,
      blinkCount: 0 });_defineProperty(this, "onLoaded",


    () => {
      let typingTl = new TimelineMax().timeScale(1);
      typingTl.
      to(
      this,
      this.state.messageBodyStr.length / this.state.speed,
      {
        _charCount: this.state.messageBodyStr.length,
        ease: Linear.easeNone,
        onUpdate: () => this.setState({ charCount: ~~this._charCount }),
        onComplete: () => {
          this.textField.textContent = this.state.messageBodyStr;
        } },

      "+=0.5").

      to(this, 1, {
        onUpdate: this.blink,
        _blinkCount: 2,
        repeat: -1,
        repeatDelay: this.state.endFlashSpeed,
        ease: Linear.easeNone });

    });_defineProperty(this, "blink",

    () => {
      this.setState({ blinkCount: ~~this._blinkCount });
      this._currentString =
      this.state.blinkCount % 2 ?
      this.state.messageBodyStr :
      this.state.messageBodyStr + this.state.character;
    });}

  componentDidMount() {
    this.onLoaded();
  }

  componentDidUpdate(prevProps) {
    this._currentString =
    this.state.messageBodyStr.substring(0, this.state.charCount) +
    this.state.character;
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("svg", {
        viewBox: "0 0 800 300",
        preserveAspectRatio: "xMidYMin meet",
        xmlns: "http://www.w3.org/2000/svg",
        onLoad: this.startAnim }, /*#__PURE__*/

      React.createElement("text", {
        x: "10%",
        y: "50%",
        className: "myText",
        ref: c => this.textField = c },

      this._currentString)));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(TypeWriter, null), document.querySelector("#app"));