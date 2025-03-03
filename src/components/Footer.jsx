import 'react'

function Footer() {
  return (
    <footer className="left-0 right-0 mb-0">
      <div className="container mx-auto py-5 bg-white shadow sm:shadow-none border-t-4 border-blue-500">
        <p className="flex flex-row items-center justify-center text-center text-sm text-slate-700">©Copyright {new Date().getFullYear()} | <img className="w-10 h-10 text-white" width="100px" height="100px" src="./images/favicon.png" /></p>
      </div>
    </footer>

  )
}

export default Footer;