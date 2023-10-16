const Grids = ({dim}) => {
    const gridBox = []

    const setBox = () => {
        let col = 10, boxSize = Math.floor(window.innerWidth / col) - 5;
        let row = window.innerHeight / boxSize;
        for(let i=0; i<row; i++){
            for(let j=0; j<col; j++){
                let cls = `bg-zinc-900 border-transparent mx-[2px] my-[2px] w-[128px] h-[128px]`
                gridBox.push((
                    <div className={cls}></div>
                ))
            }
        }
    }
    setBox()

    return (
        <div className="w-full h-full fixed flex flex-row flex-wrap items-center justify-center overflow-hidden">
            {
                gridBox.map((box) => {
                    return (box)
                })
            }
        </div>
    )
}

export default Grids;