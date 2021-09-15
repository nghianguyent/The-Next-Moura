import PropTypes from 'prop-types'

import { BoardTitle, BoardHeader, BoardContent, BoardItem, BoardText } from './style'

const TagItem = ({ tags }) => {
    return (
        <BoardContent>
            <BoardTitle>
                <BoardHeader>TOP TAG</BoardHeader>
            </BoardTitle>
            {tags.map((tag) => (
                <BoardItem key={tag.idx}>
                    <BoardText>{tag.tagName + ' (' + tag.numberOfPosts + ')'}</BoardText>
                </BoardItem>
            ))}
        </BoardContent>
    )
}

TagItem.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string, PropTypes.number),
}

export default TagItem
