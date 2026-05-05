import { Button } from '@/components/ui/button';

/**
 * NotFound Page Component
 * Displays when a route is not found
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-[#04055e] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-[#1B4D5C] mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-700 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <a href="/">
          <Button className="bg-[#04055e] hover:bg-[#E55B4B] text-white px-8 py-3 rounded-full font-semibold text-lg">
            Go Home
          </Button>
        </a>
      </div>
    </div>
  );
}
