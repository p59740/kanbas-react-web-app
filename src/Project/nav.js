import { Link, useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();

  const linksMap = [
    { label: 'Home', path: '/project/home' },
    { label: 'Search', path: '/project/search' },
    { label: 'SignIn', path: '/project/signin' },
    { label: 'SignUp', path: '/project/signup' },
    { label: 'Users', path: '/project/admin/users' },
    { label: 'Account', path: '/project/account' },
  ];

  return (
    <div className="list-group">
      {linksMap.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={`list-group-item list-group-item-action ${pathname.includes(item.path) && "active"}`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default Nav;
