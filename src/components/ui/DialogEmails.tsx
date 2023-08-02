import { Button } from '@/components/ui/button.tsx'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Label } from '@/components/ui/label.tsx'

import {  useState } from 'react'
import { useToast } from './use-toast.ts'

export function DialogEmails() {
  const [email, setEmail] = useState('')
  const { toast } = useToast()
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    fetch('/api/save-reminder', {
      method: 'POST',
      body: JSON.stringify({email})
    }).then((res) => {
      if (res.status === 200) {
        toast({
          description: "El recordatorio se ha guardado correctamente.",
        })
      }else if (res.status === 400) {
        toast({
          variant: "destructive",
          title: "Error. El correo ya está registrado.",
        })
      }else if (res.status !== 200) {
        toast({
          variant: "destructive",
          title: "Error. No se ha podido guardar el recordatorio.",
          description: "Intentalo de nuevo más tarde.",
        })
      }
      setEmail('')
    }
    )
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xl">¡Dejame un recordatorio!</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Establecer un recordatorio</DialogTitle>
            <DialogDescription>
              Te avisaremos cuando empiece el evento. <br />
              ¡Nada de spam, prometido! 🤖
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tucorreo@email.com"
                className="col-span-3"
              />
            </div>
            <DialogFooter>
              <Button type="submit">Enviar</Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
