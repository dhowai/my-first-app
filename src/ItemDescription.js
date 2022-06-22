import React, { Component } from "react";
// Function based
function ItemDescription({ name, description }) {
  return (
    <div>
      <p>{name}</p>
      <p>
        <i>{description}</i>
      </p>
    </div>
  );
}

export default ItemDescription;

// class based
// export default class ItemDescription extends Component {
//   render() {
//     return (
//       <div>
//         <p>{this.props.name}</p>
//         <p>
//           <i>{this.props.description}</i>
//         </p>
//       </div>
//     );
//   }
// }
