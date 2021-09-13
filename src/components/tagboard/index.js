import { useState } from 'react'

import TagItem from '../TagItem'
import { BoardContainer } from './style'

const TagBoard = () => {
    const [tags, setTags] = useState([
        { tagName: 'Front-end', numberOfPosts: 1000000 },
        { tagName: 'Back-end', numberOfPosts: 30 },
        { tagName: 'Blockchain', numberOfPosts: 2 },
    ])
    return (
        <BoardContainer>
            <TagItem tags={tags}></TagItem>
        </BoardContainer>
    )
}

export default TagBoard
