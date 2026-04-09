import { Hero } from '@/components/Hero'
import { PresentacionAldea } from '@/components/PresentacionAldea'
import { QuienesSomos } from '@/components/QuienesSomos'
import { Diferenciales } from '@/components/Diferenciales'
import { Unidades } from '@/components/Unidades'
import { ComoFunciona } from '@/components/ComoFunciona'
import { PruebaSocial } from '@/components/PruebaSocial'
import { CitaMercedes } from '@/components/CitaMercedes'
import { CtaFinal } from '@/components/CtaFinal'

export default function Home() {
  return (
    <main>
      <Hero />
      <PresentacionAldea />
      <QuienesSomos />
      <Diferenciales />
      <Unidades />
      <ComoFunciona />
      <PruebaSocial />
      <CitaMercedes />
      <CtaFinal />
    </main>
  )
}
