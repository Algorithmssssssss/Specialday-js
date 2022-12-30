class TypeWriter extends React.Component {
    _currentString = "";
    _charCount = 0;
    _blinkCount = 0;
  
    state = {
      _count: 0,
      currentString: "obj",
      charCount: 0,
      messageBodyStr:
        "This is a typewriter effect built in ReactJS's componentDidUpdate and GreenSock onUpdate.",
      speed: 7,
      character: "|",
      endFlashSpeed: 0,
      blinkCount: 0
    };
  
    onLoaded = () => {
      let typingTl = new TimelineMax().timeScale(1);
      typingTl
        .to(
          this,
          this.state.messageBodyStr.length / this.state.speed,
          {
            _charCount: this.state.messageBodyStr.length,
            ease: Linear.easeNone,
            onUpdate: () => this.setState({ charCount: ~~this._charCount }),
            onComplete: () => {
              this.textField.textContent = this.state.messageBodyStr;
            }
          },
          "+=0.5"
        )
        .to(this, 1, {
          onUpdate: this.blink,
          _blinkCount: 2,
          repeat: -1,
          repeatDelay: this.state.endFlashSpeed,
          ease: Linear.easeNone
        });
    };
  
    blink = () => {
      this.setState({ blinkCount: ~~this._blinkCount });
      this._currentString =
        this.state.blinkCount % 2
          ? this.state.messageBodyStr
          : this.state.messageBodyStr + this.state.character;
    };
  
    componentDidMount() {
      this.onLoaded();
    }
  
    componentDidUpdate(prevProps) {
      this._currentString =
        this.state.messageBodyStr.substring(0, this.state.charCount) +
        this.state.character;
    }
  
    render() {
      return (
        <svg
          viewBox="0 0 800 300"
          preserveAspectRatio="xMidYMin meet"
          xmlns="http://www.w3.org/2000/svg"
          onLoad={this.startAnim}
        >
          <text
            x="10%"
            y="50%"
            className="myText"
            ref={c => (this.textField = c)}
          >
            {this._currentString}
          </text>
        </svg>
      );
    }
  }
  
  ReactDOM.render(<TypeWriter />, document.querySelector("#app"));
  