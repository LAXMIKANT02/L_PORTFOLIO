type SectionProps = {
  id?: string;
  children: React.ReactNode;
};

function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className="relative py-24">
      {children}
    </section>
  );
}

export default Section;
