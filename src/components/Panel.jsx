/* eslint-disable react/prop-types */
export default function Panel({ img, title, content }) {
    return (
        <section className="bg-cyan-950 h-80 w-2/3 flex flex-col items-center justify-center rounded-3xl text-white text-center opacity-80 hover:opacity-100 transition-all cursor-pointer">
            <img src={img} alt="icon" className="h-1/6 w-1/8 my-4" />
            <h3 className="text-2xl">{title}</h3>
            <p className="w-9/12">{content}</p>
        </section>
    )
}