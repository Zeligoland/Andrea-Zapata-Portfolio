const Header = () => {
  return (
    <div className='mx-auto p-20'>
      <div className=' flex justify-between'>
        <h1 className='text-yellow-500 text-5xl leading-20 font-poppins font-bold inline-block max-w-[636px]'>
          Hi, 👋 <br />
          I'm{' '}
          <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold '>
            Andrea
          </span>
          , <br /> Frontend Developer, <br /> Psychologist & Digital <br />
          Solution Provider
        </h1>
        <img src='src\assets\pic.png' className='inline-block'></img>
      </div>
    </div>
  );
};

export default Header;
