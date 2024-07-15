import ContentPanel from "./ContentPanel"
import Greeting from "./Greeting"
export default function Content() {
    return (
        <main className="h-screen bg-gradient-to-r from-stone-950 to-slate-950">
            <Greeting></Greeting>
            <ContentPanel></ContentPanel>
        </main>
    )
}