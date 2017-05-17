export function initTest(test, token) {
  return {
    type: "INIT_TEST",
    payload: {
      test, token
    }
  }
}

export function testNotFound() {
  return {
    type: "TEST_NOT_FOUND",
    payload: { }
  }
}

export function setError(error) {
  return {
    type: "SET_ERROR",
    payload: {
      error
    }
  }
}

export function setAnswer(sectionId, questionId, answerId, isRight) {
  return {
    type: "SET_ANSWER",
    payload: {
      sectionId, questionId, answerId, isRight
    }
  }
}

export function afterAnswersPost(result) {
  return {
    type: "ANSWERS_POSTED",
    payload: { result  }
  }
}