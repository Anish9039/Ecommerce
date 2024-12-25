import React from "react";

function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-gray-500">
            <span>Home / </span>
            <span className="text-gray-800 font-medium">My Account</span>
          </div>
          <div className="text-gray-700">
            Welcome! <span className="text-red-500 font-bold">Md Rimel</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white shadow-lg p-4">
          <nav className="space-y-6">
            <div className="text-gray-800 font-bold">Manage My Account</div>
            <ul className="space-y-2">
              <li className="text-red-500 font-medium">My Profile</li>
              <li className="text-gray-600 hover:text-red-500">Address Book</li>
              <li className="text-gray-600 hover:text-red-500">My Payment Options</li>
            </ul>

            <div className="text-gray-800 font-bold">My Orders</div>
            <ul className="space-y-2">
              <li className="text-gray-600 hover:text-red-500">My Returns</li>
              <li className="text-gray-600 hover:text-red-500">My Cancellations</li>
            </ul>

            <div className="text-gray-800 font-bold">My Wishlist</div>
          </nav>
        </aside>

        {/* Main Form */}
        <main className="flex-1 bg-white shadow-lg p-8">
          <h2 className="text-red-500 text-lg font-semibold mb-4">Edit Your Profile</h2>
          <form className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  value="Md"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  value="Rimel"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            {/* Email and Address */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value="rimel1111@gmail.com"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  value="Kingston, 5236, United State"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            {/* Password Fields */}
            <div>
              <h3 className="text-gray-800 font-medium mb-2">Password Changes</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Current Password</label>
                  <input
                    type="password"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">New Password</label>
                  <input
                    type="password"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600"
              >
                Save Changes
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default ProfilePage;
