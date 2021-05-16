import Link from "next/link";
import styled from "styled-components";

const Projects = styled.section`
    margin-top: 1em;
`
const Project = styled.div`
    padding: 10px;
    background-color: 78909C;
`

export default function MyProjects() {
    return (
        <div className="max-w-screen-md flex flex-col items-center p-5">
            <h1 className="font-bold text-5xl self-start"> Projects</h1>
            <Projects className="mt-4 grid grid-cols-1 self-start">
                <Project>
                    <h1 className="text-lg font-semibold">
                        Matthew Spiegelman Artist Portfolio
                    </h1>
                    <a href="http://www.msp.ms">
                        <img className="max-w-md" src="./projects/msp.png" />
                    </a>
                </Project>
            </Projects>
        </div>
    )
}