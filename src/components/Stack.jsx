const Stack = () => {
  return (
    <div className='mt-6'>
      <h2 className='font-poppins text-yellow-500 text-4xl text-center font-bold'>
        My Tech Stack
      </h2>
      <p className='font-poppins text-yellow-500 text-2xl text-center mt-4'>
        I have experience with these technologies and I'm going for more!
      </p>
      <div className="grid grid-rows-2 gap-6 mt-10">
        <div className="grid grid-cols-5 place-items-center">
          <img src='src\assets\vscode-icons_file-type-html.png'></img>
          <img src='src\assets\vscode-icons_file-type-css.png' ></img>
          <img src='src\assets\vscode-icons_file-type-js-official.png' ></img>
          <img src='src\assets\logos_react.png' ></img>
          <img src='src\assets\logos_git-icon.png' ></img>
        </div>

        <div className="grid grid-cols-5 place-items-center">
          <img src='src\assets\vscode-icons_file-type-jest.png' ></img>
          <img src='src\assets\vscode-icons_file-type-tailwind.png' ></img>
          <img src='src\assets\vscode-icons_file-type-vscode.png' ></img>
          <img src='src\assets\vscode-icons_file-type-figma.png' ></img>
          <img src='src\assets\akar-icons_github-fill.png' ></img>
        </div>
      </div>
    </div>
  );
};

export default Stack;
