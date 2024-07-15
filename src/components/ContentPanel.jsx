import Panel from "./Panel"
export default function ContentPanel() {
    const cars = [
        {
            "img": "/people.png",
            "title": "Crafted for You",
            "content": "Our team of skilled developers, designers, and SEO is dedicated to bringing your vision to life"
        },
        {
            "img": "/idea.png",
            "title": "Crafted for You",
            "content": "We're using the latest technologies in website development to give you an optimized and high quality"
        },
        {
            "img": "/unlock.png",
            "title": "Crafted for You",
            "content": "Your online security is our top priority"
        },
        {
            "img": "/hand-shake.png",
            "title": "Crafted for You",
            "content": "When you choose NovixWeb, you're not just hiring a service prodivder. You're gaining a dedicated partner"
        },
        {
            "img": "/stopwatch.png",
            "title": "Crafted for You",
            "content": "With years of experience in the web development industry, we know what it takes to build a great product"
        },
        {
            "img": "/feather-pen.png",
            "title": "Crafted for You",
            "content": "Our designs are not only visually appealing but also user-friendly, ensuring that your audience stays..."
        },
    ]
    const panels = cars.map((car, index) => <Panel key={index} img={car.img} title={car.title} content={car.content} />)
    return (
        <div className="grid grid-cols-3 justify-items-center py-16 h-96 gap-10">
            {panels}
        </div>
    )
}