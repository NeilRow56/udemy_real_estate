import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-zinc-50">
      <h1 className="text-4xl font-semibold text-primary">Home Page</h1>
      <Button variant="super">Button</Button>
    </main>
  )
}
