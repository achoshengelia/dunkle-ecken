import styled from 'styled-components';

export const Center = styled.div`
	width: 100%;
	max-width: 128rem;
	/* margin-inline: 3rem; */
	margin: 0 3rem;
	@media ${props => props.theme.breakpoints.xs} {
		/* margin-inline: 1.5rem; */
		margin: 0 1.5rem;
	}
`;
