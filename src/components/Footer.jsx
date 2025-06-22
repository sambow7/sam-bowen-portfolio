

export default function Footer() {
  return (
    <footer className="bg-forest dark:bg-fog text-fog dark:text-forest py-8 px-6 text-center text-sm">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <p>© {new Date().getFullYear()} Sam Bowen. All rights reserved.</p>
        <div className="flex space-x-6">
          <a
            href="https://github.com/sambowencode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/samuelbowencode/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}