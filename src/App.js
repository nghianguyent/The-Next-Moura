import PropTypes from 'prop-types'

function App({ message }) {
    return (
        <div>
            {message} {process.env.REACT_APP_API_URL}
        </div>
    )
}

App.propTypes = {
    message: PropTypes.string.isRequired,
}

export default App
