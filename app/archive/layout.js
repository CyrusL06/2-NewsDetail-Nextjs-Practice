// one children prop and parralel prop
// something special happen in the layout content is accesible within the props
//one prop per parrallel props
export default function ArchiveLayout ({archive, latest}){
    return (
        <div>
            <h1>News Archive</h1>
            <section id="archive-filter">{archive}</section>
            <section id="archive-latest">{latest}</section>
        </div>
    );
}