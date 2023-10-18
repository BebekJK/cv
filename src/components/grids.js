const Grids = ({windowSize}) => {
    let col = 8;
    let marg = 2;
    let boxSize = Math.floor((windowSize.innerWidth - marg*(col+1)) / col);
    let row = 2.3 *  windowSize.innerHeight / boxSize;
    let cls = `bg-zinc-900 border-transparent`;
    const gridBox = Array.from({length: row}, () => Array(col).fill(<div className={cls} style={{width: `${boxSize}px`, height: `${boxSize}px`, margin: `${marg}px 0px`}}></div>))

    return (
        <div className="w-full h-full fixed flex flex-row flex-wrap justify-evenly">
            {
                gridBox.map((box) => {
                    return (box)
                })
            }
        </div>
    )
}

export default Grids;