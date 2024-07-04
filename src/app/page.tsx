import { Button } from '@/components/ui/button'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  auth,
  currentUser,
} from '@clerk/nextjs'

export default async function Home() {
  const { userId } = auth()

  // if (!userId) {
  //   return
  // }
  const user = await currentUser()
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-zinc-50">
      <h1 className="text-4xl font-semibold text-primary">Home Page</h1>
      <Button variant="super">Button</Button>
      <SignedOut>
        {' '}
        <SignInButton mode="redirect" afterSignInUrl="/" afterSignUpUrl="/">
          <Button size="lg" variant="ghost">
            Login
          </Button>
        </SignInButton>
      </SignedOut>{' '}
      <SignedIn>
        {' '}
        <UserButton afterSignOutUrl="/sign-in" />
      </SignedIn>
      <div className="text-primary">
        <p>UserId: {userId}</p>
        <p>Username: {user?.username}</p>
        <p>Email: {user?.emailAddresses[0].emailAddress}</p>
      </div>
    </main>
  )
}
