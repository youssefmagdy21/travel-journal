import EarthIcon from "../assets/images/earth-icon.svg";

function Header() {
  return (
    <header
      className="
        h-14
        w-full
        flex
        items-center
        justify-center
        gap-2
      bg-accent
      text-white
        text-sm
        font-medium"
    >
      <img src={EarthIcon} alt="" className=" w-6" />
      <h1 className="">my travel journal.</h1>
    </header>
  );
}

export default Header;
