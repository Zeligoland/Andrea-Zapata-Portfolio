const Project = () => {
  return (
    <div className='max-w-xs w-full h-567 bg-yellow-300 rounded-lg shadow-lg'>
      <img
        src='src\assets\projectsimg\data-lovers.png'
        className='max-w-full h-1/2 object-cover rounded-t-lg'
      />

      <div className='p-4'></div>
      <h3 className='text-2xl font-bold mb-2'>Data Lovers</h3>
      <p className='text-gray-700 mb-4'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
        optio quod ipsum quia, necessitatibus dolor adipisci consectetur soluta
        ab?.
      </p>

      <div className='flex justify-end'>
        <a
          href='ruta-al-proyecto'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'
        >
          Ver proyecto
        </a>
        <a
          href='ruta-al-repositorio'
          className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
        >
          Repositorio
        </a>
      </div>
    </div>
  );
};

export default Project;
