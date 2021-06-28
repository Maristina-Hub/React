export const Book = (props) => {
    const clickHandler = () => {
        alert('Hello World');
    }
    const { img, title, author } = props
    return(
        <article className = 'book'>
            <img src={img} alt='' />
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h4>{author}</h4>
            <button type='button' onClick={clickHandler}>Example</button>
        </article>
    );  
    }

    