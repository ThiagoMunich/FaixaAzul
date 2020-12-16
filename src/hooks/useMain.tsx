import {useContext} from 'react'
import {MainContext} from '../context/MainContext'

const useMain = () => {
  const context = useContext(MainContext)

  if(!context) throw new Error('useAuth must be used within a MainProvider')

  const {saldo, setSaldo, tema, trocarTema} = context
  
  return context

}

export default useMain