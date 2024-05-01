import Image from "next/image";

export default function Home() {
  return (
    <main className="">
    <div className="p-4">
        <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="p-2 bg-green-200 rounded">Item 1 - Active</div>
            <div className="p-2 bg-red-200 rounded">Item 2 - Inactive</div>
            <div className="p-2 bg-green-200 rounded">Item 3 - Active</div>
        </div>

        <div className="grid grid-cols-3 gap-4">
            <a href="https://example.com" className="p-2 bg-blue-200 rounded text-center">Example</a>
            <a href="https://another.com" className="p-2 bg-purple-200 rounded text-center">Another</a>
            <a href="https://site.com" className="p-2 bg-pink-200 rounded text-center">Site</a>
        </div>

        <button className="absolute top-0 right-0 p-2 m-4 bg-gray-200 rounded-full">⚙️</button>
    </div>

      <div id="settingsModal" className="hidden fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3 text-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Settings</h3>

                  <div className="mt-2 px-7 py-3">
                      <input type="text" placeholder="Name" className="mb-2 p-1 border rounded w-full" />
                      <input type="url" placeholder="URL" className="mb-2 p-1 border rounded w-full" />
                      <label className="inline-flex items-center mt-3">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" /><span className="ml-2 text-gray-700">Active</span>
                      </label>
                  </div>
                  <div className="items-center px-4 py-3">
                      <button id="closeModal" className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500">
                          Close
                      </button>
                  </div>
              </div>
          </div>
      </div>
    </main>
  );
}
