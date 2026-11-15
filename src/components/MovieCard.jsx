function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  return (
    <div className="relative overflow-hidden min-h-80 sm:min-h-96 rounded-2xl sm:rounded-3xl bg-white/10 border border-white/10 shadow-xl transition hover:-translate-y-1.5 hover:border-brand-600/50 hover:shadow-2xl">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-56 sm:h-72 m object-cover block bg-neutral-800"
      />
      <h2 className="px-4 pt-4 pb-1.5 text-sm sm:text-base leading-tight text-neutral-900 dark:text-white">
        {movie.Title}
      </h2>
      <p className="px-4 pb-4 text-sm text-neutral-600 dark:text-white/60">{movie.Year}</p>
      <button
        onClick={() => onToggleFavorite(movie)}
        className="absolute top-3 right-3 w-10 h-10 rounded-full border-0 bg-black/65 text-brand-500 text-xl backdrop-blur cursor-pointer transition hover:scale-110 hover:bg-brand-600 hover:text-white"
      >
        {isFavorite ? "♥" : "♡"}
      </button>
      <div className="absolute top-3 left-3 rounded-full border-0 bg-black/65 text-neutral-300 text-[10px] dackdrop-blur py-1 px-2.5 flex items-center uppercase">{movie.Type}</div>
    </div>
  );
}

export default MovieCard;
