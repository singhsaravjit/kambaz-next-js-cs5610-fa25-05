'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function AccountNavigation() {
  const pathname = usePathname();
  

  const isActive = (path: string) => {
    return pathname?.includes(path);
  };

  return (
    <div id="wd-account-navigation" className="list-group rounded-0">
      <Link 
        href="/Account/Signin" 
        className={`list-group-item list-group-item-action border-0 ${
          isActive('Signin') ? 'active border-start border-dark border-4' : 'text-danger'
        }`}
        style={isActive('Signin') ? { backgroundColor: 'white', color: 'black' } : {}}
      >
        Signin
      </Link>
      
      <Link 
        href="/Account/Signup" 
        className={`list-group-item list-group-item-action border-0 ${
          isActive('Signup') ? 'active border-start border-dark border-4' : 'text-danger'
        }`}
        style={isActive('Signup') ? { backgroundColor: 'white', color: 'black' } : {}}
      >
        Signup
      </Link>
      
      <Link 
        href="/Account/Profile" 
        className={`list-group-item list-group-item-action border-0 ${
          isActive('Profile') ? 'active border-start border-dark border-4' : 'text-danger'
        }`}
        style={isActive('Profile') ? { backgroundColor: 'white', color: 'black' } : {}}
      >
        Profile
      </Link>
    </div>
  );
}