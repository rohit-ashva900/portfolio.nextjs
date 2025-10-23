import profile from '@/data/profile';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex gap-4 text-sm">
          <Link className="link" href={profile.social.github}>GitHub</Link>
          <Link className="link" href={profile.social.linkedin}>LinkedIn</Link>
          {profile.social.youtube && <Link className="link" href={profile.social.youtube}>YouTube</Link>}
        </div>
      </div>
    </footer>
  );
}

