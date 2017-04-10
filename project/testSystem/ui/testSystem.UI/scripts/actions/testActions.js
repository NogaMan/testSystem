export function changeTestName(name) {
  return {
    type: "CHANGE_TEST_NAME",
    payload: {
      name
    }
  }
}
export function postTest() {
  return {
    type: "POST_TEST",
    payload: { }
  }
}