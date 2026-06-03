interface ErrorStateProps {
  message: string;
}

export function ErrorState({
  message,
}: ErrorStateProps) {
  return (
    <div className="rounded-3xl border border-red-200 bg-red-50 p-12 text-center">
      <p className="font-semibold text-red-700">
        {message}
      </p>
    </div>
  );
}
