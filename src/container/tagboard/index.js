import { useState } from 'react'

import {
    BoardContainer,
    BoardTitle,
    BoardHeader,
    BoardContent,
    BoardItem,
    BoardText,
} from './style'

const RenderTagItems = ({ tags }) => {
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

function TagBoard() {
    const [tags, setTags] = useState([
        { tagName: 'Front-end', numberOfPosts: 1000000000 },
        { tagName: 'Back-end', numberOfPosts: 30 },
        { tagName: 'Blockchain', numberOfPosts: 2 },
    ])
    return (
        <BoardContainer>
            <RenderTagItems tags={tags}></RenderTagItems>
        </BoardContainer>
    )
}

export default TagBoard
