import Api from '../api.js';
import { cloneTest, getSectionById, getQuestionById, getAnswerById } from './helpers.js';

var defaultState = {
  name: '',
  lastSectionId: 0,
  sections: [],
  mode: "add",
  justCreated: false
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'CHANGE_TEST_NAME': {
      const test = cloneTest(state);
      test.name = action.payload.name;
      return test;
    }
    case 'ADD_SECTION': {
      const test = cloneTest(state);
      const id = test.lastSectionId++;
      test.sections[id] = {
        id,
        name: '',
        questions: [],
        lastQuestionId: 0
      };
      return test;
    }
    case 'CHANGE_SECTION_NAME': {
      const { sectionId, name } = action.payload;
      const test = cloneTest(state);
      const section = getSectionById(test, sectionId);
      section.name = name;
      return test;
    }
    case 'DELETE_SECTION': {
      const { sectionId } = action.payload;
      const test = cloneTest(state);
      delete test.sections[sectionId];
      return test;
    }
    case 'ADD_QUESTION': {
      const { sectionId, type } = action.payload;
      const test = cloneTest(state);
      const section = getSectionById(test, sectionId);
      const id = section.lastQuestionId++;
      section.questions[id] = {
        id,
        text: '',
        type: type,
        answers: [],
        lastAnswerId: 0
      };
      return test;
    }
    case 'CHANGE_QUESTION_TEXT': {
      const { sectionId, questionId, text } = action.payload;
      const test = cloneTest(state);
      const section = getSectionById(test, sectionId);
      const question = getQuestionById(section, questionId);
      question.text = text;
      return test;
    }
    case 'DELETE_QUESTION': {
      const { sectionId, questionId } = action.payload;
      const test = cloneTest(state);
      const section = getSectionById(test, sectionId);
      delete section.questions[questionId];
      return test;
    }
    case 'ADD_ANSWER': {
      const { sectionId, questionId } = action.payload;
      const test = cloneTest(state);
      const section = getSectionById(test, sectionId);
      const question = getQuestionById(section, questionId);
      const id = question.lastAnswerId++;
      question.answers[id] = {
        id,
        text: '',
        isRight: false,
        type: question.type,
        questionId: question.id
      };
      return test;
    }
    case 'CHANGE_ANSWER_TEXT': {
      const { sectionId, questionId, answerId, text } = action.payload;
      const test = cloneTest(state);
      const section = getSectionById(test, sectionId);
      const question = getQuestionById(section, questionId);
      const answer = getAnswerById(question, answerId);
      answer.text = text;
      return test;
    }
    case 'SET_ANSWER_RIGHT': {
      const { sectionId, questionId, answerId, isRight } = action.payload;
      const test = cloneTest(state);
      const section = getSectionById(test, sectionId);
      const question = getQuestionById(section, questionId);
      const answer = getAnswerById(question, answerId);
      if (question.type === "single") {
        for (let answerKey in question.answers) {
          question.answers[answerKey].isRight = false;
        }
      }
      answer.isRight = isRight;
      return test;
    }
    case 'DELETE_ANSWER': {
      const { sectionId, questionId, answerId } = action.payload;
      let test = cloneTest(state);
      const section = getSectionById(test, sectionId);
      const question = getQuestionById(section, questionId);
      delete question.answers[answerId];
      return test;
    }
    case 'CLEAR_TEST': {
      const test = Object.assign({}, cloneTest(defaultState));
      return test;
    }
    case 'SHOW_ALERT': {
      const test = Object.assign({}, cloneTest(state), { justCreated: true });
      return test;
    }
    case 'CLOSE_ALERT': {
      const test = Object.assign({}, cloneTest(state), { justCreated: false });
      return test;
    }
    default: {
      return state;
    }
  }
}