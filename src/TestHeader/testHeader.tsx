
type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
};

const TestHeader = ({image} : HeaderProps) => {

    return (
      <header>
        {/* <img  src={image.src} alt={image.alt} /> */}
        <img {...image} />
        <h1>Your Course Goals</h1>
      </header>
    );

}

export default TestHeader