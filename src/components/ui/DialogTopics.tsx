import { Button, buttonVariants } from '@/components/ui/button.tsx'
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

import { useState } from 'react'
import { useToast } from './use-toast.ts'

export function DialogTopics() {
  const arrayTemas = ["Halloween","Navidad","Verano","Invierno","Primavera","Otoño","Carnaval","Cine","Videojuegos","Música","Deportes","Animales","Comida","Tecnología","Historia","Fantasía","Ciencia ficción","Misterio","Terror","Romance","Aventura","Acción","Comedia","Drama","Thriller","Documental","Musical","Western","Guerra","Superhéroes","Espionaje","Crimen","Política","Biográfico","Infantil","Animación","Anime","Manga","Cómic","Novela gráfica","Literatura","Poesía","Teatro","Danza","Arte","Fotografía","Moda","Arquitectura","Diseño","Cultura","Viajes","Naturaleza","Ciencia","Salud","Medicina","Psicología","Economía","Negocios","Finanzas","Marketing","Publicidad","Emprendimiento","Liderazgo","Productividad","Desarrollo personal","Desarrollo profesional","Idiomas","Programación","Diseño","Videojuegos","Cocina","Manualidades","Jardinería","Bricolaje","Música","Baile","Canto","Instrumentos","Deportes","Fitness","Yoga","Pilates","Meditación","Mindfulness","Espiritualidad","Religión","Astrología","Tarot","Mascotas","Cine","Series","Videojuegos","Música","Deportes","Animales","Comida","Tecnología","Historia","Fantasía","Ciencia ficción","Misterio","Terror","Romance","Aventura","Acción","Comedia","Drama","Thriller","Documental","Musical","Western","Guerra","Superhéroes","Espionaje","Crimen","Política","Biográfico","Infantil","Animación","Anime","Manga","Cómic","Novela gráfica","Literatura","Poesía","Teatro","Danza","Arte","Fotografía","Moda","Arquitectura","Diseño","Cultura","Viajes","Naturaleza","Ciencia","Salud","Medicina","Psicología","Economía","Negocios"]

  const [topic, setTopic] = useState('')
  const [loading, setLoading] = useState(false)
  const [randomTopic, setRandomTopic] = useState(arrayTemas[Math.floor(Math.random() * arrayTemas.length)])
  const { toast } = useToast()
  const getRandomTopic = () => {
    setRandomTopic(arrayTemas[Math.floor(Math.random() * arrayTemas.length)])
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    setLoading(true)
    fetch('/api/save-topic', {
      method: 'POST',
      body: JSON.stringify({topic}) 
    }).then((res) => {
      if (res.status === 200) {
        toast({
          description: "La sugerencia se ha enviado correctamente.",
        })
      }else if (res.status !==200) {
        toast({
          variant: "destructive",
          title: "Error. No se ha podido enviar la sugerencia.",
          description: "Intentalo de nuevo más tarde.",
        })
      }
      setTopic('')
      setLoading(false)
    }
    )

  }

  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button
            onClick={getRandomTopic}
            className={buttonVariants({ variant: 'secondary' }) + ' text-xl'}>
            
            Sugerir tema
          </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>¡Sugiere un tema para la KuroJam!</DialogTitle>
            <DialogDescription>
              Eligiremos el tema en el directo de forma completamente aleatoria.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="topic" className="text-right">
                Tema
              </Label>
              <Input
                id="topic"
                name="topic"
                type="text"
                value={topic}
                onChange={(e:any) => setTopic(e.target.value)}
                placeholder={randomTopic}
                className="col-span-3"
              />
            </div>
            <DialogFooter>
              <Button type="submit" disabled={loading} >{loading ? 'Enviando...' : 'Enviar'}</Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
     
    </Dialog>
  )
}
