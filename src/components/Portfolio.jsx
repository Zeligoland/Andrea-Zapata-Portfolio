import Project from './Project';

const Portfolio = () => {
  return (
    <>
      <div className='mt-10'>
        <h2 className='font-poppins text-yellow-500 text-4xl text-center font-bold'>
          Portfolio
        </h2>
        <p className='font-poppins text-yellow-500 text-2xl text-center mt-4'>
          These are some projects I have done.
        </p>
      </div>

      <div className='flex justify-center items-center h-screen'>
        <div className='mt-10 grid grid-cols-3 grid-rows-2 gap-4'>
          <Project className='mx-auto' />
          <Project className='mx-auto' />
          <Project className='mx-auto' />
          <Project className='mx-auto' />
          <Project className='mx-auto' />
          <Project className='mx-auto' />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
