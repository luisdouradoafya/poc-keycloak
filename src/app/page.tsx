import styles from './page.module.css'

import { Brand } from '@/components/brand'
import { ContainerLayout, HomeContent } from './styles'

export default function Home() {
  return (
    <ContainerLayout>
      <HomeContent>
        <Brand />
      </HomeContent>
    </ContainerLayout>
  )
}
