import './App.css';
import Navbar from './component/navbar/navbar';
function App() {
  return (
    <div className='App'>
   <Navbar/>
   </div>
  );
}

export default App;
// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/navbar/navbar';
// import FindDoctors from './components/FindDoctors'; // Example component for Find Doctors
// import Hospitals from './components/Hospitals'; // Example component for Hospitals
// import Medicines from './components/Medicines'; // Example component for Medicines

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Switch>
//           <Route exact path="/">
//             {/* Home or default route component */}
//           </Route>
//           <Route path="/find-doctors">
//             <FindDoctors />
//           </Route>
//           <Route path="/hospitals">
//             <Hospitals />
//           </Route>
//           <Route path="/medicines">
//             <Medicines />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;
