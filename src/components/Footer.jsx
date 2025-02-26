import 'react'

function Footer() {
  return (
    <footer>
      <div className="container mx-auto py-10 bg-white shadow sm:shadow-none border-t-4 border-blue-500">
        <ul className="flex justify-center flex-wrap text-sm text-slate-600">
          <li className="mx-2"><a href className="inline-block hover:text-slate-900 hover:underline py-2 px-3">Home</a></li>
          <li className="mx-2"><a href className="inline-block hover:text-slate-900 hover:underline py-2 px-3">About</a></li>
          <li className="mx-2"><a href className="inline-block hover:text-slate-900 hover:underline py-2 px-3">Contact</a></li>
        </ul>
        <hr className="my-4" />
        <p className="text-center text-sm text-slate-700">© 2022 Footer. All Rights Reserved</p>
      </div>
    </footer>

  )
}

export default Footer;