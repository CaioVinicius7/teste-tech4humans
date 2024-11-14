import TMDBLogo from "@/assets/TMDB-logo.svg";

export function Header() {
  return (
    <header className="h-16 bg-[#032541] w-full">
      <div className="w-full max-w-[1420px] px-10 mx-auto flex items-center h-full justify-between">
        <img src={TMDBLogo} alt="TMDB logo" className="h-5" />
      </div>
    </header>
  );
}
