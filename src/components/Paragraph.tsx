const aboutMe = "I'm Corey!  I'm a programmer.  I like to eat pepperoni rolls";

function Paragraph(): JSX.Element {
  return (
    <div>
      <p> {aboutMe}</p>
    </div>
  );
}

export default Paragraph;
