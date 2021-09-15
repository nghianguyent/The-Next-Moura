import styled from 'styled-components'

import theme from '../../theme'

export const PostBox = styled.div`
    width: 100%;
    min-height: 83px;
    background-color: ${theme.white};
    padding: 16px 20px;
    padding-bottom: 0;
    text-align: left;
    border: 1px solid ${theme.borderDarkWhite};
    box-shadow: 0 1px 1px rgb(0 0 0 / 4%);
    border-radius: 3px;
    margin-bottom: 10px;
`

export const PostContent = styled.div`
    align-items: center;
`

export const PostInfo = styled.div`
    margin-bottom: 16px;
    display: flex;
    align-items: center;
`

export const PosterIcon = styled.img`
    margin-right: 8px;
    border-radius: 100%;
    width: 36px;
    height: 36px;
`

export const PosterInfo = styled.div`
    font-size: 13px;
    align-items: center;
`

export const PostTag = styled.div`
    margin-left: 10px;
    padding: 6px;
    background-color: ${theme.postTag};
    font-weight: bold;
    border-radius: 30px;
    color: ${theme.white};
    font-size: 12px;
    cursor: pointer;
`

export const PosterName = styled.div`
    margin-bottom: 3px;
    cursor: pointer;
`

export const PosterNameSpan = styled.span`
    font-weight: bold;
    color: ${theme.postBlack};
    &:hover {
        underline: 1px solid ${theme.borderDarkWhite};
    }
`

export const PosterDecryption = styled.span`
    color: ${theme.postGray};
`

export const PosterDecryptionSpan = styled.span``

export const PostMain = styled.div`
    cursor: pointer;
`

export const Question = styled.div`
    margin-bottom: 16px;
    cursor: pointer;
`

export const QuestionSpan = styled.span`
    color: ${theme.postBlack};
    font-size: 18px;
    font-weight: bold;
`

export const QuestionPicture = styled.a`
    margin-bottom: 16px;
`

export const AnswerContent = styled.div`
    margin-bottom: 16px;
`

export const AnswerSpan = styled.span`
    font-size: 18px;
`

export const PostInteraction = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 4px;
`

export const InteractionContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    height: 30px;
`

export const Interaction = styled.div`
    margin: 0 25px;
    align-items: center;
    display: flex;
    height: 100%;
    flex: 1;
    justify-content: center;
    border-radius: 1000px;
    cursor: pointer;
    transition-timing-function: ease-out;
    transition-duration: 180ms;
    &:hover {
        background-color: rgba(0, 0, 1, 0.03);
    }
`

export const Like = styled.span``

export const Comment = styled.span``

export const Share = styled.div``
