import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-canvas">
      <Helmet>
        <title>404 — Page Not Found | Orkidoz</title>
      </Helmet>

      <div className="text-center px-6">
        <p className="font-display text-[120px] text-gold/20 leading-none select-none">
          404
        </p>
        <h1 className="font-display text-[40px] text-ink mt-2 leading-tight">
          Page not found
        </h1>
        <p className="text-[15px] text-muted mt-4 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <Link to="/">
            <Button variant="primary">Go Home</Button>
          </Link>
          <Link to="/shop">
            <Button variant="outline">Browse Shop</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
