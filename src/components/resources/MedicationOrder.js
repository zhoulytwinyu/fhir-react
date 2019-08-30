import React from 'react'
var _ = require('lodash');
import ResourceContainer from '../container/ResourceContainer'
import Reference from '../datatypes/Reference'
import crypto from 'crypto'

class MedicationOrder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ResourceContainer {...this.props} >
          <div style={{width:'100%', display:'inline-block'}}>
            <h4 style={{display: 'inline-block'}}>
              {_.get(this.props.fhirResource,'medicationReference.display') || _.get(this.props.fhirResource,'medicationCodeableConcept.text') || ''}
            </h4>
            &nbsp;({_.get(this.props.fhirResource,'status') || ''})
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6'>
                {this.props.fhirResource.dosageInstruction && this.props.fhirResource.dosageInstruction.length > 0  ? (
                  <div>
                    <small className='text-muted text-uppercase'><strong>
                    Dosage Instruction:
                    </strong></small>
                    {_.get(this.props.fhirResource.dosageInstruction[0], 'text')}
                  </div>) :
                ''}
              </div>
              <div className='col-sm-6'>
                {this.props.fhirResource.dosageInstruction && this.props.fhirResource.dosageInstruction.length > 0 &&
                  this.props.fhirResource.dosageInstruction[0].route ? (
                  <div>
                    <small className='text-muted text-uppercase'><strong>
                    Route:
                    </strong></small>
                    {_.get(this.props.fhirResource.dosageInstruction[0].route.coding[0], 'display')}
                  </div>) :
                ''}
              </div>
            </div>
            
            <div className='row'>
              <div className='col-sm-4'>
                {this.props.fhirResource.dispenseRequest && this.props.fhirResource.dispenseRequest.validityPeriod &&
                 this.props.fhirResource.dispenseRequest.validityPeriod.start ? (
                  <div>
                    <small className='text-muted text-uppercase'><strong>
                    Start time:
                    </strong></small>
                    {this.props.fhirResource.dispenseRequest.validityPeriod.start}
                  </div>) :
                ''}
              </div>
              <div className='col-sm-4'>
                {this.props.fhirResource.dispenseRequest && this.props.fhirResource.dispenseRequest.validityPeriod &&
                 this.props.fhirResource.dispenseRequest.validityPeriod.end ? (
                  <div>
                    <small className='text-muted text-uppercase'><strong>
                    End time:
                    </strong></small>
                    {this.props.fhirResource.dispenseRequest.validityPeriod.end}
                  </div>) : (
                  <div>
                    <small className='text-muted text-uppercase'><strong>
                    End time:
                    </strong></small>
                    On-going
                  </div>
                )}
              </div>
              <div className='col-sm-4'>
                {this.props.fhirResource.dateWritten ? (
                  <div>
                    <small className='text-muted text-uppercase'><strong>
                    Date recorded:
                    </strong></small>
                    {this.props.fhirResource.dateWritten}
                  </div>) :
                ''}
              </div>
            </div>
            
            <div className='row'>
              <div className='col-sm-12'>
                {_.get(this.props.fhirResource, 'prescriber') ? (
                  <div>
                    <small className='text-muted text-uppercase'><strong>
                    Prescribed by:
                    </strong></small>
                    {<Reference fhirData={_.get(this.props.fhirResource, 'prescriber')}/> || ''}
                  </div>) :
                ''}
              </div>
            </div>
          </div>
        </ResourceContainer>
      </div>
    );
  }
}

export default MedicationOrder ;
