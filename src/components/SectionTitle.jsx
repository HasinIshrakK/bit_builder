const SectionTitle = ({ subTitle, title }) => {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 italic uppercase">
        {title}
        <span className="text-purple-500">_</span>
      </h2>
      <p className="text-slate-400 max-w-xl mx-auto">{subTitle}</p>
    </div>
  );
};
export default SectionTitle;
