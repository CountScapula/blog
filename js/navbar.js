'use strict';

const e = React.createElement;

class NavBar extends React.Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    return (
      <ul>
        <a href="index.html"><li>Home</li></a>
        <a href="about.html"><li>About</li></a>
        <li>Blog</li>
        <a href="docs/Callum-Lawson-Smith-Resume.pdf"><li>Resume</li></a>
      </ul>
    );
  }
}

ReactDOM.render(<NavBar />, document.querySelector('#navbar'));