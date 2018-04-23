import React from 'react';
import LocationCard from './LocationCard';

export default class MainLocations extends React.Component {
  render = () => {
    return (
      <div className="mainLocations flex spaceAround column">
        <LocationCard src={this.props.trold} id="MainLocationTrold">
          <h2>Troldhaugen</h2>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel lobortis eros. Aliquam erat volutpat. In nisl nisi, semper eu est sed, interdum tincidunt augue. Morbi sit amet blandit lacus, eget ornare nibh. Suspendisse sed luctus quam. Etiam lacinia purus arcu, ac mattis ante hendrerit vitae. In hac habitasse platea dictumst. Aliquam quis enim vel lacus egestas aliquam. Pellentesque non ultricies ligula.</h4>
        </LocationCard>
        <LocationCard src={this.props.grieg} id="MainLocationGrieg" revrev="rowReverse">
          <h2>Grieghallen</h2>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel lobortis eros. Aliquam erat volutpat. In nisl nisi, semper eu est sed, interdum tincidunt augue. Morbi sit amet blandit lacus, eget ornare nibh. Suspendisse sed luctus quam. Etiam lacinia purus arcu, ac mattis ante hendrerit vitae. In hac habitasse platea dictumst. Aliquam quis enim vel lacus egestas aliquam. Pellentesque non ultricies ligula.</h4>
        </LocationCard>
        <LocationCard src={this.props.store} id="MainLocationStore">
          <h2>Store Studio</h2>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel lobortis eros. Aliquam erat volutpat. In nisl nisi, semper eu est sed, interdum tincidunt augue. Morbi sit amet blandit lacus, eget ornare nibh. Suspendisse sed luctus quam. Etiam lacinia purus arcu, ac mattis ante hendrerit vitae. In hac habitasse platea dictumst. Aliquam quis enim vel lacus egestas aliquam. Pellentesque non ultricies ligula.</h4>
        </LocationCard>
      </div>
    )
  }
}
