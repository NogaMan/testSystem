export function initAudiences(audiences) {
  return {
    type: "INIT_AUDIENCES",
    payload: { audiences }
  }
}

export function addAudience(audience) {
  return {
    type: "ADD_AUDIENCE",
    payload: { audience }
  }
}

export function changeFilter(filter) {
  return {
    type: "CHANGE_FILTER",
    payload: { filter }
  }
}

export function addTestTaker(audienceId, testTaker) {
  return {
    type: "ADD_TEST_TAKER",
    payload: { audienceId, testTaker }
  }
}

export function deleteAudience(audienceId) {
  return {
    type: "DELETE_AUDIENCE",
    payload: { audienceId }
  }
}

export function deleteTestTaker(audienceId, testTakerId) {
  return {
    type: "DELETE_TEST_TAKER",
    payload: { audienceId, testTakerId }
  }
}

