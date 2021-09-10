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
            <BoardItem>
                <BoardText>Tech (30)</BoardText>
            </BoardItem>
            <BoardItem>
                <BoardText>Blockchain (30)</BoardText>
            </BoardItem>
            <BoardItem>
                <BoardText>Blockchain (30)</BoardText>
            </BoardItem>
        </BoardContent>
    )
}

function TagBoard() {
    const [tags, setTags] = useState([
        { tagName: 'Tech', numberOfPosts: 30 },
        { tagName: 'Tech', numberOfPosts: 30 },
        { tagName: 'Tech', numberOfPosts: 30 },
    ])
    return (
        <BoardContainer>
            <RenderTagItems tags={tags}></RenderTagItems>
        </BoardContainer>
    )
}

export default TagBoard
