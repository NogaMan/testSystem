import React from 'react';
import { connect } from 'react-redux';
import ExamPage from './ExamPage.jsx';
import { initTest, testNotFound, setError, setAnswer, afterAnswersPost } from '../../actions/examActions.js';
import Api from '../../api.js';
import { Grid, Row, Col } from 'react-bootstrap';

const mapStateToProps = (state) => {
  const { test, error, notFound, token, result } = state.exam;
  return {
    test, error, notFound, token, result
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
        .then(json => {
          if (json.test) {
            this.props.dispatch(initTest(json.test, testToken));
          } else {
            this.props.dispatch(testNotFound());
          }
        })
        .catch(error => {
          if (error.message == "404") {
            this.props.dispatch(testNotFound());
          } else {
            this.props.dispatch(setError(error.message));
          }
        });
    }
  }

  sendAnswers() {
    const { test, token } = this.props;
    test.token = token;
    this.api.sendExamAnswers(test)
      .then(result => {
        this.props.dispatch(afterAnswersPost(result));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let layout;
    const { test, error, notFound, result } = this.props;
    if (result != null) {
      layout = <div>
        <h2>Thanks for submitting your test!</h2>
        <h3>Your result: <strong>{result} out of 100</strong></h3>
      </div>;
    } else {
      switch (true) {
        case !!error: {
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