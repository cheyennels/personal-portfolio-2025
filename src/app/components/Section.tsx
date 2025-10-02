const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="section">
      <div className="section-content">{children}</div>
    </div>
  )
}

export default Section
