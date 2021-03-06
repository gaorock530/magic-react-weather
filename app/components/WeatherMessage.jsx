const React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {location, temp} = this.props;
//
//     return (
//       <h3>It's {temp} in {location}.</h3>
//     );
//   }
// });

// var WeatherMessage = (props) => {
//   var {location, temp} = props;
//
//   return (
//     <h3>It's {temp} in {location}.</h3>
//   );
// }

var WeatherMessage = ({location, temp}) => {
  return (
    <h3 className="text-center">It's {temp} in {location}.</h3>
  );
};

module.exports = WeatherMessage;
