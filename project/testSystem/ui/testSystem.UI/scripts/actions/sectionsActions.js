export function addSection() {
  return {
    type: "ADD_SECTION",
    payload: {}
  }
}

export function changeSectionName(sectionId, name) {
  return {
    type: "CHANGE_SECTION_NAME",
    payload: {
      sectionId,
      name
    }
  }
}

export function deleteSection(sectionId) {
  return {
    type: "DELETE_SECTION",
    payload: {
      sectionId
    }
  }
}