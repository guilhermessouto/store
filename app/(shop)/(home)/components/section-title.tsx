interface SectionTitleProps {
  title: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <h2 className="font-bold text-2xl">{title}</h2>
}

export default SectionTitle
