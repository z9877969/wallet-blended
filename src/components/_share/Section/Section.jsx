import Container from "../Container/Container";

const Section = ({ children, title }) => {
  return (
    <section>
      <Container>
        {title && <h2>{title}</h2>}
        {children}
      </Container>
    </section>
  );
};

export default Section;
