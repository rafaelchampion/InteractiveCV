import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="font-heading font-bold text-6xl text-accent-primary mb-4">404</h1>
      <h2 className="font-heading font-semibold text-2xl text-text-primary mb-2">
        Página não encontrada
      </h2>
      <p className="text-sm text-text-secondary max-w-md mb-6">
        A página solicitada não foi localizada. Clique no botão abaixo para retornar ao portfólio interativo.
      </p>
      <Link
        href="/"
        className="text-xs font-semibold px-4 py-2 rounded-full bg-accent-primary text-white hover:bg-accent-secondary transition-all shadow-sm"
      >
        Voltar à página inicial
      </Link>
    </div>
  );
}
