export function addAnswer(sectionId, questionId) {
  return {
    type: "ADD_ANSWER",
    payload: {
      sectionId,
      questionId
    }
  }
}

export function changeAnswerText(sectionId, questionId, answerId, text) {
  return {
    type: "CHANGE_ANSWER_TEXT",
    payload: {
      sectionId,
      questionId,
      answerId,
      text
    }
  }
}

export function setAnswerRight(sectionId, questionId, answerId, isRight) {
  return {
    type: "SET_ANSWER_RIGHT",
    payload: {
      sectionId,
      questionId,
      answerId,
      isRight
    }
  }
}

export function deleteAnswer(sectionId, questionId, answerId) {
  return {
    type: "DELETE_ANSWER",
    payload: {
      sectionId,
      questionId,
      answerId
    }
  }
}