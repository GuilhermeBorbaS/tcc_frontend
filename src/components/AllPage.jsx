import Apresentation from "./Apresentation";
import Details from "./Details";
import ListImages from "./ListImages";

export default function AllPage() {
    return (
        <div className="w-full flex flex-col">
            <Apresentation/>
            <Details/>
            <ListImages/>
        </div>
    )
}