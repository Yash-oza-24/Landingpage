

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="flex items-center justify-between">
        <div>
          <a href="#" className="  text-white font-bold text-4xl">Yash Prajapati</a>
        </div>
        <ul className="flex space-x-4 text-xl text-decoration-none" >
          <li className="nav-item">
            <a href="#" className="text-white  hover:text-gray-300">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="text-white hover:text-gray-300">About</a>
          </li>
          <li className="nav-item">
            <a href="#" className="text-white hover:text-gray-300">Services</a>
          </li>
          <li className="nav-item">
            <a href="#" className="text-white hover:text-gray-300">Products</a>
          </li>
          <li className="nav-item">
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
