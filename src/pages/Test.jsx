import styled from "styled-components";
import test from "../assets/model/response_1730273347626.json";

const audioBase64 = test.audio_base64;
const audioSrc = `data:audio/mpeg;base64,${audioBase64}`;
const audioElement = new Audio(audioSrc);

const Main = styled.div`
    button {
        width: 100px;
        height: 200px;
    }
`;

export default function Test() {
    const handlePlay = () => {
        audioElement.play().catch((error) => {
            console.error("오디오 재생 중 오류 발생:", error);
        });
    };

    return (
        <Main>
            <button onClick={handlePlay}>버튼</button>
        </Main>
    );
}