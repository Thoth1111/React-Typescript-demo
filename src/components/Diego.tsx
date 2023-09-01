type DiegoProps = {
    children: React.ReactNode
}

const Diego =  (props: DiegoProps) => {
    return (
        <div>
        <h2>{props.children}</h2>
        </div>
    )
}

export default Diego