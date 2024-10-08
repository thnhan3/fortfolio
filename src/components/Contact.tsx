export default function Contact() {
  return (
    <div className="flex flex-col text-white">
      <div className="px-32 my-10">
        <div className="italic text-xl mb-8">&lt;Contact&gt;</div>
        <div className="flex gap-8">
          {/* col 1 */}
          <div className="w-1/2">
            <div className="mb-10">
              Just give me a message whenever and however you want and we will
              start our cooperation.
            </div>
            <div className="mb-10">
              <p className="uppercase mb-3">My phone:</p>
              <p>0987&nbsp;654&nbsp;321</p>
            </div>

            <div>
              <p className="mb-3 uppercase">Email:</p>
              <p>nhan10@gmail.com</p>
            </div>
          </div>
          {/* col 2 */}
          <div className="w-1/2 pl-4">
            <form className="flex flex-col gap-6" action="">
              <input
                className="border-b p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="name"
                placeholder="Name"
              />

              <input
                className="border-b p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                name="email"
                placeholder="Email"
              />

              <label className="flex flex-col" htmlFor="message">
                Your message
                <textarea
                  className="border-b p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="message"
                  rows={4}
                />
              </label>

              <button className="border-white border px-4 py-2 w-60 self-end">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
