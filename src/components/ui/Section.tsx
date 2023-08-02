interface Props {
  title: string
  description: string
  options?: string[]
}
export default function Section({ title, description, options }: Props) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement
    const rect = target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    target.style.setProperty('--mouse-x', `${x}px`)
    target.style.setProperty('--mouse-y', `${y}px`)
    console.log(x, y)
  }
  return (
    <section
      onMouseMove={handleMouseMove}
      className={`flex group relative flex-col gap-3 w-full h-full border rounded-md before:absolute before:top-0 before:left-0 before:h-full before:w-full before:rounded-border-inherit before:opacity-0 before:transition-opacity before:duration-500 before:content-[''] hover:before:opacity-100 card`}>
      <div className="border-b w-full p-5 pb-1">
        <h2 className="text-4xl">{title}</h2>
      </div>
      <div className="p-5 pt-0">
        <p className="text-2xl">{description}</p>
        {options && (
          <ul className="mt-5">
            {options.map((option) => (
              <li className="text-xl">{option}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
