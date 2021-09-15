import PropTypes from 'prop-types'

import TagItem from '../TagItem'
import { BoardContainer } from './style'

const TagBoard = ({ tags }) => {
    return (
        <BoardContainer>
            <TagItem tags={tags}></TagItem>
        </BoardContainer>
    )
}

TagBoard.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string, PropTypes.number),
}

export default TagBoard
