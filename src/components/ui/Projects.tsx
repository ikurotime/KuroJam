interface Props {
  title: string
  description: string
  options?: string[]
  src: string
  srcProject?: string
  srcGithub?: string
}
export default function Projects({
  title,
  description,
  options,
  src,
  srcGithub,
  srcProject
}: Props) {
  return (
    <section
      className={`flex group relative flex-col gap-3 w-full h-full border rounded-md card`}>
      <div className="border-b w-full p-3 pb-1 min-h-[3rem]">
        <h2 className="text-3xl leading-8">{title}</h2>
      </div>
      <div className="p-3 pt-0 flex gap-5 text-center items-center ">
        <img src={src} alt="" className="w-full max-w-lg" />
        <div className="flex gap-5 flex-col">
          <p className="text-2xl">{description}</p>
          {options && (
            <ul className="mt-5">
              {options.map((option) => (
                <li key={option} className="text-xl">
                  {option}
                </li>
              ))}
            </ul>
          )}
          <div className="flex-1 gap-5 flex justify-center">
            {srcProject && (
              <a
                className="px-4 py-2 rounded-md border text-center"
                rel="noreferrer"
                target="_blank"
                href={srcProject}>
                Ver proyecto
              </a>
            )}
            {srcGithub && (
              <a
                className="px-4 py-2 rounded-md border"
                rel="noreferrer"
                target="_blank"
                href={srcGithub}>
                Github
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
