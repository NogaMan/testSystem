import { cloneTest, getSectionById, getQuestionById, getAnswerById } from './helpers.js';

export default function (state = {
  test: {},
  error: "",
  notFound: false,
  token: ""
}, action) {
  switch (action.type) {
    case 'INIT_TEST': {
      const test = cloneTest(action.payload.test);
      const token = action.payload.token;
      const state = Object.assign({}, state, { test, token });
      return state;
    }
    case 'TEST_NOT_FOUND': {
      const notFound = true;
      return Object.assign({}, state, { notFound });
    }
    case 'SET_ERROR': {
      const error = action.payload.error;
      return Object.assign({}, state, { error });
    }
    case 'SET_ANSWER': {
      const { sectionId, questionId, answerId, isRight } = action.payload;
      const test = cloneTest(state.test);
      const section = getSectionById(test, sectionId);
      const question = getQuestionById(section, questionId);
      const answer = getAnswerById(question, answerId);
      if (question.type === "single") {
        for (let answerKey in question.answers) {
          question.answers[answerKey].isRight = false;
        }
      }
      answer.isRight = isRight;
      return Object.assign({}, state, { test });;
    }
    case 'ANSWERS_POSTED': {
      return Object.assign({}, state, { test : {} });;
    }

    default: {
      return state;
    }
  }
}