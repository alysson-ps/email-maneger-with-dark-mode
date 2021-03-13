import Avatar from './components/Avatar';

export default function Home() {
  return (
    <div className="relative group">
      <a
        href="#"
        className="no-underline text-white md:text-blue-dark flex items-center py-4 border-b border-blue-dark group-hover:border-grey-light"
      >
        <svg
          className="h-6 w-6 fill-current mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M18.783 12c0-1.049.646-1.875 1.617-2.443a8.932 8.932 0 0 0-.692-1.672c-1.089.285-1.97-.141-2.711-.883-.741-.74-.968-1.621-.683-2.711a8.732 8.732 0 0 0-1.672-.691c-.568.97-1.595 1.615-2.642 1.615-1.048 0-2.074-.645-2.643-1.615-.58.172-1.14.403-1.671.691.285 1.09.059 1.971-.684 2.711-.74.742-1.621 1.168-2.711.883A8.797 8.797 0 0 0 3.6 9.557c.97.568 1.615 1.394 1.615 2.443 0 1.047-.645 2.074-1.615 2.643.173.58.404 1.14.691 1.672 1.09-.285 1.971-.059 2.711.682.741.742.969 1.623.684 2.711.532.288 1.092.52 1.672.693.568-.973 1.595-1.617 2.643-1.617 1.047 0 2.074.645 2.643 1.617a8.963 8.963 0 0 0 1.672-.693c-.285-1.088-.059-1.969.683-2.711.741-.74 1.622-1.166 2.711-.883.287-.532.52-1.092.692-1.672-.973-.569-1.619-1.395-1.619-2.442zM12 15.652a3.653 3.653 0 1 1 0-7.306 3.653 3.653 0 0 1 0 7.306z"
            fill-rule="nonzero"
          ></path>
        </svg>
        Settings
      </a>

      <div className="items-center absolute border border-t-0 rounded-b-lg p-1 bg-white p-2 invisible group-hover:visible w-auto">
        <a href="#" className="px-4 py-2 block text-black hover:bg-grey-lighter">
          Manage Stores
        </a>
        <a href="#" className="px-4 py-2 block text-black hover:bg-grey-lighter">
          Manage Users
        </a>
        <hr className="border-t mx-2 border-grey-ligght" />
        <a href="#" className="px-4 py-2 block text-black hover:bg-grey-lighter">
          Example Nav
        </a>
      </div>
    </div>
  );
}
