import React, {Component} from 'react';
import { FaSoundcloud, FaTwitter } from 'react-icons/lib/fa/';
import NRKlogo from "../../posts/img/NRKlogoBlack.png";
import BFOlogo from "../../posts/img/BFOlogo.png";
import KODElogo from "../../posts/img/KODElogoBlack.png";

const CollaboratorsLogo = () => {
  return (
    <ul className="flex center">
      <li><a href="https://www.nrk.no"><img src={NRKlogo} alt=""/></a></li>
      <li><a href="https://www.harmonien.no"><img src={BFOlogo} alt=""/></a></li>
      <li><a href="https://www.kodebergen.no"><img src={KODElogo} alt=""/></a></li>
    </ul>
  )
}
export default CollaboratorsLogo;
