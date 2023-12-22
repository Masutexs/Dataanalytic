function Button({ text, width, height, bgColor, padding }) {

  return (
    <div>
      <button className="font-bold bg-[#00df9b] w-[200px] rounded-md my-6 mx-auto px-6 py-3 text-black">
        {text}
        
      </button>
    </div>
  );
}

export default Button;
