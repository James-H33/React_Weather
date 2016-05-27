var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h3>Examples Component</h3>
//     );
//   }
// });

var Examples = (props) => {
  return (
    <div>
      <h2 className="text-center page-title">Examples </h2>
      <p>Here are a few locaitions to try out: </p>
      <ol>
        <li>
          <Link to="/?location=Tampa"> Tampa</Link>
        </li>
        <li>
          <Link to="/?location=Rio"> Rio</Link>
        </li>
      </ol>
  </div>
  );
}


module.exports = Examples;
