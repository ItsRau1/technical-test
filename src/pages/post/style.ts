import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-color: ${props=> props.theme["background"]};
    overflow: hidden;

    @media(max-width: 768px){
        padding: 3rem 1rem;
        overflow: auto;
        align-items: flex-start;
        margin: 0 0 -3rem;
    }
`

const first = keyframes`
    from{
        transform: translateY(500%);
    }
    to{
        transform: translateY(0%);
    }
`

export const PostBox = styled.div`
    background-color: ${props=> props.theme["purple-500"]};
    width: 75%;
    box-shadow: 3px 0 5px 2px rgba(0, 0, 0, 0.4);
    border-radius: 3rem;
    padding: 3rem 2rem 4rem;
    margin: 0 0 -3rem;
    color: ${props=>props.theme["gray-100"]};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    animation: ${first} 0.5s cubic-bezier(0.94, 0.62, 0.05, 0.95);

    @media(max-width: 768px){
        width: auto;
        gap: 2rem; 
        margin: 0 0 -7rem;
        padding: 3rem 1rem 4rem;
    }
`

export const PostTitle = styled.p`
    font-weight: 700;
    font-size: 1.5rem;

    @media(max-width: 768px){
        font-size: 1.5rem;
    }
`

export const PostBody = styled.p`
    text-align: center;
`

export const PostWriterInfo = styled.a`
    display: flex;
    text-decoration: none;
    color: ${props=> props.theme["gray-100"]};
    gap: 0.2rem;
    &:hover{
        p::after {
            width: 100%;
        }
    }
`

export const PostWriterName = styled.p`
        &::after {
        content: '';
        display: block;
        width: 0;
        height: 4px;
        background: ${props=>props.theme["white"]};
        transition: width 0.4s;
        border-radius: 4px;
    }
`

export const PostMainInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`  

export const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    @media(max-width: 768px){
        margin: 2rem 0 0;
        gap: 2rem;
    }
`

export const CommentBox = styled.div`
    background-color: ${props=> props.theme["gray-900"]};
    padding: 0.5rem;
    border-radius: 8px;
    font-size: 0.8rem;
    box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`

export const CommentUserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.2rem;
`

export const CommentUserName = styled.p`
    font-weight: 700;
`

export const CommentName = styled.p`
    font-weight: 700;
    padding: 0 0 0 0.5rem;
`

export const CommentBody = styled.p`
    text-align: center;
`
