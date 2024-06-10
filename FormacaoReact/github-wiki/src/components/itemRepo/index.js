/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { ItemContainer } from './style'

function ItemRepo({ repo, onRemove }) {
  useEffect(() => {
    const btnRm = document.querySelector('.remover')
    if (btnRm) {
      const handleClick = () => {
        onRemove(repo.id)
      }
      btnRm.addEventListener('click', handleClick)
      return () => {
        btnRm.removeEventListener('click', handleClick)
      }
    }
  }, [repo.id, onRemove])

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target='_blank' rel="noreferrer">Ver Repositório</a>
      <br />
      <a href="#" className='remover' rel="noreferrer">Remover</a>
      <hr />
    </ItemContainer>
  )
}
export default ItemRepo