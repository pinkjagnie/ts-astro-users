const Footer = () => {
  return (
    <section className="flex w-full py-2 bg-stone-800 text-zinc-100">
      <p className="w-[80%] text-center text-xs mx-auto">
        &copy; {new Date().getFullYear()} | AstroUsers
      </p>
    </section>
  );
};

export default Footer;
