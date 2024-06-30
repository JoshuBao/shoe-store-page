import Link from 'next/link';

const Header = () => {
  return (
    <header className="navbar bg-base-100  border">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          10IS
        </Link>
        <nav className="flex space-x-4">
          <Link href="/blog" className="btn btn-ghost">
            BLOG
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            CONTACT
          </Link>
          <Link href="/about" className="btn btn-ghost">
            ABOUT US
          </Link>
          {/* <Link href="/pickleball" className="btn btn-ghost">
            PICKLEBALL
          </Link> */}
        </nav>
        <div className="flex space-x-4">
          <Link href="/account" className="btn btn-ghost">
            Account
          </Link>
          <Link href="/cart" className="btn btn-ghost">
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
