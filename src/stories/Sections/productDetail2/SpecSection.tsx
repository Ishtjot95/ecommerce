import type { SpecSectionProps } from "@/types"

export const SpecSection = ({ title, specs }: SpecSectionProps) => {
  return (
    <div className="mb-6">
      <h3 className="font-normal text-xl mb-4">
        {title}
      </h3>
      {specs.map((spec, index) => (
        <div
          key={index}
          className="flex justify-between border-b mb-6 pb-2"
        >
          <span className="font-light text-sm">{spec.label}</span>
          <span className="font-light text-sm">
            {spec.value}
          </span>
        </div>
      ))}
    </div>
  )
}