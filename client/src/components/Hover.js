// import HoverBox from 'react-hoverbox';
// import Box from './Box';

// class Hover extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <div>
//         <HoverBox>
//           <div>
//             <Box showEffect={hover} />
//             <div>Look at the shiny hover effect!</div>
//           </div>
//         </HoverBox>
//       </div>
//     );
//   }
// }

var HoverBox = require('react-hoverbox');

<HoverBox
  render={hover => (
    <div>
      <SomeComponent showEffect={hover} />
      <div>Look at the shiny hover effect!</div>
    </div>
  )}
/>;
