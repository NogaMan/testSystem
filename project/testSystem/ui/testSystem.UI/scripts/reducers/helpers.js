export function cloneTest(oldTest) {
  let newTest = Object.assign({}, oldTest);
  newTest.sections = {};
  for (let sectionId in oldTest.sections) {
    let section = oldTest.sections[sectionId];
    let newSection = Object.assign({}, section);
    newSection.questions = {};
    for (let questionId in section.questions) {
      let question = section.questions[questionId];
      let newQuestion = Object.assign({}, question);
      newQuestion.answers = {};
      for (let answerId in question.answers) {
        let answer = question.answers[answerId];
        let newAnswer = Object.assign({}, answer);
        newQuestion.answers[answer.id] = newAnswer;
      }
      newSection.questions[question.id] = newQuestion;
    }
    newTest.sections[section.id] = newSection;
  }
  return newTest;
}

export function getSectionById(test, sectionId) {
  const section = test.sections[sectionId] || null;
  if (section === null) {
    throw new Error("Section is not found");
  }
  return section;
}

export function getQuestionById(section, questionId) {
  const question = section.questions[questionId] || null;
  if (question === null) {
    throw new Error("Question is not found");
  }
  return question;
}

export function getAnswerById(question, answerId) {
  const answer = question.answers[answerId] || null;
  if (answer === null) {
    throw new Error("Answer is not found");
  }
  return answer;
}

export function cloneAudience(audience) {

  let newAudience = {
    id: audience.id,
    name: audience.name,
    testTakers: {}
  };
  for (let testTakerKey in audience.testTakers) {
    const testTaker = audience.testTakers[testTakerKey];
    let newTestTaker = Object.assign({}, testTaker);
    /*
    let contacts = {
      lastName,
      gender,
      dateOfBirth,
      companyName,
      departmentName,
      positionName,
      location,
      createdDate,
      updatedDate
    };
    */
    newAudience.testTakers[testTaker.id] = newTestTaker;
  }
  return newAudience;
}

export function cloneAudiences(audiences) {
  let newAudiences = {};
  for (let audienceKey in audiences) {
    let newAudience = cloneAudience(audiences[audienceKey]);
    newAudiences[audienceKey] = newAudience;
  }
  return newAudiences;
}