import React from 'react';
import suplogo from '../assets/supreme@2x.png'

const SupremePic = () => {
   return (
      <div>
         <a href="/" target="home">
            <img src={suplogo} className="supLogo" alt="Sup logo" />
         </a>
      </div>
   );
};

export default SupremePic;