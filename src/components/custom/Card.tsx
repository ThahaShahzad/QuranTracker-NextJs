interface CardProps {
  id: string;
  className?: string;
}
const Card: React.FC<CardProps> = ({ id, className, children }) => {
  return (
    <section id={id} className={`bg-bg rounded-xl shadow-lg p-8 ${className}`}>
      {children}
    </section>
  );
};

export default Card;
