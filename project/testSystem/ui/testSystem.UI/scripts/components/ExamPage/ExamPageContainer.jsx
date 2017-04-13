import React from 'react';
import { connect } from 'react-redux';
import ExamPage from './ExamPage.jsx';
import { initTest, testNotFound, setError, setAnswer, afterAnswersPost } from '../../actions/examActions.js';
import Api from '../../api.js';
import { Grid, Row, Col } from 'react-bootstrap';

const mapStateToProps = (state) => {
  const { test, error, notFound, token } = state.exam;
  return {
    test, error, notFound, token
  }
};

class ExamPageContainer extends React.Component {
  constructor() {
    super();
    this.api = new Api();
  }

  componentDidMount() {
    this.loadTest();
  }

  loadTest() {
    var testToken = this.props.location.query.token || null;
    if (!testToken) {
      this.props.dispatch(testNotFound());
    } else {
      this.api.getExamTestByToken(testToken)
        .then(test => {
          if (test) {
            this.props.dispatch(initTest(test, testToken));
          } else {
            this.props.dispatch(testNotFound());
          }
        })
        .catch(error => {
          this.props.dispatch(setError(error.message));
        });
    }
  }

  sendAnswers() {
    const { test, token } = this.props;
    test.token = token;
    this.api.sendExamAnswers(test)
      .then(json => {
        this.props.dispatch(afterAnswersPost());
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let layout;
    const test = this.props.test;
    const error = this.props.error;
    const notFound = this.props.notFound;
    switch (true) {
      case error: {
        layout = <h3>Error: {error}</h3>;
        break;
      }
      case notFound: {
        layout = <h3>Test not found</h3>;
        break;
      }
      case !test.name: {
        layout = <h3>Loading...</h3>;
        break;
      }
      default: {
        layout = <ExamPage
          test={test}
          onAnswer={(sectionId, questionId, answerId, isRight) => this.props.dispatch(setAnswer(sectionId, questionId, answerId, isRight))}
          onSubmit={() => this.sendAnswers()}
        />
        break;
      }
    }
    return <Grid fluid>
      <Row>
        <Col xs={10} xsPush={1}>
          {layout}
        </Col>
      </Row>
    </Grid>
  }
}

export default connect(mapStateToProps)(ExamPageContainer);