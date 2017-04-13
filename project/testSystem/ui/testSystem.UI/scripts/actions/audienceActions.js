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