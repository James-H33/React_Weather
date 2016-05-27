var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3> About Component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
        <h2 className="text-center page-title"> About </h2>
        <h5 className="text-center"> This is my first Complete React App</h5>
          <ul>
            <p>
              Here are some of the tools I used:
            </p>
            <li className="about-li">
              <a href="https://facebook.github.io/react/"> React</a> Created by the developers at Facebook.
            </li>
            <li className="about-li">
              <a href="http://openweathermap.org/api"> Open Weather API</a>
                This is the API used within the App that provides up to date weather information.
              </li>
            <li className="about-li">
              My Github: <a href="https://github.com/James-H33"> James-H33</a>
            </li>
          </ul>
    </div>
  );
}

module.exports = About;
