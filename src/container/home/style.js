import styled from 'styled-components'

export const FullPageContainer = styled.div`
    min-height: 100vh;
    background-color: #f1f2f2;
    padding-bottom: 16px;
`

export const HomeContent = styled.div`
    padding-top: 82px;
    width: 1228px;
    display: flex;
    margin: auto;
`

export const MainContent = styled.div`
    width: 768px;
`

export const AskingBox = styled.div`
    width: 100%;
    min-height: 83px;
    background-color: #fff;
    padding: 16px 20px;
    cursor: pointer;
    text-align: left;
    border: 1px solid #dee0e1;
    box-shadow: 0 1px 1px rgb(0 0 0 / 4%);
    border-radius: 3px;
    margin-bottom: 8px;
`

export const AskingTitle = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 14px;
`

export const UserIcon = styled.img`
    border-radius: 100%;
    width: 18px;
    height: 18px;
    margin-right: 4px;
`

export const UserName = styled.span`
    font-size: 13px;
    color: #939598;
`

export const AskQuestion = styled.span`
    font-weight: bold;
    line-height: 1.4;
    font-size: 18px;
    color: #939598;
`

export const PostBox = styled.div`
    width: 100%;
    min-height: 83px;
    background-color: #fff;
    padding: 16px 20px;
    padding-bottom: 0;
    text-align: left;
    border: 1px solid #dee0e1;
    box-shadow: 0 1px 1px rgb(0 0 0 / 4%);
    border-radius: 3px;
    margin-bottom: 10px;
`

export const PostContent = styled.div`
    cursor: pointer;
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
    background-color: #808080;
    font-weight: bold;
    border-radius: 30px;
    color: #fff;
    font-size: 12px;
`

export const PosterName = styled.div`
    margin-bottom: 3px;
`

export const PosterNameSpan = styled.span`
    font-weight: bold;
    color: #282829;
`

export const PosterDecryption = styled.span`
    color: #636466;
`

export const PosterDecryptionSpan = styled.span``

export const Question = styled.div`
    margin-bottom: 16px;
`

export const QuestionSpan = styled.span`
    color: #282829;
    font-size: 18px;
    font-weight: bold;
`

export const QuestionPicture = styled.a`
    cursor: pointer;
    margin-bottom: 16px;
`

export const Answer = styled.div`
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
