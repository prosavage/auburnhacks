import Head from 'next/head';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

// server side rendering misses up the map :(
const MapWithNoSSR = dynamic(() => import('../components/map/map'), {
	ssr: false,
});

export default function Home() {
	return (
		<>
			<Head>
				<title>Auburn Hacks</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<MainContainer>
				<SubContainer>
					<BigFont>When</BigFont>
					<p>AuburnHacks is currently planned for February 11th-12th. </p>
					<p>These dates are subject to change due to COVID-19</p>
				</SubContainer>
				<SubContainer>
					<BigFont>Where</BigFont>
					<p>Auburn University</p>
					<MapContainer>
						<MapWithNoSSR />
					</MapContainer>
				</SubContainer>
				<SubContainer>
					<BigFont>What</BigFont>
					<p>
						We are Auburn University’s programming event organized by students,
						for students.
					</p>
					<p>
						With this hackathon, Auburn University's Computer Science & Software
						Engineering comunity
					</p>
					<p>
						strives to promote technological innovation while highlighting our
						students abilities.
					</p>
					<p>
						Partnering with Major League Hacking (MLH), we aim to bring out the
						best and brightest students,
					</p>
					<p>
						not just from Auburn University but from other universities all over
						the United States.
					</p>
				</SubContainer>
			</MainContainer>
		</>
	);
}

const MainContainer = styled.div`
	display: flex;
	padding: 1em 0;
	padding-top: 4em;
	flex-wrap: wrap;
`;
const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2vw;
	padding: 2vw;
	border: 1px black solid;
	border-radius: 25px;
	overflow-wrap: break-word;
`;
const BigFont = styled.h3`
	font-weight: 600;
	font-size: 2em;
	line-height: 90px;
`;
const MapContainer = styled.div`
	height: 200px;
	width: 200px;
`;
