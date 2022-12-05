import React, { useContext } from "react";
import { StyledLink } from "../Components/Global/Global";
import {
	ButtonContainer,
	ButtonWithoutTask,
	ButtonWithTask,
	HomeContainer,
} from "../Components/Home/HomeStyles";
import { Context } from "../Context/TaskContext";

function Home() {
	const { tasks } = useContext(Context);

	return (
		<HomeContainer>
			<ButtonContainer>
				{tasks.length > 0 && (
					<>
						<StyledLink to="/todo">
							<ButtonWithTask>To Do List</ButtonWithTask>
						</StyledLink>
						<StyledLink to="/pokemon">
							<ButtonWithTask>Pokemon Searcher</ButtonWithTask>
						</StyledLink>
					</>
				)}
				{tasks.length === 0 && (
					<>
						<StyledLink to="/todo">
							<ButtonWithoutTask>To Do List</ButtonWithoutTask>
						</StyledLink>
						<StyledLink to="/pokemon">
							<ButtonWithoutTask>Pokemon Searcher</ButtonWithoutTask>
						</StyledLink>
					</>
				)}
			</ButtonContainer>
		</HomeContainer>
	);
}

export default Home;
