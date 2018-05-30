import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const DualLink = () => {
  return (
    <div className="flex center dualLink">
      <div class="button postButton"><a href="http://harmonien.no/konserter-og-billetter/2018/06/grieg-minutt-for-minutt/" target="_blank"><h3>Kjøp billetter til Grieghallen her</h3></a></div>
      <div class="button postButton"><AnchorLink href="#troldhaugen"><h3>Gratis på Troldhaugen og i Store studio</h3></AnchorLink></div>
    </div>
  )
}
export default DualLink;
