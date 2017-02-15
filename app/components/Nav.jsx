const React = require('react');
const {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <h2>Navigation component</h2>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//         <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//         <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
//       </div>
//
//     );
//   }
// });

var Nav = (props) => {
  return (
    <div>
      <h2>Navigation component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
    </div>
  );
};

module.exports = Nav;
