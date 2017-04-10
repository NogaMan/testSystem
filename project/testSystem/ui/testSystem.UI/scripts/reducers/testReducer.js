import Api from '../api.js';

function cloneTest(oldTest) {
  let test = { ...oldTest };
  test.sections = test.sections.map(function (section) {
    section.questions = section.questions.map(function (question) {
      question.answers = question.answers.map(function (answer) {
        return { ...answer };
      });
      return { ...question };
    });
    return { ...section };
  });
  return test;
}

function getSectionById(test, sectionId) {
  const section = test.sections.filter((s) => s.id === sectionId)[0] || null;
  if (section === null) {
    throw new Error("Section is not found");
  }
  return section;
}

function getQuestionById(section, questionId) {
  const question = section.questions.filter((q) => q.id === questionId)[0] || null;
  if (question === null) {
    throw new Error("Question is not found");
  }
  return question;
}

function getAnswerById(question, answerId) {
  const answer = question.answers.filter((a) => a.id === answerId)[0] || null;
  if (answer === null) {
    throw new Error("Answer is not found");
  }
  return answer;
}

export default function (state = {
  name: '',
  lastSectionId: 0,
  sections: [],
}, action) {
  switch (action.type) {
    case 'CHANGE_TEST_NAME': {
      const test = cloneTest(state);
      test.name = action.payload.name;
      return test;
    }
    case 'ADD_SECTION': {
      const test = cloneTest(state);
      test.sections.push(
        {
          id: test.lastSectionId++,
          name: '',
          questions: [],
          lastQuestionId: 0
        }
      );
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
      const section = getSectionById(test, sectionId);
      test.sections.splice(test.sections.indexOf(section), 1);
      return test;
    }
    case 'ADD_QUESTION': {
      const { sectionId, type } = action.payload;
      const test = cloneTest(state);
      const section = getSectionById(test, sectionId);
      section.questions.push(
        {
          id: section.lastQuestionId++,
          text: '',
          type: type,
          answers: [],
          lastAnswerId: 0
        }
      );
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
      const question = getQuestionById(section, questionId);
      section.questions.splice(section.questions.indexOf(question), 1);
      return test;
    }
    case 'ADD_ANSWER': {
      const { sectionId, questionId } = action.payload;
      const test = cloneTest(state);
      const section = getSectionById(test, sectionId);
      const question = getQuestionById(section, questionId);
      question.answers.push({
        id: question.lastAnswerId++,
        text: '',
        isRight: false,
        type: question.type,
        questionId: question.id
      });
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
      let test = cloneTest(state);
      const section = getSectionById(test, sectionId);
      const question = getQuestionById(section, questionId);
      const answer = getAnswerById(question, answerId);
      if (question.type === "single") {
        question.answers.map((a) => {
          a.isRight = false;
        });
      }
      answer.isRight = isRight;
      return test;
    }
    case 'DELETE_ANSWER': {
      const { sectionId, questionId, answerId } = action.payload;
      let test = cloneTest(state);
      const section = getSectionById(test, sectionId);
      const question = getQuestionById(section, questionId);
      const answer = getAnswerById(question, answerId);
      question.answers.splice(question.answers.indexOf(answer), 1);
      return test;
    }
    case 'POST_TEST': {
      const api = new Api();
      const oldTest = cloneTest(state);
      const test = {
        name: oldTest.name
      };
      test.sections = oldTest.sections.map((section) => {
        const { name } = section;
        const questions = section.questions.map((question) => {
          const { text, type } = question;
          const answers = question.answers.map((answer) => {
            const { text, isRight } = answer;
            return { text, isRight };
          });
          return { text, type, answers }
        });
        return { name, questions }
      });
      api.createTest(test)
        .then(() => {
          return {
            name: '',
            lastSectionId: 0,
            sections: []
          }
        })
        .catch((e) => {
          console.log(e);
          return oldTest;
        });
    }
    default: {
      return state;
    }
  }
}