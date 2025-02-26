import 'react'

function Contact() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </section>
  )
}

export default Contact