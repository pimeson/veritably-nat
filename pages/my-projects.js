import Link from "next/link";
import styled from "styled-components";

const Projects = styled.section`
    margin-top: 1em;
`
const Project = styled.div`
    background-color: 78909C;
`

export default function MyProjects() {
    return (
        <div className="flex flex-col items-center p-10">
            <h1 className="font-bold text-5xl self-start mb-10">Selected Projects</h1>
            <Projects className="mt-4 w-full grid lg:grid-cols-2 sm:grid-cols-1 self-start gap-4">
                <Project className="shadow-md bg-blue-50 p-5 flex rounded-lg">
                    <section className="flex-1">
                        <h2 className="md-text-2xl text-gray-800 mb-3 font-semibold mr-4">
                            Bomb Squad Game (2016)
                        </h2>
                        <h4>Technology Used:</h4>
                        <ul>
                            <li>Angular.JS (1.x)</li>
                            <li>Node + Express</li>
                            <li>Firebase</li>
                        </ul>
                    </section>
                    <a target="_blank" href="http://www.bomb-squad-game.com">
                        <img className="w-56 lg-w-100" src="./projects/bomb-squad-game.png" />
                    </a>
                </Project>
                <Project className="shadow-md bg-blue-50 p-5 flex rounded-lg">
                    <section className="flex-1">
                        <h2 className="md-text-2xl text-gray-800 mb-3 font-semibold mr-4">
                            Matthew Spiegelman Artist Portfolio (2017)
                        </h2>
                        <h4>Technology Used:</h4>
                        <ul>
                            <li>Angular.JS (1.x)</li>
                            <li>Node + Express</li>
                            <li>Postgres</li>
                            <li>ImageMagick</li>
                        </ul>
                    </section>
                    <a target="_blank" href="http://www.msp.ms">
                        <img className="w-56 lg-w-100" src="./projects/msp.png" />
                    </a>
                </Project>
                <Project className="shadow-md bg-blue-50 p-5 flex rounded-lg">
                    <section className="flex-1">
                        <h2 className="md-text-2xl text-gray-800 mb-3 font-semibold mr-4">
                            CSS Training (2018)
                        </h2>
                        <h4>Technology Used:</h4>
                        <ul>
                            <li>Vue</li>
                            <li>CSS 3.0 (Flexbox + CSS Grid)</li>
                        </ul>
                    </section>
                    <a target="_blank" href="https://www.meetup.com/jstl-meetup/events/249004161/">
                        <img className="w-56 lg-w-100" src="./projects/css-training.png" />
                    </a>
                </Project>
            </Projects>
        </div>
    )
}