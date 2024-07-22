
type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
};

const TestHeader = ({image} : HeaderProps) => {

    return (
      //   <header>
      //     {/* <img  src={image.src} alt={image.alt} /> */}
      //     <img {...image} />
      //     <h1>Your Course Goals</h1>
      //   </header>
      <header className="bg-blue-600 text-white p-4 text-center">
        <img className="mx-auto mb-4 w-32 h-32" {...image} />
        <h1 className="text-2xl font-bold">Your Course Goals</h1>
      </header>
    );

}

export default TestHeader