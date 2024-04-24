import Link from 'next/link';

export default function Navbar() {
  return (
    <div
      class="flex flex-col justify-center items-end self-stretch px-16 py-12 w-full text-xs bg-rose-600 max-md:px-5 max-md:max-w-full"
    >
      <div class="flex gap-5 justify-between mr-32 max-md:flex-wrap max-md:mr-2.5">
        <div>About</div>
        <div>Work Experience</div>
        <div>Volunteer</div>
        <div>UI/UX Design</div>
        <div>Skill Set</div>
        <div>Contact</div>
      </div>
    </div>


  );
}
