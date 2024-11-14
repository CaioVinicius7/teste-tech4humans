import TMDBLogo from "@/assets/TMDB-logo.svg";

export function Header() {
  return (
    <header className="h-16 w-full bg-[#032541]">
      <div className="mx-auto flex h-full w-full max-w-[1420px] items-center justify-between px-10">
        <img src={TMDBLogo} alt="TMDB logo" className="h-5" />
      </div>
    </header>
  );
}
