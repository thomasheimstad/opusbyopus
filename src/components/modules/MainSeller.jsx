import React from 'react';
import FadeInWrapper from './FadeInWrapper';
import MdTime from 'react-icons/lib/md/access-time';
const MainSeller = () => {
  return (
    <div className="mainSeller flex center row">
      <FadeInWrapper id="mainSeller1">
        <div className="sellPoint flex center column">
          <MdTime/>
          <h2>30 timer</h2>
        </div>
      </FadeInWrapper>
      <FadeInWrapper id="mainSeller2">
        <div className="sellPoint flex center column">
          <h1>600+</h1>
          <h3>musikere</h3>
        </div>
      </FadeInWrapper>
      <FadeInWrapper id="mainSeller3">
        <div className="sellPoint flex center column">
          <h1>15 & 16</h1>
          <h2>juni 2018</h2>
        </div>
      </FadeInWrapper>
    </div>
  )
}
export default MainSeller;
