

const NavbarComponent = () => {
  return (
    <div className="flex justify-between items-center px-2 py-5">
      <div>
        <h1 className="text-4xl text-slate-200 font-bold">Movie GT<span className="ml-3"><i className="fa-solid fa-film"></i></span></h1>
      </div>
        <ul className="flex justify-center items-center gap-5">
          <li className="text-2xl font-medium active:bg-slate-600 p-2 rounded-md hover:text-slate-500"><a href="#popular">Popular</a></li>
          <li className="text-2xl font-medium active:bg-slate-600 p-2 rounded-md hover:text-slate-500"><a href="#top_rated">Top Rating</a></li>
          <li className="text-2xl font-medium active:bg-slate-600 p-2 rounded-md hover:text-slate-500"><a href="#upcoming">Up Coming</a></li>
        </ul>
    </div>
  )
}

export default NavbarComponent
