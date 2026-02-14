const SectionTitle = ({ subTitle, title }) => {
  return (
    <div className="my-16 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold  tracking-tighter mb-4  uppercase">
        {title}
        <span className="text-purple-500 ml-3">_</span>
      </h2>
      <p className="text-slate-300 max-w-xl mx-auto">{subTitle}</p>
    </div>
  );
};
export default SectionTitle;
