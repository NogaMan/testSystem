export function setAnswer(sectionId, questionId, answerId, isRight) {
  return {
    type: "SET_ANSWER",
    payload: {
      sectionId, questionId, answerId, isRight
    }
  }
}