import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    padding: 2em;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`

const StyledPokeCard = styled.div`
    background-color: lightgrey;
    padding: 1.5em;
    border-radius: 50px;
    h1 {
        font-weight: bold;
        font-size: 2em;
        margin-bottom: 5px;
    }
    input {
        display: block;
        padding: 3px;
    }
    button {
        background-color: #78909c;
        display: block;
        color: white;
        border: 1px solid black;
        padding: .5em;
        margin-top: 5px;
        :hover {
            background-color: #78909c;
;
        }
    }
    th {
        text-align: left;
    }
    tr {
        td:first-of-type {
            font-weight: bold;
        }
    }
`

function getPokemonNumbers() {
    const numbers = []

    for (let i = 0; i < 6; i++) {
        numbers.push(Math.ceil(Math.random() * 898))
    }

    return numbers
}

function Pokecard({ pokeNumber }) {
    const [selectedPokemon, setSelectedPokemon] = useState(null)

    useEffect(() => {
        if (!pokeNumber) return

        let isSubcribed = true

        function getPokemon() {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error("Ugh oh")
                    }

                    return res.json()
                })
                .then(json => {
                    if (isSubcribed) {
                        setSelectedPokemon(json)
                    }
                })
                .catch((e) => {
                    console.log(e)
                })


        }
        getPokemon()

        return () => isSubcribed = false
    }, [pokeNumber])

    return (
        <StyledPokeCard>
            <CardContents selectedPokemon={selectedPokemon} />
        </StyledPokeCard>
    )
}

function CardContents({ selectedPokemon }) {
    if (!selectedPokemon) return null

    return (<div>
        <h1 className="text-center">{selectedPokemon.name.toUpperCase()}</h1>
        <div className="flex">
            <img className="object-contain w-30" src={selectedPokemon.sprites.front_default} />
            <table className="table-auto flex-1 bg-green-200 m-3">
                {selectedPokemon.stats.map(statObj => {
                    {/* return {
                    statName: statObj.stat.name,
                    stat: statObj.base_stat
                } */}
                    return (<tr key={`${selectedPokemon}-${statObj.stat.name}`}>
                        <td>{statObj.stat.name.toUpperCase()}</td>
                        <td>{statObj.base_stat}</td>
                    </tr>)
                })}
            </table>
        </div>
    </div>)
}

export default function Test() {
    // const inputRef = useRef()
    // const previousInput = useRef('')
    const [partyNumbers, setPartyNumbers] = useState(getPokemonNumbers())


    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     if (previousInput.current) {

    //         console.log(`The previous time you clicked the input was: ${previousInput.current}`)
    //     }
    //     previousInput.current = inputRef.current.value
    //     console.log(inputRef.current.value)
    // }

    return (
        <>
            <Cards>
                {partyNumbers.map(num => (
                    <Pokecard key={num} pokeNumber={num} />
                ))}
            </Cards>
            <button className="w-32 self-center border-gray-500 shadow-md p-8" onClick={() => setPartyNumbers(getPokemonNumbers())}>Mix it up</button>
        </>
    )
}