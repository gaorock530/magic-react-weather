const React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About component</h3>
//     );
//   }
// });


//stateless functional component
var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About component</h1>
      <p>
        This is a weather application build on React. I have built this for The Complete React Web Developer Course.
      </p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="#">React</a> - This was the Javascript framework used.
        </li>
        <li>
          <a href="#">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>

  );
};

module.exports = About;
