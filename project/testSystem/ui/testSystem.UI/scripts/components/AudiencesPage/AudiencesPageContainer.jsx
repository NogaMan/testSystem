import React from 'react';
import { connect } from 'react-redux';
import AudiencePage from './AudiencePage.jsx';
import AddAudienceModal from './AddAudienceModal.jsx';
import AddTestTakerModal from './AddTestTakerModal.jsx';
import { initAudiences, addAudience, addTestTaker, deleteAudience, deleteTestTaker } from '../../actions/audienceActions.js';
import Api from '../../api.js';
import { Grid, Row, Col, Button } from 'react-bootstrap';

const mapStateToProps = (state) => {
  const { audiences } = state.audience;
  return {
    audiences
  }
};

class AudiencesPageContainer extends React.Component {
  constructor() {
    super();
    this.api = new Api();
    this.state = {
      showAddAudienceModal: false,
      showAddTestTakerModalAudienceId: null
    }
  }

  componentDidMount() {
    this.loadAudiences();
  }

  loadAudiences() {
    this.api.getFullAudiencesInfo()
      .then(audiences => {
          this.props.dispatch(initAudiences(audiences));
      })
      .catch(error => {
        console.log(error);
      });
  }

  addAudience(name) {
    if (name && name.length > 0) {
      this.api.addAudience(name)
        .then((id) => {
          this.props.dispatch(addAudience({ id, name, testTakers: {} }));
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  addTestTaker(audienceId, email, contactInfo) {
    if (audienceId && Object.keys(contactInfo).length > 0 && email.length > 0) {
      this.api.addTestTaker({ audienceId, email, contactInfo })
        .then((id) => {
          this.props.dispatch(addTestTaker(audienceId, { id, email, contactInfo }));
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  openAddAudienceModal() {
    this.setState({ showAddAudienceModal: true });
  }

  onAddAudienceSubmit(name) {
    this.addAudience(name);
    this.closeAddAudienceModal();
  }

  closeAddAudienceModal() {
    this.setState({ showAddAudienceModal: false });
  }

  openAddTestTakerModal(audienceId) {
    this.setState({ showAddTestTakerModalAudienceId: audienceId });
  }

  onAddTestTakerSubmit(audienceId, email, contactInfo) {
    this.addTestTaker(audienceId, email, contactInfo);
    this.closeAddTestTakerModal();
  }

  closeAddTestTakerModal() {
    this.setState({ showAddTestTakerModalAudienceId: null });
  }

  deleteAudience(audienceId) {
    this.api.deleteAudience(audienceId)
      .then((id) => {
        this.props.dispatch(deleteAudience(audienceId))
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteTestTaker(audienceId, testTakerId) {
    this.api.deleteTestTaker(testTakerId)
      .then((id) => {
        this.props.dispatch(deleteTestTaker(audienceId, testTakerId))
      })
      .catch(error => {
        console.log(error);
      });
  }
  

  render() {
    let layout;
    const audiences = this.props.audiences;
    if (!Object.keys(audiences).length) {
      layout = <h3>Loading...</h3>;
    } else {
      layout = <AudiencePage
        audiences={audiences}
        onTestTakerAddClick={(id) => this.openAddTestTakerModal(id)}
        onAudienceDeleteClick={(id) => this.deleteAudience(id)}
        onTestTakerDelete={(audienceId, testTakerId) => this.deleteTestTaker(audienceId, testTakerId)}
      />;
    }
    return <Row className="audience-page">
      <Col xs={12}>
        <h2>Your audiences <Button className="btn-add-audience" onClick={this.openAddAudienceModal.bind(this)}>Add Group</Button></h2>
        { layout }
      </Col>
      <AddAudienceModal
        show={this.state.showAddAudienceModal}
        onAudienceAdd={(name) => this.onAddAudienceSubmit(name)}
        onClose={this.closeAddAudienceModal.bind(this)}
      />
      <AddTestTakerModal
        show={this.state.showAddTestTakerModalAudienceId !== null}
        onTestTakerAdd={(testTaker) => this.onAddTestTakerSubmit(this.state.showAddTestTakerModalAudienceId, testTaker.email, testTaker.contactInfo)}
        onClose={this.closeAddTestTakerModal.bind(this)}
      />
    </Row>
  }
}

export default connect(mapStateToProps)(AudiencesPageContainer);