const ColorChanger = ({ color, changeClr }) => {
    console.log(color);
    return (
        <div
            className="color__container"
            style={{ backgroundColor: color }}
        >
            <header>
                <h1>Color Change</h1>
            </header>
            <div className="clr__box">
                <p>Color: {color}</p>
                <button onClick={changeClr}>
                    Click Me
                </button>
            </div>
        </div>
    );
}

export default ColorChanger;