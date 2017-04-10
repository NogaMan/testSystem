export function addQuestion(sectionId, type) {
  return {
    type: "ADD_QUESTION",
    payload: {
      sectionId,
      type
    }
  }
}

export function changeQuestionText(sectionId, questionId, text) {
  return {
    type: "CHANGE_QUESTION_TEXT",
    payload: {
      sectionId,
      questionId,
      text
    }
  }
}

export function deleteQuestion(sectionId, questionId) {
  return {
    type: "DELETE_QUESTION",
    payload: {
      sectionId,
      questionId
    }
  }
}