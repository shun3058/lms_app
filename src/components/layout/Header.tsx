import Link from 'next/link'

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-indigo-600 hover:text-indigo-500"
          >
            LMS
          </Link>
          <div className="flex gap-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              マイコース
            </Link>
            <Link
              href="/lectures"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              コース一覧
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
