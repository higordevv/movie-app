function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-6 py-3 rounded-full bg-stone-700 text-white flex justify-center items-center font-light text-xl hover:border border-orange-400">
      {children}
    </button>
  );
}
export default Button;
