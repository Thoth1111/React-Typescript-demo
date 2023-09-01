type GreetProps = {
    name: string
    //Adding a question mark after the property name makes it optional
    messageCount?: number
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
    //if messageCount is not passed, it will be undefined so we set it to 0 by default
    const { messageCount = 0 } = props
    return (
        <div>
            <h2>
                {
                props.isLoggedIn ? `Welcome ${props.name}! You have ${messageCount} unread messages`
                : 'Welcome Guest!'
                 }
            </h2>
        </div>
    )
}

export default Greet;