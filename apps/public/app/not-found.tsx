import Link from 'next/link';
import { MotionDiv } from '@/components/ClientMotion';

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container-custom text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/" className="btn-primary text-lg px-8 py-4">
            Go Back Home
          </Link>
        </MotionDiv>
      </div>
    </div>
  );
}
