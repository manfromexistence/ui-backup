import { FormEvent, useState } from "react"

async function minDelay<T>(promise: Promise<T>, ms: number) {
  let delay = new Promise((resolve) => setTimeout(resolve, ms))
  let [p] = await Promise.all([promise, delay])

  return p
}

function Form() {
  let [isSaving, setIsSaving] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSaving(true)

    let data = Object.entries(new FormData(e.currentTarget))

    //   await minDelay(signup(data.email), 1000);

    setIsSaving(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Sign up for our newsletter</p>
      <input type="email" name="email" />
      <button>Sign up</button>
    </form>
  )
}
