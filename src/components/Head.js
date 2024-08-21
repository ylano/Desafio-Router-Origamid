import React from 'react'

const Head = (props) => {
  React.useEffect(() => {
    // Atualiza o título da página usando o `document.title`
    document.title = props.title
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content',props.description)
  },[props]);
  return (
    <></>
  )
}

export default Head
