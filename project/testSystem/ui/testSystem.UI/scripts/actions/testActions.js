export function changeTestName(name) {
  return {
    type: "CHANGE_TEST_NAME",
    payload: {
      name
    }
  }
}

export function clearTest() {
  return {
    type: "CLEAR_TEST",
    payload: {}
  }
}

export function showAlert() {
  return {
    type: "SHOW_ALERT",
    payload: {}
  }
}

export function closeAlert() {
  return {
    type: "CLOSE_ALERT",
    payload: {}
  }
}
