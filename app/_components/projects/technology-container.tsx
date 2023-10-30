export function TechnologyContainer({ technology }: { technology: string }) {
  return (
    <span className='rounded-md border border-indigo-700 bg-indigo-700/10 p-1 text-xs text-purple-600'>
      {technology}
    </span>
  );
}
