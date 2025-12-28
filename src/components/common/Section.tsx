import { SectionTitle } from "./SectionTitle"

export const Section = ({ title, children }: React.PropsWithChildren<{ title: string }>) => {
  return     <section className="py-8">

    <div className="flex flex-col gap-3 max-w-7xl mx-auto px-8">
                  <SectionTitle title={title} />
      
        {children}
      </div>
  </section>
}
