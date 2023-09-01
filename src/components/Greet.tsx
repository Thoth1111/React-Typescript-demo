type GreetProps = {
    name: string;
}

const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>Welcome {props.name}! You have 12 unread messages</h2>
        </div>
    )
}

export default Greet;