import Link from 'next/link';

export default function EmailsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Emails</h1>
      <p className="text-sm text-gray-500 mb-6">Lista de emails processados — UI a melhorar (filtros e busca)</p>
      <Link href="/dashboard">Voltar ao dashboard</Link>
    </div>
  );
}


