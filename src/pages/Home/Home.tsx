import { Play } from 'phosphor-react'
import { Countdown } from './Components/Countdown'
import { NewCycleForm } from './Components/NewCycleForm'
import { HomeContainer, StartCountdownButton } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <NewCycleForm />

        <Countdown />

        <StartCountdownButton type="submit">
          <Play size={24} /> Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
