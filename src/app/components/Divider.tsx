interface DividerProps {
  className?: string
}

export default function Divider({ className = '' }: DividerProps) {
  return <hr className={`resume-divider ${className}`.trim()} />
}
