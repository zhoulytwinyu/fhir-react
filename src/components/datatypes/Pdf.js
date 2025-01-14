import React from 'react'

class Pdf extends React.Component {
	constructor(props) {
    super(props);
  }

	render() {
		return (
			<div>
				<embed src={`data:${this.props.fhirResource.contentType};base64, ${this.props.fhirResource.content}`} width="100%" height={`${Math.round(1111*this.props.fhirResource.content.length/(24996/7.5))}px`} />
			</div>
		);
	}
}

export default Pdf
