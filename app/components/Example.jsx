const React = require('react');
var {Link} = require('react-router')
// var Example = React.createClass({
//   render: function () {
//     return (
//       <h3>Example component</h3>
//     );
//   }
// });


//stateless functional component
var Example = (props) => {
  return (
    <div>
      <h1 className="text-center">Example component</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=xinxiang">Xinxiang, Henan</Link>
        </li>
        <li>
          <Link to="/?location=Rio">Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Example;
