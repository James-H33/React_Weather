var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//   var {temp, location} = this.props;
//   // Below is the same code in ES5
//   // var temp = this.props.temp;
//   // var location = this.props.location;
//
//     return (
//       <div>
        // <h4> It's {temp} degress in {location}</h4>
//       </div>
//     );
//   }
// });

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h4 className="text-center"> It's {temp} degrees in {location}</h4>
    </div>
  );
}

module.exports = WeatherMessage;
