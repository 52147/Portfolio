import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <div className="text-white flex overflow-auto flex-row justify-end self-stretch py-12 pr-5 md:pr-52 -mr-px w-full text-xs bg-[url('/Rectangle%2063.png')]
"
        style={{ backgroundPosition: 'center' }}>
        <div className="flex gap-5 justify-between mr-4 md:mr-24 flex-wrap">
          <Link href="#about">About</Link>
          <Link href="#work-experience">Work Experience</Link>
          <Link href="#volunteer">Volunteer</Link>
          <Link href="#ui-ux-design">UI/UX Design</Link>
          <Link href="#skill-set">Skill Set</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </>
  );
}
