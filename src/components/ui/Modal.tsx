'use client';

export default function Modal({ open, onClose, children }: any) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded p-4 max-w-2xl w-full">
        <div className="mb-2 text-right">
          <button onClick={onClose} className="px-2 py-1">Fechar</button>
        </div>
        {children}
      </div>
    </div>
  );
}
