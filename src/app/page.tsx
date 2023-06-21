'use client';

import { Heading } from '@/components/heading';
import { ContainerLayout, HomeContent } from './styles'

import { UserTypeList } from '@/components/user-type-list'
import { useTypeList } from '@/hooks/use-type-list'

export default function Home() {
  const { selected, options, handleSelect } = useTypeList();

  return (
    <ContainerLayout>
      <HomeContent>
        <Heading>
          Fazer login como:
        </Heading>
        <UserTypeList options={options} />
      </HomeContent>
    </ContainerLayout>
  )
}
