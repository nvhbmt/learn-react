function MyButton({ style = {}, ...rest }) {
    return (
        <button
            style={{
                color: 'white',
                backgroundColor: 'green',
                padding: '12px 24px',
                ...style
            }}
            {...rest}
        />
    )
}

export default MyButton
