import ADD from './types'
const addText = (text) => {
  return {
    type: ADD,
    text: text
  }
};

export default addText