

export default function Contact() {
  return (
    <section id="contact" className="bg-fog dark:bg-forest text-forest dark:text-fog py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Get In Touch</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 rounded border border-ash dark:border-sand bg-white dark:bg-moss text-forest dark:text-fog"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 rounded border border-ash dark:border-sand bg-white dark:bg-moss text-forest dark:text-fog"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full p-3 rounded border border-ash dark:border-sand bg-white dark:bg-moss text-forest dark:text-fog"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-sand text-forest dark:bg-ash dark:text-fog font-semibold px-6 py-3 rounded hover:bg-ash dark:hover:bg-sand transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}