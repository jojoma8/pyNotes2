import Image from "next/image";

function Header() {
  return (
    <div>
      <h1>Header</h1>

      {/* Left */}
      <div>
        <Image
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-500x313.png"
          width={40}
          height={40}
          layout="fixed"
        />
      </div>
      {/* Center */}
      {/* Right */}
    </div>
  );
}

export default Header;
