'use client';

export default function Table({ children, className = '' }: any) {
  return (
    <div className={`w-full overflow-auto ${className}`}>
      <table className="min-w-full">{children}</table>
    </div>
  );
}
