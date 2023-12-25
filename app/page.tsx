import { ModeToggle } from '@/components/ModeToggle'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Button>Click Me</Button>
      <ModeToggle />
    </div>
  )
}
