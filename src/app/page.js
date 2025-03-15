import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center p-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 max-w-4x1 mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Profile Picture */}
          <div className="w-32 h-32 md:w-250 md:h-100 relative">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              fill
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* Description */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Software Developer | Transforming Ideas into High-Quality Code</h1>
            <p className="text-lg mb-6">
              Hi, I&#39;m Tomiwa Ogunleye, a highly motivated and detail-oriented Software Developer with a Bachelor of Science in Computer Science from the University of Regina. Proven expertise in developing scalable, maintainable, and reliable code, with a strong commitment to continuous learning and applying software engineering best practices..
            </p>
            <Link
              href="/projects"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              aria-label="View Portfolio"
            >
                <span>View My Work</span>
                <span><ArrowRightIcon className="w-4 h-4" /></span>
            </Link>
          </div>
        </div>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
