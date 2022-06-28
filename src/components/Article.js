function Article({title, date, preview, minutes}) {
    function minutesToRead(minutes) {
        if (minutes > 30) {
            const num = Math.ceil(minutes / 10)
            const icon = "🍱"
            let result = ""
            for (let i = 0; i < num; i++) {
                result += icon
            }
            // console.log(result)
            return result + ` ${minutes} min read`
        } else {
            const num = Math.ceil(minutes / 5)
            const icon = "☕️"
            let result = ""
            for (let i = 0; i < num; i++) {
                result += icon
            }
            // console.log(result)
            return result + ` ${minutes} min read`
        }
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date ? date : "January 1, 1970"} - {minutesToRead(minutes)}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article