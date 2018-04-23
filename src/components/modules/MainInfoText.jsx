import React from 'react';
import FadeInWrapper from './FadeInWrapper';
import NavLink from 'gatsby-link';
import MdTime from 'react-icons/lib/md/access-time';
const MainInfoText = () => {
  return (
    <div className="mainInfoText flex center row blogPost basePad">
        <div className="flex center column ">
          <FadeInWrapper id="mainInfoText1">
            <h1>Grieg 175 år</h1>
            <h3>NRK, BFO & KODE</h3>
          </FadeInWrapper>
            <div className="basePad">
              <FadeInWrapper id="mainInfoText2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel lobortis eros. Aliquam erat volutpat. In nisl nisi, semper eu est sed, interdum tincidunt augue. Morbi sit amet blandit lacus, eget ornare nibh. Suspendisse sed luctus quam. Etiam lacinia purus arcu, ac mattis ante hendrerit vitae. In hac habitasse platea dictumst. Aliquam quis enim vel lacus egestas aliquam. Pellentesque non ultricies ligula. Integer lectus eros, congue eget tempus in, blandit sit amet diam. Fusce ullamcorper turpis sed lacus accumsan, scelerisque congue ligula posuere. Suspendisse bibendum lacinia aliquet. Ut vel justo ac massa tincidunt laoreet ut et sem. Fusce sed ex at libero mattis vestibulum. Sed rutrum consequat congue.</p>
              </FadeInWrapper>
              <FadeInWrapper id="mainInfoText3">
                <p>Maecenas id justo dapibus, posuere arcu nec, ultricies metus. Ut ullamcorper, purus sit amet varius aliquet, orci est finibus justo, et gravida est tortor quis purus. Donec mauris libero, faucibus vel bibendum id, molestie at magna. Duis ornare justo nec volutpat volutpat. Sed varius ex nec ligula varius pulvinar. Proin sapien felis, aliquet id ultricies eu, venenatis quis turpis. Ut ullamcorper facilisis dui, in gravida lectus rhoncus eu. Nulla convallis elit est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam porta eget neque vitae luctus. Aliquam felis sem, pellentesque sed semper nec, accumsan non dolor. Nullam vehicula dui elit, id ultricies odio hendrerit sed. Maecenas condimentum vel justo ac elementum. Cras nunc est, fermentum ac dolor nec, fringilla mattis erat.</p>
              </FadeInWrapper>
              <FadeInWrapper id="mainInfoText4">
                <p>Praesent consectetur nisi mi. Aliquam erat volutpat. Aliquam quis fringilla ex. Aliquam erat volutpat. Integer ac pulvinar mauris, et vulputate ipsum. Duis fermentum, dui at pharetra molestie, est dolor sagittis nunc, et interdum ipsum nisi a diam. Mauris scelerisque mi eget ligula pulvinar, nec hendrerit tortor ultrices. Vivamus varius rhoncus ultricies. Sed suscipit ex et elit finibus lobortis. Donec non elementum lectus. Maecenas in molestie mauris.
                </p>
              </FadeInWrapper>
              <FadeInWrapper id="mainInfoText5">
                <div className="flex spaceAround wrap">
                  <div className="button"><NavLink to="/info">Mer Info</NavLink></div>
                  <div className="button"><NavLink to="/opus-for-opus">Opus for opus</NavLink></div>
                  <div className="button"><NavLink to="/artister">Artister</NavLink></div>
                </div>
              </FadeInWrapper>
            </div>
        </div>
    </div>
  )
}
export default MainInfoText;
