import React from 'react'

class Coding extends React.Component {
	constructor(props) {
    super(props);
  }

	render() {
		return (
			<div>
				<div>
					<strong>{(_.get(this.props.fhirData, 'display') || '')}</strong>&nbsp;
					<span className='text-uppercase'>({(_.get(this.props.fhirData, 'code') || '')})</span>&nbsp;
					<small>{(_.get(this.props.fhirData, 'system') || '')}</small>
				</div>
			</div>
		);
	}
}

export default Coding
