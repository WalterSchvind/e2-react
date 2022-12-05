import React, { useContext, useEffect } from "react";
import { PokemonContext } from "../../Context/PokeContext";
import {
	CardContainer,
	DataContainer,
	ImgContainer,
	PokeImg,
	PokemonContainer,
	PokeName,
	
} from "./PokeCardStyles";

function PokeCard() {
	const { pokemon } = useContext(PokemonContext);

	useEffect(() => {
		console.log(pokemon.data);
	}, [pokemon]);

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return (
		<PokemonContainer>
			{pokemon.data !== undefined && (
				<CardContainer>
					<ImgContainer>
						<PokeImg src={pokemon?.data?.sprites?.other?.["official-artwork"]?.front_default} />
					</ImgContainer>
					<DataContainer>
						<PokeName>{capitalizeFirstLetter(pokemon?.data?.name)}</PokeName>
					</DataContainer>
					
				</CardContainer>
			)}
		</PokemonContainer>
	);
}

export default PokeCard;
