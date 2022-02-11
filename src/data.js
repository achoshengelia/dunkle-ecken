import fiona from './/assets/ArtistsPictures/fiona.jpg';
import dovile from './assets/ArtistsPictures/dovile.png';
import valentina from './assets/ArtistsPictures/valentina.png';
import asisi from './assets/ArtistsPictures/asisi.jpg';
import winona from './assets/ArtistsPictures/winona.jpg';
import hilka from './assets/ArtistsPictures/zora_hilka_meret.jpg';
import elisa from './assets/ArtistsPictures/elisa.png';
import ale from './assets/ArtistsPictures/alessandra.png';
import indra from './assets/ArtistsPictures/indra.png';
import montau from './assets/ArtistsPictures/montau.png';
import manfred from './assets/ArtistsPictures/manfred.jpg';
import merani from './assets/ArtistsPictures/merani.png';
import isa from './assets/ArtistsPictures/isabelle.jpg';
import lukas from './assets/ArtistsPictures/lukas.jpg';
import raphael from './assets/ArtistsPictures/raphael.png';
import carolina from './assets/ArtistsPictures/carolina.jpg';
import david from './assets/ArtistsPictures/david.jpg';
import isa2 from './assets/ArtistsPictures/isabelle2.jpg';
import nia from './assets/ArtistsPictures/nia.jpeg';

export const artistsData = [
	{
		name: 'DOVILÉ ALEKSAITÉ',
		portfolio: 'https://www.aleksaite.com/',
		img: dovile,
	},
	{
		name: 'VALENTINA ALEXANDER',
		portfolio: 'https://valentinaalexander.com/',
		img: valentina,
	},
	{
		name: 'ELIAS ASISI',
		portfolio: 'http://asisi.io/',
		img: asisi,
	},
	{
		name: 'FIONA BELOUSZ',
		portfolio: 'https://www.fionabelousz.com/',
		img: fiona,
	},
	{
		name: 'WINONA BOGNER',
		portfolio:
			'http://spacesofcommunication.de/category/students/winona-bogner/',
		img: winona,
	},
	{
		name: 'ELISA JULE BRAUN',
		portfolio: 'http://www.elisabraun.de/1_work.html',
		img: elisa,
	},
	{
		name: 'HILKA DIRKS ',
		portfolio: 'https://www.instagram.com/erwinbiel/?hl=en',
		img: hilka,
	},
	{
		name: 'ALESSANDRA FOCHESATO',
		portfolio: 'https://alessandrafochesato.com/',
		img: ale,
	},
	{
		name: 'INDRA L. FRINGS',
		portfolio: 'https://www.instagram.com/somaphonk/',
		img: indra,
	},
	{
		name: 'HANNAH FÜSSER',
		portfolio:
			'http://spacesofcommunication.de/category/students/hannah-fuesser',
		img: winona,
	},
	{
		name: 'ZORA HÜNERMANN',
		portfolio:
			'http://spacesofcommunication.de/category/students/zora-huenermann',
		img: hilka,
	},
	{
		name: 'MANFRED ELIAS KNORR',
		portfolio: 'https://www.instagram.com/manfredeliasknorr/?hl=en',
		img: manfred,
	},
	{
		name: 'TING LUI ',
		portfolio: 'http://spacesofcommunication.de/category/students/ting-liu/',
		img: winona,
	},
	{
		name: 'MONTAU',
		portfolio: 'https://soundcloud.com/montau',
		img: montau,
	},
	{
		name: 'ISABELLE ÖSTLUND ',
		portfolio: 'https://www.instagram.com/isabelleostlund/?hl=en',
		img: isa2,
	},
	{
		name: 'RAPHAEL POHL',
		portfolio: 'https://www.instagram.com/raphael_pohl_daenke/',
		img: raphael,
	},
	{
		name: 'NIA LEJANDER',
		portfolio: '',
		img: nia,
	},
	{
		name: 'DAVID REITENBACH',
		portfolio: 'd.reitenbach@udk-berlin.de',
		img: david,
	},
	{
		name: 'MERANI SCHILCHER',
		portfolio: 'https://meranischilcher.de/',
		img: merani,
	},
	{
		name: 'MERET SCHMIESE',
		portfolio:
			'http://spacesofcommunication.de/category/students/meret-schmiese',
		img: hilka,
	},
	{
		name: 'CAROLINA STIELER',
		portfolio: 'https://www.instagram.com/Trimetilamina/',
		img: carolina,
	},
	{
		name: 'LUKAS WINTER',
		portfolio: 'https://www.instagram.com/lukas.wtr/',
		img: lukas,
	},
];

export const exhibitionData = [
	{
		id: 'GroundStudies',
		artName: 'Ground Studies',
		artistName: 'Fiona Belousz',
		image: fiona,
		description: (
			<>
				How do we experience the stability of the ground? Which parameters
				define the instability of our environment? Stable ground keeps us from
				falling. <br />
				<br />
				The installation is based on material displacement; when choosing
				materials with different structural stability and different material
				conditions, you are confronted with a walkable structure. These
				materials surround us in everyday life, but as part of larger structures
				they usually remain invisible. Walking through the installation creates
				a tactile experience.
			</>
		),
		info: (
			<>
				Installation, 2019 <br /> Photo: Manuel Ahnemüller
			</>
		),
		externalLink: '',
		linkName: '',
	},
	{
		id: 'unstable',
		artName: 'un/stable',
		artistName: 'Winona Bogner, Hannah Füsser, Ting Lui',
		image: winona,
		description: (
			<>
				{' '}
				The <em>un/stable</em> range of seating furniture includes two groups
				that contribute to a modification of the sitting sensation. What happens
				if the seating no longer conforms to the original habits? Is it
				conceivable to create a different level of communication by changing the
				furniture?{' '}
			</>
		),
		info: 'Installation, 2019',
		externalLink: '',
		linkName: '',
	},
	{
		id: 'ZwispaltConflict',
		artName: 'Zwispalt (Conflict)',
		artistName: 'David Reitenbach',
		image: david,
		description: '',
		info: '',
		externalLink: '',
		linkName: '',
	},
	{
		id: 'ForyouCENSORED',
		artName: 'For you CENSORED',
		artistName: 'Raphael Pohl',
		image: raphael,
		description: (
			<>
				'The three-part act connects with the humanitarian intelligence of our
				society, it is divided into the "bite" - "smell" - "look". The biting of
				fingernails calms me in my dystopian state. <br /> <br /> I bite faster
				and harder, only small pieces of nail are torn and bitten off with my
				incisors. I can think and bite. <br /> <br /> The smell of the
				fingernail makes me understand what I am doing. A part of me thinks I
				smell myself. The smell gives me a temporary feeling of well-being,
				afterwards my body has the will to bite further. The stress is
				materialised and reduced. <br />
				<br />
				Looking determines where I really am. I determine which nails are still
				to be bitten. The moment of looking transforms into a new beginning of
				the three-part act.
			</>
		),
		info: (
			<>
				Video, 2:59, 2019 <br /> Sound design: Thomas Bua
			</>
		),
		externalLink: 'https://vimeo.com/raphaelpohl"',
		linkName: 'See work',
	},

	{
		id: 'FügungAddendum',
		artName: 'Fügung (Addendum)',
		artistName: 'Lukas Winter',
		image: lukas,
		description: (
			<>
				When one takes part in life in a society, one automatically; consciously
				or unconsciously; voluntarily or compulsorily; integrates into
				structures. These structures can be either open, or narrow. They can
				give the individual stability and support, but also inhibit, restrict,
				or limit their potential, abilities or even their rights. <br /> <br />
				The awareness of their presence usually only sets in when there is a
				negative influence on doing, acting and thinking. If one finds oneself
				in a state of powerless recognition that one has settled into structures
				that do not correspond to one's own self-image, self-doubt sets in.
				Growing self-doubts can lead to an unstable existence.
				<br /> <br /> Explicit structures in everyday life should help people
				with mental illnesses in particular to find their way back to a
				regulated state of being. The predefined structures of the objects shown
				here force you to orient yourself by them. A comfortable sitting
				position is only possible if one adopts and conforms to the intended
				posture. <br />
				<br /> He who submits, fills, fills the joint. If one fills, one holds.
				One holds together, supports. Takes the empty space. Take the space.
				Space takes movement. Takes freedom. Gives support - one receives
				support. One experiences. Is relieved. Gives way.
			</>
		),
		info: 'Installation, 2019',
		externalLink: 'https://www.youtube.com/watch?v=4uEdfvQqYwk&ab_channel=AG',
		linkName: 'See work',
	},
	{
		id: 'DasletzteHemdhatkeineTaschen',
		artName: 'Das letzte Hemd hat keine Taschen',
		artistName: 'Elias Manfred Knorr',
		image: manfred,
		description: (
			<>
				The project <em>the last shirt has no pockets</em> offers a contemporary
				alternative to traditional funeral rituals. By slowly dressing the
				corpse, it wants to establish a last intimate moment between him and the
				bereaved, thus offering a dignified farewell.
			</>
		),
		info: (
			<>
				Installation, 2017 <br />
				Photo: Franziska Ziegler
			</>
		),
		externalLink: 'https://vimeo.com/341223793',
		linkName: 'See work',
	},
	{
		id: 'TheBlues',
		artName: 'The Blues',
		artistName: 'Isabelle Östlund',
		image: isa,
		description: (
			<>
				In Isabelle Östlund's series <em>THE BLUES</em>, the state of mind
				becomes reality. The depression, formerly known as 'melancholy',
				'blackness of the bile', goes back in history to the ancient Greek
				doctor Hippocrates. He described the disease as a acute disorder that
				causes both mental and physical symptoms in 'anxiety and despair when
				they last a long time'. The concept of a depressive disorder according
				to the WHO (ICD-10), is a similar but much broader concept.
				<br /> <br />
				Emil Kraeplin, a German psychiatrist, was one of the first to use the
				term 'depression', when referring to different types of 'melancholy'.
				Today, the term depression refers to many different mental states: from
				mental dejection to pathological mood disorders. <br /> <br />
				THE BLUES - the feelings of emptiness, hopelessness and sadness - are
				composed portraits. They were inspired by the masters of the art and
				history of depression. <br /> <br />
				Source:
				<br />
				Johannisson, Karin (2013): Melankoliska rum. Om ångest, leda och
				sårbarhet i förfluten tid och nutid. Stockholm (Albert Bonniers förlag).{' '}
				<br />
				Davison, K (2006): Historical aspects of mood disorders. Psychiatry. 5
				(4): 115-18 <br />
				Organization, World Health / Staff, WHO / WHO, WHO (1992): The ICD-10
				Classification of Mental and Behavioural Disorders. Clinical
				Descriptions and Diagnostic Guidelines. Geneva, Switzerland (World
				Health Organization).
			</>
		),
		info: 'Photography, 2020',
		externalLink: '',
		linkName: '',
	},
	{
		id: 'BlackHole',
		artName: 'Black Hole',
		artistName: 'Elisa Jule Braun',
		image: elisa,
		description: (
			<>
				<em>Black Hole</em> documents the inner-workings of a vacuum cleaner.
				The amusing first impression gained by the shift in scale and the
				absurdity of the experience soon gives way to a feeling of hopelessness.
				One is powerless at the mercy of the booming sound and the view into the
				abyss of the black hole, which mercilessly absorbs matter and increases
				in mass. Caught in the undertow, you transform into a shrunken Gregor
				Samsa, and become a carelessly sucked-in insect yourself.
			</>
		),
		info: 'Video, 5:51, 2017',
		externalLink: 'http://www.elisabraun.de/007_work.html',
		linkName: 'See work',
	},
	{
		id: 'Extractsfromthediary',
		artName: 'Extracts from the diary',
		artistName: 'Nia Lejander',
		image: nia,
		description: (
			<>
				"In an attempt to paraphrase my struggles with words, I sometimes,
				almost by accident, write poems. The truth is that it is not I who write
				the poems, - the poems write themselves. At least that's how it feels."{' '}
				<br />
				<br />
				Nia Lejander recorded some of her poems from the diary, which were
				written in low points. Partly ironically funny or deeply sad look at
				life.
			</>
		),
		info: 'Audio, 2020',
		externalLink: '',
		linkName: '',
	},
	{
		id: 'Brilliantfutureiswaitingforyou',
		artName: 'Brilliant future is waiting for you',
		artistName: 'Carole Stieler',
		image: carolina,
		description:
			'Having borderline personality disorder means constantly living between the best and worst version of oneself, often crossing the boundaries of emotion and reason. The artist deals with her past, visualises and processes life between such extremes. As a child, she could never imagine the path her life would take on account of this unpredictable condition.',
		info: 'Photo collage, 2018',
		externalLink: '',
		linkName: '',
	},
	{
		id: 'autoantibody',
		artName: 'autoantibody.1 & autoantibody.2',
		artistName: 'Merani Schilcher',
		image: merani,
		description: (
			<>
				autoantibody.1 <br />
				shooting yourself in the foot <br />
				hurting your own interests <br />
				<br />
				autoantibody.2 <br />
				(sich) ein Bein ausreißen <br />
				<br />
				putting a lot of effort into something <br />
				literal translation: pulling out a leg <br />
				<br />
				An autoantibody is a type of antibody that is produced by an organism's
				immune system to attack its own healthy tissue. <br />
				<br />
				Autoantibody.1 and autoantibody.2 are part of an ongoing series of
				self-destructive stools.
			</>
		),
		info: 'Sculpture, 2019/20',
		externalLink: 'https://vimeo.com/375293017',
		linkName: 'See work',
	},
	{
		id: 'Sickofme',
		artName: 'Sick (of) me',
		artistName: 'Indra L. Frings',
		image: indra,
		description: (
			<>
				The piece <em>Sick (of) Me</em>, introduces viewers to the emotional
				world of individuals suffering from mental illness. With the help of
				face filters the described feelings are rendered abstractly. They
				visualise how the interviewed persons feel when they are intensively
				confronted with their illness in everyday life. <br /> <br />
				(addressing experiences of the individual, and not mental illness in
				general)
			</>
		),
		info: 'Facefilter, 2020',
		externalLink: 'https://vimeo.com/393319001',
		linkName: 'See work',
	},
	{
		id: 'Fourfacesoffear',
		artName: 'Four faces of fear',
		artistName: 'Dovilé Aleksaité',
		image: dovile,
		description:
			'Fear is one of the most important emotions, and is directly related to the inherent human need for security. The video installation tries to make the state of fear tangible in its various stages. It refers to natural elements such as wind, rain and fog. The emotional states fluctuate between the feeling of closeness and distance, resembling external forces, and the forces of nature. The number four refers to natural cycles, the four seasons or four phases of the moon. The project takes up this circularity of natural events, which have no defined linear goal.',
		info: (
			<>
				4-channel video installation, 4:15 min, loop, 2019 <br />
				Sound design: Christian Obermaier
			</>
		),
		externalLink: '',
		linkName: '',
	},
	{
		id: 'Senectus',
		artName: 'Senectus',
		artistName: 'Alessandra Fochesato',
		image: ale,
		description: (
			<>
				The project is inspired by Francesca Rigotti's book{' '}
				<em>De senectute</em>, which deals not only with the age of women, but
				also with what distinguishes women from men in this phase of life: the
				loss of fertility. <br /> <br />
				The film begins with words from a young woman who experiences the
				biological changes in her body. The woman in the green dress is locked
				up in an abstract prison made of a loop of gesture and image. In her
				drama alone, she is the only thing that is irrevocably repeated without
				end.
			</>
		),
		info: 'Video, 8:34 min, 2019',
		externalLink: 'https://vimeo.com/296519893',
		linkName: 'See work',
	},
	{
		id: 'Sink',
		artName: 'Sink',
		artistName: 'Valentina Alexander',
		image: valentina,
		description: (
			<>
				While waiting, we often experience time as extremely slow, or even
				viscous. One minute can feel like a year. This hand-drawn animation
				shows a girl experiencing this phenomenon. When we are in the process of
				waiting, the space we are in becomes a microcosm. <br />
				<br />
				Our observation and attention work like a magnifying glass, and every
				sensual detail takes on a higher significance. In this state we
				experience the world as a foreign reality and slide into a state of
				daydream.
			</>
		),
		info: 'Video, 1:00 min, 2018',
		externalLink: 'https://vimeo.com/281239732',
		linkName: 'See work',
	},
	{
		id: 'Testingcollectivity',
		artName: 'Testing collectivity',
		artistName: 'Hilka Dirks, Zora Hünermann, Meret Schmiese',
		image: hilka,
		description:
			'Testing collectivity is an ongoing experiment. You are invited to participate. The connections are participatory, and lead to cooperation. Their use requires communication. They create the structure to open up new space for exploration. The human creates the collective experience as part of the object. The only productive added-value is an emotional experience. The collective action is for its own sake. It is not efficient.',
		info: 'Installation, 2019',
		externalLink: '',
		linkName: '',
	},
	{
		id: 'REMUpgrade',
		artName: 'REM-Upgrade',
		artistName: 'Elias Asisi',
		image: asisi,
		description: (
			<>
				Most dreams take place during REM (Rapid Eye Movement) sleep. In this
				restless phase of sleep, we process and manage problems from our waking
				life, we are confronted with our fears and imperfections, we prepare for
				the future, we forget and we remember. <br />
				<br />
				This installation attempts to bring the strongly anthropo-morphic
				process of dreaming into the world of machines and automata. Piece by
				piece, new images emerge from the visual memory of the machine, which
				are more than simply memory, and provide insight into a speculative
				subconscious.
			</>
		),
		info: 'Installation, 2018',
		externalLink: '',
		linkName: '',
	},
	{
		id: '20200415',
		artName: '20200415',
		artistName: 'Montau',
		image: montau,
		info: 'Audiovisual installation, 2020',
		description: (
			<>
				The exhibition <em>Dark Corners</em> and the entire festival LanaLive
				“Underground” conclude a highly sensitive, audiovisual installation by
				Montau. The composer and producer, who lives in Berlin, creates tense,
				hypnotic grooves and melanchonic soundscapes that move between thick
				walls of sound and thundering drum arrangements. <br />
				<br />
				The premieretook place on May 31st at 8:00 p.m. With meditative sounds
				and chromatic color movements, he invites you to relax, conjures up the
				mental health and closes the gates to the underworld.
			</>
		),
		externalLink: 'https://www.youtube.com/watch?v=_a47fSViL98',
		linkName: 'See work',
	},
];

export const audioIT = [
	{
		zitat: 'Si, la si può guarire',
		description: (
			<>
				Ho quasi cinquant’anni, nel 2017 stavo per morire. È stato uno shock
				molto forte, che quando sono riuscita a riprendermi dal grande spavento,
				ho subito dentro di me una grande depressione, molto forte, che mi é
				durata quasi due o tre mesi. All’inizio stavo molto male, un po’ per
				tutto che mi é capitato. Mi é venuta questa pericardite e dovuto
				prendere un sacco di medicinali. Quindi ho dovuto riequilibrare tutto il
				mio corpo, il mio fisico, neurocrine…si, neurocrine - L’ipotesi per
				riportare a un funzionamento normale nel mio corpo. Quindi ho passato un
				momento di grande depressione che é come un vuoto, che non riesci a
				fermare.
				<br />
				<br />
				La depressione é sentirti completamente impotente di non riuscire a fare
				nulla. Soprattutto: anche se ci sono le persone che ami, che ti amano,
				che ti sostengono…come la famiglia, come il compagno, come tante cose:
				tu ti senti sola. Completamente sola. Ma veramente sola. Eppure ti
				mostrerà la verità che, tu non sei sola. Perché comunque sei con persone
				che ti amano, che ti vogliono bene e che tu ami. Ma in quel momento li,
				della malattia della depressione, perché per me é una malattia, tu ti
				senti completamente solo, e non fai altro che piangere. Ti senti vuoto,
				solo, anche disperato.
				<br />
				<br />
				Per fortuna, grazie a Dio, ho fatto anni e anni di lavoro su di me, anni
				di ricerca di amore per me stessa. Sono una terapista, aiuto e ho
				aiutato tante persone per uscire fuori anche dalla depressione, e per
				superare tante paure. Ringrazio Dio per la mia esperienza, perché mi ha
				permesso poi, dopo questi tre mesi traballanti, di questi momenti dove
				mi rendevo conto di quello che mi stava succedendo, che ero in balia
				delle mie emozioni e della mia tristezza.
				<br />
				<br />
				C’era quell’altra parte di me che voleva uscire fuori, emergere,
				finalmente liberarsi da questa sofferenza, questa agonia, che non capivo
				neanche da cosa provenisse, e quindi piano piano ho voluto agire.
				Reagire. Pormi dentro di me con un coraggio e dire: NO! Non sei sola, ci
				sono le persone che ti amano, e prima di tutto ci sei TU. Ci sei tu, a
				te stessa.
				<br />
				<br />
				Si può’ guarire da questa malattia? Si, la si può’ guarire. con un
				grande coraggio, con una grande forza interiore, con una grande spinta
				dentro di te nel reagire. Per me é stata anche una vittoria, non me lo
				aspettavo, ma ho rivisto, ho lavorato ancora su altri punti sopra di me,
				come la mia parte della vittima, la mia parte che ha subito, la mia
				parte che si sentiva impotente a prescindere dalla malattia che mi era
				capitata, a prescindere della depressione. Era nascosto, e poi é
				riemerso tutto, ok?
				<br />
				<br />
				Pero’ ci si puo’ uscire. Ci si puo’uscire dalla malattia, si. Con una
				grande forza e coraggio, cercando di porti tante domande, andando dentro
				di te, e dirti: Ok, tu ti senti sola, ma sei davvero sola? Tu ti senti
				impotente, ma lo sei davvero, o puoi reagire, per non sentirti più tale?
				<br />
				<br /> Tante, tante modalitá di riflessione mi hanno portato a dire: io
				voglio stare bene, io voglio il meglio per me stessa, e credo vivamente
				che in noi, abbiamo un grande potere. Il potere é anche di prenderci le
				proprie responsabilità, di responsabilizzarci, di non dare in mano il
				proprio potere, il proprio dolore in mano a qualcun’altro, ma noi, a
				reagire con una consapevolezza e con tante domande, che puoi porti.
				Credo che sia molto importante porsi tante domande, e anche darsi tante
				risposte.
			</>
		),
		url: 'https://res.cloudinary.com/dqfcbw5tz/video/upload/v1644003911/dunkleecken/audios/IT/IT_audio_1_tl6gtp.m4a',
		type: 'audio/x-m4a',
		id: 1,
	},
	{
		zitat: 'É una fase difficile, dalla quale si può però uscire',
		description: (
			<>
				Buongiorno, sono una ragazza italiana che vive nel Nord Italia. Ho 27
				anni e due anni fa ho partorito il mio primo bimbo. È stato un bimbo
				desiderato, una gravidanza quindi cercata, ciò nonostante non avevo
				messo in preventivo o non consideravo tutta quella serie di emozioni e
				sensazioni nuove, con le quali avrei dovuto confrontarmi. Ho vissuto la
				gravidanza in maniera un po’ ansiosa. Sentivo l’emergere di nuove
				sensazioni, di nuovi incogniti, di punti di domanda. Ero consapevole che
				avrei dovuto incontrare un organizzazione diversa della giornata, una
				organizzazione diversa delle mie priorità, un riassetto delle mie
				prioritá, il cambio di alcuni progetti. Ero cosapeveole che la vita
				sarebbe profondamente cambiata. Chiaramente non sapevo come, ma l’idea,
				che la mia vita sarebbe cambiata per sempre, mi metteva una certa ansia.
				Nonostante questo ho lavorato, per l’intera gravidanza, ho lavorato
				quasi fino alla fine, mancavano tre settimane al parto. In maniera
				abbastanza equilibrata ho portato avanti questa gravidanza.
				<br />
				<br />
				Il parto é stato abbastanza difficile, ma sono stata bene subito, mi
				sono ripresa subito e nei primi giorni mi sentivo totalmente padrona
				della situazione. Mi sentivo capace, di intraprendere questa nuova veste
				di mamma. In realtà, durante la mia gravidanza, mia suocera si ammaló di
				una grave patologia, e quindi nei primi mesi dopo il parto, io e mio
				marito dovevamo fare i conti anche con questa situazione parallela. Cioè
				La malattia di mia suocera che si andava ad aggravare. Chiaramente
				questo rilasciava un clima di tristezza forte, che in qualche modo
				copriva e metteva in ombra quella che poteva essere la gioia di un
				bambino che era nato e che stava crescendo.
				<br />
				<br />
				Le sensazioni con le quali io mi sono dovuta scontrare, a partire dal
				primo mese, erano sicuramente sensazioni di paura, di incognita, di
				smarrimento e di solitudine. Una solitudine, che si faceva sempre piú
				forte. Un ansia, che si faceva sempre piú forte. Paure che prendevano il
				largo. Quindi incominciavano non solo a riguardare il bimbo, ma
				tantissimi altri aspetti. Cominciavo ad avere paura delle mie sensazioni
				fisiche. Paura di ammalarmi. Paura di come si sarebbero evolute le cose.
				Paura di come la mia vita sarebbe cambiata, quanto sarebbe cambiata.
				Purtroppo mi sentivo profondamente sola, non mi sentivo nella
				possibilitá di confrontarmi con la mia famiglia di origine, con mia
				madre, mio padre, mia sorella. Non sono sicuramente persone con le quali
				ho potuto avere un dialogo aperto, confidenziale e profondo.
				<br />
				<br />
				Nascondevo le mie emozioni. Le nascondevo davanti a mio marito perché
				non mi sentivo nella possibilità di pesare. Visto che già stava vivendo
				una pesante situazione, non mi sentivo di confrontarmi con la mia
				famiglia d’origine perché non mi sentivo capita. Questa era la
				sensazione. Non avevo amiche che stavano vivendo situazioni simili alle
				mie, quindi mi sentivo sola in queste mie emozioni. Era una solitudine
				che si allargava ed entrava sempre piú in profondità, trasformandomi in
				una mamma perennemente triste, perennemente sconfortata, perennemente
				timorosa di tutto.
				<br />
				<br />
				Quando il mio bimbo aveva circa sei mesi mi sono rivolta ad un’omeopata,
				perché ero consapevole che probabilmente avrei dovuto avere qualche
				aiuto esterno. Quest’omeopata mi consiglió di rivolgermi ad uno
				specialista, perché intravedeva già una situazione abbastanza critica.
				Eravamo comunque consapevoli che, nel momento dove avrei dovuto
				rivolgermi ad uno specialista ed intraprendere una terapia
				farmacologica, avrei dovuto interrompere l’allattamento. Per me questo
				era molto importante. Era importante a continuare ad allattare il mio
				bimbo. Lo era da un punto di vista nutrizionale e lo era da un punto di
				vista affettivo. Ho cercato quindi di trovare un equilibrio, di portare
				avanti l’allattamento. Ho cercato di arginare per come potevo le mie
				sensazioni, che diventavano però sempre piú presenti, piú constanti,
				sempre piú totalizzanti.
				<br />
				<br />
				Quando il mio bimbo aveva un anno, purtroppo la situazione era
				peggiorata. Erano subentrati attacchi di panico piuttosto forti, in cui
				non ero in grado di relazionarmi con il mio bambino, in cui la
				sensazione di angoscia era veramente totalizzante. Ho avuto un paio di
				mancamenti, sono stati elementi forti che mi hanno fatto capire che
				purtroppo dovevo affrontare la cosa in maniera diversa. Dovevo prendere
				per mano questa situazione che si era veramente aggravata.
				<br />
				<br />
				Mi sono rivolta allora ad uno specialista, ho avuto la fortuna di
				incontrare, al quarto o al quinto tentativo, uno specialista con un
				fortissimo senso di umanità e compassione.È stata una persona che ha a
				saputo avvicinarmi, e con la quale mi sono sentita di aprirmi. È
				convenuto che é stato piú opportuno concludere l’allattamento e di
				iniziare una terapia farmacologica, un trattamento psicoterapeutico. Ho
				concluso così l’allattamento, é stato doloroso fisicamente, come lo é
				stato moralmente. Ma ero consapevole che in quel momento era la cosa piú
				adatta.
				<br />
				<br />
				Ho iniziato un percorso che tuttora é in corsa. Ho incominciato, anzi
				rincominciato a vedere la vita in maniera diversa, ho rincominciato a
				parlare con il mio bimbo, ho iniziato ad osservarlo in maniera diversa,
				ad ascoltarlo in maniera diversa. Mi sento piú in sintonia con lui. Ho
				incominciato ad apprezzare la vita in maniera diversa e ad assaporarne
				ogni dettaglio, con piena consapevolezza, di chi sono, chi voglio
				essere, chi voglio diventare. Sono consapevole dell’impegno che devo
				metterci, perché é in corso una trasformazione di me, che si, da un lato
				é impegnativa, dall’altro lato é arricchente. Il mio bambino mi sta
				facendo crescere e mi sta facendo maturare molto. Così come mi sta
				facendo maturare proprio altre prospettive.
				<br />
				<br />
				Concludo spendendo due parole sulla depressione post-parto: quale
				momento é un po’ ancora all’oscuro, poco trattato, poco studiato e poco
				affrontato. Io stessa ho avuto molta difficoltà a trovare dei supporti,
				degli aiuti, degli specialisti in grado di comprendere quello che stavo
				vivendo. I pensieri che stavo vivendo, che alcune volte sono stati molto
				drammatici.
				<br />
				<br />
				Ho l’intenzione di lavorare su questo e ho la voglia e l’intenzione
				d’essere di supporto l’indomani, a donne che stanno affrontando questa
				fase, che é una fase molto delicata. È una forma di depressione che ha
				delle caratteristiche in comune, le stesse origini come altre forme di
				depressione. Pero’ é in un modo diversa, perché si sommano altri
				aspetti, fisiologici e psicologici, quali appunto, della maternità.
				<br />
				<br />
				Spero di essere stata di spunto di riflessione, di essere stata in
				qualche modo di aiuto a chi magari sta vivendo questo periodo. Dicendo
				che é una fase: é una fase, un percorso difficile, ma dal quale si può
				uscire anche in maniera piú arricchita, piú consapevole. Saluto tutti, e
				mando un’abbraccio virtuale.
			</>
		),
		url: 'https://res.cloudinary.com/dqfcbw5tz/video/upload/v1644003912/dunkleecken/audios/IT/IT_audio_4_jjdsas.m4a',
		type: 'audio/x-m4a',
		id: 2,
	},
	{
		zitat: 'Ci sono dei momenti in cui non si vede la luce',
		description: (
			<>
				Dunque per me, avere a che fare con una malattia mentale é difficile da
				spiegare. É difficile da spiegare anche a chi se ne occupa per lavoro,
				quindi é ancora piú complesso a spiegarlo agli altri. In maniera
				particolare, a chi non ha mai avuto a che fare con problematiche di
				questo tipo.
				<br />
				<br />
				Fondamentalmente é un limite mio, che non riesco a spiegarmi, e che non
				riesco, soprattutto, a capirmi. Di conseguenza non ho i concetti e le
				terminologie per poter spiegare a qualcun’ altro che cosa significhi
				avere una problematica legata alla depressione.
				<br />
				<br />
				Per quanto riguarda la mia esperienza personale, non c’é stato un vero e
				proprio evento scatenante. Semplicemente un accumularsi di varie
				situazioni che hanno portato all’attivarsi di un qualcosa che era già
				latente dentro di me, e che mi ha fatto attraversare dei periodi
				particolarmente delicati e complessi.
				<br />
				<br />
				Per quanto riguarda le persone che mi sono state vicine e mi stanno
				intorno tuttora, posso dire che assolutamente la malattia mentale é un
				tabù. Lo é anche rispetto alle persone che ti vogliono bene. Quindi
				magari non ti giudicano con cattiveria ma comunque spesso non possono
				farne a meno. Credo che la situazione sia dovuta al fatto che tutto
				quello che riguarda le malattie mentali é sconosciuto. Se ne sa poco, se
				ne parla poco, e quindi é un po’ inevitabile che le persone che non
				hanno mai attraversato problematiche simili abbiano dei preconcetti e
				dei pregiudizi. Quindi: se é difficile poterne parlare liberamente con
				amici stretti e con famigliari e persino con psicologi o psichiatri, é
				ancora piú difficile parlarne con persone con cui la conoscenza é ancora
				superficiale. Tendenzialmente é un argomento che non tocco, se posso
				evitarlo. Mi fa piacere di parlare della mia esperienza con chi ha
				bisogno di sfogarsi, con chi ha bisogno di aiuto, o con chi so che può
				capire, altrimenti é una cosa che tengo privata.
				<br />
				<br />
				Per quanto riguarda l’essere guarita… Non penso che da certe
				problematiche si guarisca. Si impara, ad averci a che fare e si impara a
				conviverci. Si ottengono gli strumenti necessari per poter far fronte
				anche ai momenti in cui l’umore va verso il basso. Ma non si guarisce.
				Purtroppo le fluttuazioni dell’umore spesso, almeno per quanto riguarda
				me, non dipendo neanche da eventi esterni, sono quasi stagionali e
				inevitabili. Quindi non c’é un modo per guarire. Ci sono magari dei
				farmaci, che ti aiutano a tenerti su, a tenerti bilanciato, a tenerti
				centrato, e soprattutto c’é la tua voglia di stare meglio e di
				impegnarti per aquisire questi strumenti che ti possono consentire di
				non essere completamente preda della tua testa.
				<br />
				<br />
				I miei famigliari mi sono stati vicini per come hanno potuto spesso
				senza capire assolutamente perché io mi comportassi in un certo modo,
				perché io stessi in un certo modo, magari cercavano di trovare delle
				cause, a cui attribuire il mio stato d’animo che non c’era la maggior
				parte delle volte. Comunque ho avvertito la loro vicinanza e questo
				sicuramente ha fatto si che io non mi sentissi sola in questo percorso.
				Mi ha dato una spinta in piú per cercare di stare meglio.
				<br />
				<br />
				Per quanto concerne il mio “io” piú giovane, le direi di avere pazienza
				e di non avere fretta di stare meglio. Stare male é molto brutto, ci
				sono dei momenti in cui proprio non si vede la Luce, ma l’unica cosa da
				fare é di non essere impazienti. Di non trattare i professionisti, gli
				amici e la famiglia come se fossero nemici che non ti capiscono. Avvolte
				é vero, non ti capiscono, ma altre volte invece sono già passati
				attraverso quello che stai passando tu. In altri casi é il loro lavoro
				averci a che fare. Quindi non sono nemici, sono li per ascoltarti, per
				aiutarti. Di non convincermi di essere ancora piú sola di quanto già la
				mia testa ne sia convinta. Perciò tanta pazienza e tanta fiducia nel
				futuro.
			</>
		),
		url: 'https://res.cloudinary.com/dqfcbw5tz/video/upload/v1644003911/dunkleecken/audios/IT/IT_audio_3_qbtkcb.mp4',
		type: 'audio/mpeg',
		id: 3,
	},
	{
		zitat: 'Bisogna anche vederlo come dono',
		description: (
			<>
				Ciao a tutti, il mio nome é Michael. Oggi vorrei parlarvi un po’ di una
				cosa che ho dentro in me, che si chiama ADHD, cioè sindrome
				dell’attenzione. Questo mi ha dato una storia da raccontare, in tutti i
				sensi: per quelli che non lo sanno, l’ADHD é una cosa poco riconosciuta,
				nel senso che, anche se é una malattia provata e certificata da tanti
				medici, alcuni non la riconoscono. Perché pensano che sia una “scusa”
				per fare meno.
				<br />
				<br />
				Peró non é così: una persona ADHD, sopratutto a scuola, fa molta fatica
				a stare attenta, si stanca subito. Non si riesce a stare seduti, ci si
				vuole muovere, avere la libertà e come adesso, che c’é il virus, dove
				proprio tutti vogliono uscire. Tantissime persone vogliono uscire. Fare
				un giro, vedere la ragazza, il fidanzato, viaggiare, andare in bici,
				fare sesso, sport, lavorare, andare al cinema, andare a teatro. <br />
				<br /> Ecco: a scuola, l’esigenza di fare qualcosa, é ugualmente come
				una persona che ha l’ADHD. Ed é proprio per questo che durante questa
				quarantena di quasi due mesi, sono calmo. Io questa situazione la
				conosco. <br />
				<br />
				Vi ho detto che noi ADHD non siamo in grado di stare attenti, siamo più
				aggressivi, impulsivi, emozionali. Vi dico la verità… Sinceramente, non
				c’é un modo per combattere, bisogna vivere con questa malattia. Peró,
				bisogna anche vederlo come dono. Di questo ve ne parlerò dopo. Comunque,
				non preoccupatevi. Sono delle ottime notizie.
				<br />
				<br />
				Torniamo un passo in dietro. Questo disturbo non é che l’ho notato io. A
				scuola non andavo mai, mai, mai bene. Mai bene. Mai. Ad un tratto poi
				mia madre ha intervenuto, facendomi sottoporre a dei test psicologici e
				psichiatrici, per vedere se con me era tutto apposto. E infatti li le é
				stato spiegato l’ADHD, cioè il sindrome di attenzione. Questa era la
				spiegazione perché andavo così male a scuola, nelle materie che non mi
				interessavano. O almeno quelle logiche, come la matematica, la chimica,
				la fisica. <br />
				<br /> Poi mi é stato prescritto un farmaco, che si chiama Ritalin… Non
				é molto piacevole, perché si, ci si riesce a concentrarsi di più, e
				porta a un intervento nel resultato a scuola, o magari al lavoro. Peró
				al lavoro non mi servirà, e vi dirò il perché. <br />
				<br /> Comunque torniamo un passo indietro. Per questo a scuola é stato
				riconosciuto come malattia, e a volte, durante le medie, avevo piú tempo
				per fare i test. Poi arrivavano le mamme di quelli con cui andavo a
				scuola, dei miei compagni: “Ma lui, ma cos’ha, non si vede, questa é una
				scusa, quá e lá” Non Potete dire questo! Quei medicinali li mi hanno
				fatto perdere dieci chili! Dieci chili in cinque anni! Cinque anni!{' '}
				<br />
				<br />
				Sapete una cosa: se uno ha l’ADHD, se lui una cosa la vuole, la
				raggiunge sempre. Perché siamo indeterminati, più emozionali e più
				impulsivi. Possiamo amare di più, ma ve lo giuro! Io ho amato come
				nessun’altra persona ha amato. E ve lo dico io, perché io le persone le
				vedo, parlo a loro, e a volte anche le sento. Perciò avere l’ADHD é una
				cosa bellissima.
				<br />
				<br /> Alla gente che giudica la gente che ce l’ha: sappiate che non é
				facile viverci, però può essere anche un dono. Io ho imparato che non é
				facile viverci con questo, però può essere anche un dono. Perció, a
				quelli che ce l’hanno: sappiate, non siete persi e, alla fine, quando
				avrete un lavoro, é grazie a questo, che farete il doppio e di più degli
				altri. Ve lo dico io, perché io che sono un ADHD. Se vorrei raggiungere
				una cosa la raggiungo molto prima di altri. <br />
				<br />
				Vi dico la verità, io ne parlo con chiunque mi chieda, anche se potesse
				sembrare un discorso intimo, però non lo é. Io ne parlo molto volentieri
				con persone molto intime come per esempio, la mia ragazza, se ce
				l’avessi. Riguardo le mie compagne si, diciamo che, vi avevo detto, non
				é molto facile vivere con l’ADHD, perché nessuno lo capisce.
				<br />
				<br />
				Nel senso che, volevo solo avvertirvi, anche se ce l’avete, e se lo
				direte a qualcuno: non gliene fregerà a nessuno! Sará possibile che,
				possiate fraintendere delle frasi che dicono delle persone, che siete
				piú impulsivi, che non capite.
			</>
		),
		url: 'https://res.cloudinary.com/dqfcbw5tz/video/upload/v1644003918/dunkleecken/audios/IT/IT_audio_2_hwe6dh.m4a',
		type: 'audio/x-m4a',
		id: 4,
	},
];

export const audioDE = [
	{
		zitat: 'Es war notwendig, sich der Krankheit zu stellen',
		description: (
			<>
				Meine Depression würde ich beschreiben als Verzweiflung, Dunkel,
				Sinnlosigkeit, Fehlen von Freude und Kraft. Es gab mehrere Faktoren, die
				meine Depression begünstigt haben. Irgendwann hat sie dann begonnen.
				<br />
				<br />
				Bei mir selbst war es vielleicht nicht so sehr ein Tabu, als vielmehr
				die Hilflosigkeit, in meiner Umgebung sicher aber auch ein Tabu. Das
				Umfeld hat mit Unverständlichkeit reagiert.
				<br />
				<br />
				Die Krankheit bin ich selbst eher etwas spät angegangen. Sie hat sich
				inzwischen, ganz sicher, deutlich gebessert. Es besteht weiterhin eine
				Grundstellung, die ich vielleicht als Wehmut bezeichnen würde und
				zeitweise kommt eine Traurigkeit über ganz banale Sachen dazu. Es war im
				wörtlichem Sinn notwendig mich der Krankheit zu stellen, und etwas
				dagegen zu tun.
				<br />
				<br />
				Meinem früherem Ich würde ich sagen: „Hol dir viel früher Hilfe! Dein
				Leben kann viel angenehmer werden.” Die Medikamente waren absolut
				notwendig. Ohne hätte ich es nicht geschafft. Hilfreich war auch die
				Psychotherapie. Enorm wichtig ist das Verständnis, dass man als
				Erkrankter von der Umgebung bräuchte, die es aber kaum aufbringt.
				Letztlich ist es ja so, dass man sich selber versteht.
			</>
		),
		url: 'https://res.cloudinary.com/dqfcbw5tz/video/upload/v1644003978/dunkleecken/audios/DE/DE_audio_5_xurqhd.mp3',
		type: 'audio/mpeg',
		id: 1,
	},
	{
		zitat: 'Mir war damals nicht bewusst, dass ich depressiv war',
		description: (
			<>
				Hallo, ich bin 23 Jahre alt und studiere Geisteswissenschaften an der
				Universität in Baden-Württemberg. An meinem 18. Lebensjahr hab ich ca.
				ein-einhalb Jahre unter starken Depressionen gelitten. Das ich damals
				depressiv war, war mir zu der Zeit nicht bewusst. Erst als ich von der
				Krankheit geheilt worden bin, habe ich erkannt, dass ich ein-einhalb
				Jahre depressiv war.
				<br />
				<br />
				Ich habe zu der Zeit gespürt, dass etwas mit meinem Gemütszustand anders
				war als bei anderen Leuten, dass mein Leben nicht so funktioniert hat,
				wie bei den Anderen und doch habe ich nicht erkannt, dass ich krank bin.
				Es war so, als wär ich in einer Blase aus negativen Gedanken gefangen
				gewesen. Dieser “Blasenzustand” ist irgendwann zur Normalität geworden,
				weil ich mich zunehmend daran gewöhnte. Und wenn irgendwas normal ist,
				hört man auf, es zu reflektieren oder es zu hinterfragen.
				<br />
				<br />
				Die Krankheit hat mich durch und durch gelähmt. Ich hatte kaum mehr
				Kraft, irgendetwas zu machen. Schon gar keine Schöpfungskraft, also auch
				keine Motivation irgendetwas aus sich herauszuholen. Ich glaube, dass
				jemand der nicht depressiv ist, sich sehr schwer vorstellen kann, wie
				sich diese Krankheit anfühlt. Am ehesten würde ich sagen, dass es nicht
				ich bin, die zu der Zeit agiert hat, sondern meine Krankheit.
				<br />
				<br />
				Bei mir hat es keinen speziellen Auslöser gegeben. Die Krankheit ist
				eher schleichend gekommen. Es hat schon Dinge gegeben, die nicht so
				schön waren in der damaligen Gegenwart, sowie in meiner kindlichen
				Vergangenheit. Die haben bestimmt dazu beigetragen, dass ich depressiv
				geworden bin. Es war vielmehr die Summe der Gegebenheiten, als wie ein
				einzelner Punkt, der die Depression ausgelöst hat. In meinem Fall war es
				sicher die Summe der Gegebenheiten, die Pubertät und der Mangel an
				Lebenserfahrung.
				<br />
				<br />
				In diesen eineinhalb Jahren wusste ich selbst gar nicht, was mit mir
				geschieht und dass ich depressiv bin. Ich habe nicht wirklich gedacht,
				dass ich unter einer mentalen Krankheit leide. Als ich so langsam
				erkannt habe, kam einfach Interesse dazu, mich über diese Krankheit zu
				informieren. Es hat definitiv nicht an Beiträgen und Hilfestellungen
				gemangelt, wenn man mal das Problem erkannt hat. Dennoch finde ich, dass
				es sehr schwierig ist für Jugendliche, die unter dieser Krankheit
				leiden, sich zu informieren oder gar zu erkennen. Deswegen plädiere ich
				stark für eine größere Aufklärung zu diesem Thema, v.a. von Schulen oder
				jugendorganisatorischen Einrichtungen.
				<br />
				<br />
				Da meine Familie vor mir wusste, dass ich depressiv bin, hat sich die
				Sache mit dem “Geständnis” von selbst erledigt. Ich musste mich nicht
				meiner Familie offenbaren. Sie ist sehr tolerant damit umgegangen. Ich
				habe gemerkt, wenn man erkennt und die Familie erkennt, dass jemand
				depressiv ist, hat man anschließend einen ganz anderen Zugang zu den
				verschiedenen Familienmitgliedern. Man wird toleranter und
				verständnisvoller zueinander.
				<br />
				<br />
				Ich würde mir selbst sagen: “Gut gemacht, dass du aus der Krankheit
				rausgekommen bist und mutig von dir, dass du dir Hilfe geholt hast, dass
				du in die Klinik Bad-Bachgart gegangen bist und dass du dich überwunden
				hast der Krankheit zu stellen.”
				<br />
				<br />
				Der Aufenthalt in Bad-Bachgart war nicht immer leicht, er hat sehr viel
				Kraft gekostet, im Laufe dieser Therapie sieht man sehr viele schlechte
				Eigenschaften, die man an sich selbst eigentlich nicht sehen mag. Aber
				sobald man diese überwunden hat, dann hat man gute Chancen die Krankheit
				zu überwinden und daran zu reifen. Was ich noch meinem jüngerem “Ich”
				sagen würde - eben großes Stichwort MUT! An euch Leute da draußen: habt
				keine Angst vor nichts. Es kann gar nichts schlimmes passieren.
			</>
		),
		url: 'https://res.cloudinary.com/dqfcbw5tz/video/upload/v1644003988/dunkleecken/audios/DE/DE_audio_10_hucjux.mp4',
		type: 'audio/mpeg',
		id: 2,
	},
	{
		zitat: 'Du weißt, was zu tun ist. Tu es einfach!',
		description: (
			<>
				Ich bin 24 Jahre alt. Ich habe in meinem Leben viele Probleme zu
				bewältigen gehabt, einige mit mir selber und andere mit meiner Umwelt.
				Am meisten erschwert hat mir das aber ein etwas “unscheinbarer”
				Charakterzug.
				<br />
				<br />
				Hat man ein Problem erstmals erfolgreich ignoriert und ist den
				Konsequenzen geschickt ausgewichen, kann es schwer sein den Weg zurück
				zu finden. Zu angenehm und reibungslos hat sich das Problem
				augenscheinlich von selbst gelöst. Aber jeder weiß, Probleme lösen sich
				nicht einfach von selbst. Man setzt ihnen lediglich einen Deckel auf,
				lässt sie in der Dunkelheit wuchern. Die Problematik entwickelt sich zu
				einem undurchschaubaren Gewirr, das eine offene Auseinandersetzung
				verhindert. Wie ein Virus breitet es sich immer weiter in neue
				Lebensbereiche aus.
				<br />
				<br />
				„Tiefer. Noch tiefer. Stecken tiefer in den Sand, so dass dir nie wieder
				ein Problem unter die Augen tritt.”, sagt die innere Angst. Die eigene
				Unsicherheit, ständig wachsend, mit dem Ziel das Steuer zu übernehmen.
				Lieber die Kämpfe eines Anderen austragen, als sich in den Eigenen zu
				stellen. Gefangen im eigenem Verhalten, wie im Traum, kommt man nicht
				mehr von der Stelle.
				<br />
				<br />
				Mit der Zeit wächst die Fähigkeit sich von Problemen abzuwenden und miit
				ihr der eigene Schatten den es zu überwinden gibt. Verhalten wird zum
				Schutzreflex und Schutzreflex zum Instinkt. Ein Teufelskreis ist
				geboren. Und mit der gleichen Bewegung, wie ein Hund seinem Schwanz
				nachjagt, versinkt man im Dunkel der eigenen Untätigkeit.
				<br />
				<br />
				Ich habe das Glück gehabt viele liebe und inspirierenden Menschen zu
				treffen, die mich gelehrt haben mich selbst zu lieben und nicht
				nachzugeben. Ich glaube nicht, dass ich ihn besiegt habe. Irgendwo sitzt
				er immer noch, der innere „Aufschieber”, und wartet auf die Möglichkeit
				rauszukommen.
				<br />
				<br />
				Jedoch bin ich jetzt gewappnet. Mit Ambitionen, Freunden und Passionen,
				die mir zu viel bedeuten, als dass ich sie vernachlässigen könnte. Ich
				bin froh, der zu sein, der ich bin und da zu sein wo ich bin. Wenn ich
				meinem alten „Ich” etwas sagen könnte, wäre es: „Du weißt, was zu tun
				ist. Tu es einfach.”
			</>
		),
		url: 'https://res.cloudinary.com/dqfcbw5tz/video/upload/v1644003981/dunkleecken/audios/DE/DE_audio_8_zn8it3.3gp',
		type: 'audio/mp4',
		id: 3,
	},
	{
		zitat: 'Selbstverantwortung als Ausweg aus der Krise',
		description: (
			<>
				Bei mir wurde vor dreizehn Jahren eine Psychose diagnostiziert. Aus
				meiner Sicht: ich würde es nicht als eine Diagnose oder Krankheit
				bezeichnen, sondern als eine schwierige Krise, die man alleine nicht
				bewältigen kann. Stress oder Pubertät, hormonelle Veränderungen des
				Körpers. Der Stresspegel kann aber auch nieder sein, so können die
				Krisen auch entstehen.
				<br />
				<br />
				Bei mir hat es angefangen mit diesem Stress und dadurch habe ich eine
				Sensibiltät für Probleme entwickelt. Meine Psychose kann ich mich
				erinnern, löste bei mir erst das Absetzen der Medikation aus. Sodass ich
				sagen kann, je höher man Medikament dosiert und je schneller man sie
				wieder absetzt, eigenständig oder auch mit einem Psychiater, der sagt:
				„Sofort die Medikamente wieder wegnehmen”, so können auch Psychosen
				entstehen oder andere Verhaltensstörungen im Körper. Das kann man dann
				Störung nennen.
				<br />
				<br />
				Ich habe die Ausbildung zur Genesungsbegleitung von 2017 bis 2019
				gemacht. Die war für mich der Auslöser, dass es mir heute relativ gut
				geht, psychisch und auch körperlich. Sie war für mich gut und hilfreich.
				Sozusagen haben wir uns mit der eigenen Geschichte auseinandergesetzt.
				Die Geschichte „Recovery” aus der Krise, wie man mit Krisen umgeht. Die
				verschiedenen Themen und Module haben mir gezeigt, ich bin nicht
				alleine, wir können eine Veränderung im psychatrischem System schaffen.
				<br />
				<br />
				Ich habe auch dazu gelernt, dass mich niemand zwingt eine hohe Dosis zu
				nehmen. Ich kann das frei entscheiden. Es war nicht immer leicht frei zu
				entscheiden, aber ich habe gelernt, mich kann niemand zwingen. Ich kann,
				wenn ich will mit einer niederen Medikation umgehen, sodass ich noch
				mehr meinen Körper spüre und die Verantwortung nicht einem Psychiater
				ganz überlassen muss. Selbst die Verantwortung zu übernehmen, war für
				mich der Anfang aus der Krise. Zu wissen, dass ich selbst über mich und
				meine Gesundheit entscheiden kann, ist für mich ein sehr wichtiges Thema
				geworden.
			</>
		),
		url: 'https://res.cloudinary.com/dqfcbw5tz/video/upload/v1644003985/dunkleecken/audios/DE/DE_audio_4_zunfjv.m4a',
		type: 'audio/x-m4a',
		id: 4,
	},
	{
		zitat: 'Es ist nicht leicht, aber du wirst ankommen!',
		description: (
			<>
				Hallo, ich bin 23 Jahre alt und Grafikdesigner. Das, was ich hier
				beschreiben werde, begleitet mich bereits mein ganzes Leben. Ich bin
				nämlich transgender. Das heißt, ich bin als Frau geboren, lebe aber
				mittlerweile als Mann. Mir ist das aber erst vor ein paar Jahren
				wirklich bewusst geworden, weil ich vorher einfach keinen Begriff für
				meinen Gemütszustand hatte.
				<br />
				<br />
				Es ist ziemlich schwer, anderen zu beschreiben, wie man sich fühlt, wenn
				man selber nicht genau versteht. Dann stellt sich die Frage, wie soll
				ein Mensch sich in einem Geschlecht fühlen, indem er nicht geboren
				wurde? Es ist eine durchaus legitime Frage und meine Antwort drauf ist:
				ich weiß es einfach. Der einfachste Vergleich, der mir dazu einfällt ist
				sind Rechts- oder Linkshänder. Woher weiß man zum Beispiel, dass links
				zu schreiben für einem falsch ist? Es fühlt sich einfach nicht richtig
				an, oder? Man kann nicht richtig schreiben, die Schrift ist wackeliger,
				die Hand ist einfach unsicher. Genau dieses Unwohlsein empfinde ich
				schon seit ich denken kann in meinem Körper. Es passte einfach nicht
				zusammen. Bis ich auf den Begriff “Transgender” gestoßen bin, waren 16
				Jahren vergangen.
				<br />
				<br />
				In meiner Kindheit war ich ein sorgenfreies und glückliches Kind. Ich
				habe damals nicht bewusst Geschlechter getrennt. Ich war einfach ich,
				und habe mich ausgetobt. Ich habe zwar immer die klischeehaften Dinge
				von Jungs gemacht, wie blau war meine Lieblingsfarbe, ich hatte immer
				kurze Haare, habe mich als Superman identifiziert. Anstatt Barbie hat es
				Action Man gegeben. Ich wollte nur Boxershorts als Unterhosen. Genau wie
				meine ganze Kleidung, die sind auch aus der Jungsabteilung gekommen.
				<br />
				<br />
				Irgendwann ist mir schon bewusst geworden, ok, ich bin anders. Aber eine
				gute Zeit habe ich das ignoriere können, bis ich dann eben in die
				Pubertät gekommen bin. Ihr könnt euch sicher vorstellen, wie schlimm es
				ist jeden Abend ins Bett zu gehen und sich zu wünschen, durch irgend
				eine magische Kraft wieder als Junge aufzuwachen. Wo man genau weiß, das
				geht nicht.
				<br />
				<br />
				Der erste Schlag ins Gesicht war dann das Brustwachstum. Ich musste in
				der ersten Mittelschule schon BHs tragen, weil mein frühreifes Ich,
				genetisch bedingt, große Brüste kriegen musste. Ich habe mich strikt
				geweigert, einen BH anzuziehen, bis mich meine Schwester dann regelrecht
				gezwungen hat, weil es ja ein absolutes „NO-GO” war. Der nächste Schlag
				ins Gesicht war dann die Beinrasur. So wie BHs für mich jetzt Pflicht
				waren, so waren es auch kurze Hosen beim Sportunterricht. Und weil
				weibliche Behaarung ja außer auf dem Kopf auch nicht wirklich weiter
				hinauswächst - ich hoffe, man bemerkt meinen Sarkasmus, habe ich meine
				Beine rasieren müssen. Das war auch ein Punkt, der die Trennung
				erschwerte, weil ich lustigerweise total stolz auf meine blonde
				Beinbehaarung war. <br />
				<br /> Der brutalste Schlag ins Gesicht waren die Kurven. Ich war immer
				ein sehr aktives Kind, schlank von Natur aus, aber durchaus muskulös von
				meiner Statur. Aber wie es auch üblich ist, nimmt man ungewollt einige
				Kilos zu. Anfangs, dank meines guten Bindegewebes, hat man es nicht
				bemerkt und ich habe es sogar cool gefunden etwas schwerer zu werden.
				Warum? Weil ich eine Maschine sein wollte. Sportlich, muskulös und groß.
				Bei ein paar Kilos ist es aber dann leider nicht geblieben und ich habe
				über die Jahre noch einiges zugenommen. Das Schlimme war nicht nur, dass
				ich weibliche Kurven bekam. Je schwerer ich wurde, desto weiblicher sah
				ich auch aus.
				<br />
				<br />
				Zu dem Zeitpunkt hat sich auch mein Äußeres geändert. Ich habe versucht,
				dazu zu passen. Ich habe mich auf meine Art weiblich gekleidet und
				präsentiert. Ich hatte schöne lange Haare, enge Hosen und bin Trends
				nachgegangen. Ich habe mich damals als lesbisch geoutet, weil ich eben
				auf Frauen stehe. In dem Umkreis habe ich positive Erfahrungen
				gesammelt, wenn ich es Familie oder Freunde erzählt habe. Ich war eine
				Zeit lang so zufrieden, aber etwas hat halt doch nicht gepasst.
				<br />
				<br />
				Irgendwann hat mich das dann auch wieder eingeholt. Ich habe wieder
				jeden Tag darüber nachgedacht und habe es irgendwann nicht mehr
				ausgehalten. Dann habe ich auf YouTube diesen Typen gefunden, der ein
				Transgender war. Und was ist denn jetzt transgender? Ich habe gedacht,
				es gibt nur Transvestiten. Also Typen, die sich als Frauen verkleiden,
				wo es halt evident ist, dass sie keine Frauen sind. Mich hat es total
				beeindruckt. Der Typ da vor mir, mit flacher Brust, Bart, Sixpack, Haare
				auf Bauch und Brust. Die total männliche Gestalt auf dem Bildschirm war
				einmal eine Frau? Dann habe ich angefangen zu recherchieren und
				irgendwie sind mir da die Augen geöffnet worden. Also war klar: ich bin
				transgender. Endlich weiß ich, was mir das Leben so erschwert, was mich
				seit ich denken kann, begleitet. Ich habe mit einen Mal einige Steine
				von Koffer, den ich mit mir mitschleppe, verloren.
				<br />
				<br />
				Was war der erste Schritt: mit sechzehn habe ich das kaum alleine
				durchziehen können und das in Südtirol mit konservativen und
				engstirnigen Leuten! Bis ich tatsächlich den Schritt gewagt habe,
				sollten noch einige Jahre vergehen. Ich hatte zu viel Angst vor anderen
				Menschen und deren Meinungen. Also habe ich das wieder runtergeschluckt.
				<br />
				<br />
				Drei Jahre später, wie vermutet, hat mich das wieder eingeholt. Diese
				Mal habe ich beschlossen, es durchzusetzen. Ich hab mein Leben in die
				richtige Richtung lenken müssen, und das ist nur gegangen, indem ich mit
				meinem Körper eins werde. Ich habe mich gut informiert und war
				überrascht, dass es in Südtirol tatsächlich möglich war. Es hat Kontakte
				gegeben, die mir helfen konnten das alles ins Rollen zu bringen.
				<br />
				<br />
				Natürlich habe ich wieder ein Gespräch mit Mama führen müssen. Es war
				schwer für mich, weil ich einfach nicht die richtigen Worte finden
				konnte und da meine Verwandtschaft ziemlich aufbrausend untereinander
				ist, wird es häufig laut und emotional. Aber zum Glück habe ich die
				Unterstützung von meinen Elter bekommen. Meiner Schwester haben wir
				vorerst nichts gesagt, weil wir bereits in der Vergangenheit
				festgestellt haben, dass sie nicht so vertraut mit kontroversen Themen
				war. Ich glaube, ich war ca. eineinhalb Jahre in Therapie, als ich dann
				meine erste Hormonspritze bekommen habe.
				<br />
				<br />
				Meine Schwester hat das dann auch alles erfahren, als ich das durchzog.
				Seitdem habe ich sie nicht mehr gesehen. Ich habe kein Wort mehr mit ihr
				ausgetauscht. Leider lehnt sie das total ab und hat lieber eine
				unglückliche Schwester als einen glücklichen Bruder. Irgendwann wird sie
				es auch verstehen und ich werde dann auch noch da sein und sie mit
				offenen Armen empfangen.
				<br />
				<br />
				Zurzeit durchlaufe ich gerade meine Zweite Pubertät. Nur dieses Mal ist
				es die Richtige. Die Hormonspritze mit Testosteron, die mir alle drei
				Monaten intramuskulär injiziert wird, ist zwar kein Zaubermittel, das
				mich zu einem Mann macht, aber ein bisschen fühlt es sich schon danach
				an. Ich muss ein bisschen mit der Operation nachhelfen, Brust, innere
				Geschlechtsorgane und Geschlechtsangleichung ist zwar kein Muss für
				jeden, aber ich will einfach bei 100 Prozent ankommen. Ich will das
				volle Programm, nichts zwischendrin sein, denn das war ich mein ganzes
				Leben lang.
				<br />
				<br />
				Ich werde mein biologisches Geschlecht nicht leugnen. Das ist einfach
				so, aber jetzt fängt der Rest meines Lebens an und Tag für Tag geht es
				mir besser. Mein Koffer wird von Tag zu Tag leichter. Es ist ein sehr
				langer Prozess, und ich stehe erst am Anfang, aber es ist es wert: ich
				bin es mir wert. Und wenn ich eines aus dem Ganzem gelernt habe, dann
				ist es, zu sprechen.
				<br />
				<br />
				Ich würde meinem jüngerem Ich die Angst nehmen, dass es voll akzeptiert
				werden kann. Ich bin immer mehr überrascht, wie offen die Leute damit
				umgehen. Ich würde mir sagen: „Hab Mut und sei geduldig! Es ist nicht
				leicht, aber es lohnt sich und du wirst ankommen. Friss es nicht in dich
				hinein, sondern spreche mit Menschen, denen du vertraust. Mach deinen
				Koffer selber leichter. Ich verspreche dir eins, es wird besser.“
			</>
		),
		url: 'https://res.cloudinary.com/dqfcbw5tz/video/upload/v1644003981/dunkleecken/audios/DE/DE_audio_9_r2evvt.m4a',
		type: 'audio/mp4',
		id: 5,
	},
	{
		zitat: 'Freundschaften sind Raststätten auf meinem Lebensweg',
		description: (
			<>
				Grüß Gott. Ich habe eine schnelle, ansteigende Depression mit
				Suizidversuch erlebt und Gott sei Dank überlebt. Dankbar bin ich, dass
				ich durch meine Erzählung Licht in dieses dunkle Thema bringen darf.
				<br />
				<br />
				Im Jahre 2003 hat mich die seelische Krankheit konfrontiert. Ich fühlte
				mich mit schwachem Selbstwertgefühl total überfordert in meinem Beruf
				als selbstständige Frisörin. Ich fühlte mich nicht mehr der Arbeit
				gewachsen. Mein Lehrmädchen wollte in den Urlaub, Samstags standen
				Hochzeitsfrisuren an. Ich fühlte mich verletzt durch das nicht Anwesen
				sein des damaligen Freundes und der Trennung. Ich fühlte mich müde und
				erschöpft. Nach mehreren Wohnungswechseln und wenig Schlaf fühlte ich
				mich verzweifelt, da Antidepressiva erst nach zwei Wochen wirken.
				<br />
				<br />
				Heute kann ich sagen, dass mehrere Dinge sich angesammelt hatten, die
				zur Depression führten. Arbeitsbedingt sah ich meinen Vater in der
				Kindheit wenig. Die Mutter war traurig als mein Vater immer wieder in
				die Schweiz zur Arbeit musste. Ich war neun Jahre alt, als mein Vater an
				einer Art Leukämie erkrankte und später verstarb. Im Jugendalter war ich
				mollig und erfuhr Mobbing von Mitschülern und Lehrern. Die Pille, die
				ich durch sehr unregelmäßige Monatsblutungen von meinem Frauenarzt
				verschrieben bekam, hat auch zur Depression beigetragen. Der Auslöser
				der Depression war die Trennung meines damaligen Freundes.
				<br />
				<br />
				Erwähnen möchte ich einen Zuspruch, den ich in einer schlaflosen Nacht
				gegeben habe. “Lieber Jesus, was auch immer in meinem Leben passieren
				mag, den Glauben will ich nicht verlieren.”
				<br />
				<br />
				In kurzer Zeit war ich nicht im Stande mich mitzuteilen, wie schlecht es
				mir ging, kurz drauf begann Suizid. Der Notruf durch meine Nachbarin war
				der Start der Rettungskette. Weißes Kreuz, Pelikan und Notarzt waren
				schnell zur Stelle, versorgten mich und brachten mich ins Bozner
				Krankenhaus. Nach Notoperationen wurde ich drei Wochen ins künstliche
				Koma gelegt. Niemand wusste, ob ich es überlebe, ob Kopfschäden bleiben,
				ob ich je wieder Laufen kann. Ich war ein halbes Jahr im Krankenhaus und
				auf REHA-Aufenthalt. Der körperliche Aufbau aus dem Rollstuhl war eine
				große Herausforderung, aber der seelische Aufbau hat eine ganz andere
				Dimension.
				<br />
				<br />
				Über die seelische Krankheit haben sich meine Mutter, meine Schwester
				und die engsten Freunde auseinandergesetzt und waren durch Halt, Stütze
				und Hoffnung für mich da. Mit dieser Gelegenheit möchte ich meinen
				Lieben “Vergelts Gott” sagen. Hoffnung schenkten mir Krankenschwestern,
				Ärzte und Therapeuten. Freude brachten mir Menschen, die mich besuchten
				und für mich beteten. Erholung gaben mir Freundschaften, die ich genau
				in schweren Zeiten kennenlernte. Sie waren und sind Raststätten auf
				meinem Lebensweg. Getragen fühlte ich mich in Gemeinschaften wie der
				katholischen Frauenbewegung, in denen ich Menschen erlebe die offen,
				verständnisvoll und hilfsbereit sind und auch ein “Nein” akzeptieren.
				Getragen fühle ich mich besonders in der Glaubensgruppe, in der ich
				zusammen auf dem Weg bin die Mutter Gottes, unsere Mutter und Jesus
				Christus unsern Herrn und Gott, kennen und lieben zu lernen. Gebet
				schenkt mir immer wieder Friede, Ruhe, Kraft und Freude. Heilung erfuhr
				und erfahre ich durch Heilkräuter. Das Buch “Die Apotheke der Natur” von
				Hochgrebe Gottfried, eine Kräutenexpertin in diesem Team, der bin ich
				sehr dankbar.
				<br />
				<br />
				Ausgleich und Freude geben mir Musik, Tanz und Wandern in der Natur,
				dass ich heute bewusster lebe und wofür ich bin sehr dankbar. Die Liebe
				war und bleibt der hellste Lichtblick meines Lebens. Rückblickend
				erinnere ich mich gut, wie ich mit den Gedanken rang: “Welcher Mann mag
				mich denn jetzt noch?” Auch da stellte ich Jesus die Frage: “Gibt es
				einen Mann, der mich liebt so wie ich bin? Sogar nach einem Suizidfall?“
				<br />
				<br />
				Ja, die Liebe verband mich mit einem Mann. Er glaubte daran, dass ich
				wieder gesund werde. Er hat wesentlich zum seelischen Heil beigetragen,
				wofür ich täglich dankbar und glücklich bin. Diesen Moment nutze ich ihm
				zu sagen: “Ich liebe dich”. Die Liebe schenkte uns einen Sohn und ich
				durfte Mami werden.
				<br />
				<br />
				Mich haben alle diese Erfahrungen geprägt. Ich finde immer mehr zu
				meinem Selsbtwertgefühl. Ich kann überzeugt sagen: Ich muss auf meine
				körperliche und seelische Gesundheit schauen und ich bin dankbar,
				Ehefrau, Mami und Hausfrau sein zu dürfen. Ich nehme ganz bewusst Hilfe
				an, sei es ärztliche, sei es Hilfe von einem Nächsten. Pfeiler in meinem
				Leben sind Glaube, Liebe und Hoffnung. Danke für Ihr zuhören.
			</>
		),
		url: 'https://res.cloudinary.com/dqfcbw5tz/video/upload/v1644003984/dunkleecken/audios/DE/DE_audio_1_ibnm78.mp4',
		type: 'audio/mp4',
		id: 6,
	},
	{
		zitat: 'Es braucht viel Kraft und sehr viel Selbstliebe',
		description: (
			<>
				Also, ich bin eine 20-jährige Studentin aus Südtirol und 2015 bin ich
				mit einer Bipolaren Störung diagnostiziert worden. Bipolare Störungen
				sind Stimmungsschwankungen, die sehr abrupt und sich sehr stark
				abspielen. Das beste Beispiel ist: manchmal putze ich mein Zimmer so
				gründlich, sodass man danach vom Boden essen könnte. Auf einmal geht es
				mir nicht mehr so gut und ich muss mich erst ins Bett legen, weil ich
				auch nicht aus dem Bett raus kann. Dann ist eine Hälfte vom Zimmer super
				sauber und die andere Hälfte ist chaotisch.
				<br />
				<br />
				Diese zwei Extreme nennt man „manische Depression” und „manisches Hoch”,
				wenn man es so “formal” nennen möchte. Das habe ich von meinem
				Psychiater und meiner Psychologin gelernt.
				<br />
				<br />
				Viele Menschen denken auch, dass das manische Hoch gar nicht so schlimm
				ist, weil man sich gut fühlt, man auch manchmal einen kleinen Egotrip
				hat, es ist aber eine sehr physisch intensive Zeit, auch weil man ja so
				viel Energie hat. Man hat so viel Lust 10.000 Sachen zur selben Zeit zu
				tun. Manische Depressionen sind auch physisch schwer, weil es ist auch
				nicht gesund, wenn man für längere Zeit einfach nichts tut für seinen
				Körper.
				<br />
				<br />
				Im Laufe der Therapie und im Gespräch mit Freunden und anderen Menschen,
				die ebenso bipolare Störungen haben, lernt man immer mehr, wie man mit
				diesem „Switch” umgehen kann, sodass die Panikattacken und
				Angstzustände, die man dort erlebt, einem nicht zu falschen
				Entscheidungen führen.
				<br />
				<br />
				Angefangen hat das Ganze glaube ich, schon nachdem ich geboren bin, weil
				bipolare Störungen genetisch vererbbar sind. Mein Vater hat auch eine
				bipolare Störung und eigentlich sehe ich in meinem Leben schon immer
				wieder ein Muster, dass, egal in welcher Situation ich bin, ich immer
				alles extrem fühlen muss. Ich fühle alles schwarz oder weiß. Ich kann
				nichts grau fühlen.
				<br />
				<br />
				Das Ziel meiner Therapie und meiner Selbstfindung ist es, dass ich
				Situationen auch mal grau sehen kann, dass ich es einfach mal genießen
				kann und nicht immer alles überdenken muss oder auch nicht zu wenig
				denke, dass ich einmal im Moment sein kann. Ich glaube, man lebt als
				mental kranker Mensch sehr oft in der Vergangenheit und in der Zukunft.
				Durch Traumata und Tagesträume zwingt man sich selbst in so Traumwelten,
				wo man total isoliert mit sich selbst ist.
				<br />
				<br />
				Man muss, glaube ich, einfach lernen den Moment zu leben, nicht immer
				10.000 Sachen zu finden, die schief gehen könnten. Das ist natürlich ein
				sehr schwerer Weg und ich glaube, dies ist auch eine Sache, die alle
				Menschen betrifft. Aber im Falle einer mentalen Krankheit muss man es
				auch mit Hilfe von gesunden Bewältigungsmechanismen lernen. Ich habe
				eine Reihe an ungesunden Bewältigungsmechanismen schon durchgemacht,
				abgesehen davon, dass so Diagnosen wie zB. Bipolare Störungen,
				Schizophrenie, Borderline Personality Disorder oder Exzessive Compiety
				Disorder ein Tabuthema sind, sind auch die schlechten
				Bewältigungsmechanismen Tabuthemen.
				<br />
				<br />
				Wie du zu dir selber findest und wie du mit dir selbst zurechtkommst,
				auch im Rahmen von mentalen Krankheiten, das ist natürlich ein ganz
				langer Weg. Da macht man Fehler, man macht auch Sachen, wo man
				einschneidendere Ergebnisse haben könnte. Aber das Wichtigste ist, dass
				man sich als mental kranker Mensch immer wieder daran erinnert, dass man
				keine schlechten Intentionen hat und das man Chancen verdient hat ein
				qualitatives Leben zu führen. Dazu gehört natürlich auch für sich selbst
				ein gutes Umfeld aufzubauen. Im Sinne von: „giftige Menschen loslassen”,
				Medien konsumieren, die einen glücklich machen und Musik zu hören, die
				einen glücklich macht.
				<br />
				<br />
				Natürlich ist es manchmal auch schwer, weil man manipulativ sein kann
				mit sich selbst und dann hört man genau das eine Lied, dass einen
				traurig macht. Den Großteil des Tages oder des Lebens sollte man aber
				schon mit positiven Einflüssen verbringen. Ich finde, diese Einflüsse
				sollte man selbst nicht als zu kindisch oder irrational abwerten,
				solange sie keinem weh tun und vor allem dir selbst nicht, sind sie sehr
				wichtig, und haben einen tiefgründigen Wert.
				<br />
				<br />
				Meinem jüngeren Ich würde ich gerne sagen, dass sie sich nicht so viel
				mit der Krankheit identifizieren soll. Natürlich ist es wichtig sie
				anzunehmen und zu akzeptieren, damit man aus der Diagnose auch etwas
				machen kann, aber die Diagnose ist nur der erste Schritt und da darf man
				nicht steckenbleiben. Das ist eine Sache, die viel Kraft braucht, die
				sehr viel Selbstliebe braucht, die man sich antrainierne muss, aber es
				ist es wert! Und egal wo jemand gerade stecken sollte, ich glaube es
				gibt immer etwas Positives, das man für sich an jeden einzelnen Tag
				mitnehmen kann. Somit, ja… das war ein bisschen was über mich!
			</>
		),
		url: 'https://res.cloudinary.com/dqfcbw5tz/video/upload/v1644003989/dunkleecken/audios/DE/DE_audio_7_hk2klz.m4a',
		type: 'audio/x-m4a',
		id: 7,
	},
	{
		zitat: 'Du hast die Zukunft in deiner Hand',
		description: (
			<>
				Hey ich bin 34 Jahre alt, Künstler und Tättowierer und dass ich an einer
				psychischen Krankheit leide, ergab sich bei mir ziemlich früh nach einem
				Vorfall in meiner Kindheit. Zwei meiner Freunde wurden sexuell
				missbraucht und ich bin dem Ganzen nur entgangen, weil ich ein paar
				Sekunden zuvor von meiner Mutter nach Hause gerufen wurde. Der
				Geburtstag meiner Oma stand an. Der Täter, ein sehr gut bekannter
				Nachbar, hat die beiden dann schlussendlich zerstückelt und in seinem
				Garten unter ganz hohem Gras und unter Bäumen und Büschen in Müllsäcken
				versteckt. An diesem Tag begann dann verständlicherweise das Chaos in
				meinem Leben. Ein Auf und Ab, ein Auf und Ab.
				<br />
				<br />
				Das habe ich alles aber erst recht spät verstanden. Starke
				Verlustängste, Panikattacken, Selbstzweifel, manische Depressionen, usw.
				Mein Umfeld, meine Familie, meine Freunde waren alle sehr
				verständnisvoll. Die haben das natürlich alle mitbekommen.
				<br />
				<br />
				Ich war lange nicht in der Lage, Freundschaften führen zu können oder
				Autoritäten zu akzeptieren. Vertrauen schenken fällt mir heute nach wie
				vor wirklich schwer. Meinen Halt habe ich in meiner Kunst und in meiner
				Arbeit gefunden. Ich habe angefangen, Dinge für mich zu tun, um mir mein
				Fundament neu aufzubauen nachdem ich in der Vergangenheit ja einige
				Tiefen durchlebt habe. Seit dem liegt der Fokus einzig auf mir. Auf
				meinem Dasein und auf meinen Wünschen, die ich erfüllen will.
				<br />
				<br />
				Das Heilen der Seele braucht sehr, sehr lange und es braucht wirklich
				starke und gute Freunde. Ich bin dankbar, das ich eine Handvoll von
				diesen tollen Menschen meine Freunde nennen kann. Wir gehen alle offen
				miteinander um. Da bleiben keine Fragen offen, es ist einfach kein Platz
				für “Overthinking”.
				<br />
				<br />
				Seit einer Weile halten sich meine Depressionen im Rahmen. Ich versuche,
				Triggerpunkte erst gar nicht wirken zu zulassen, es kann aber trotzdem
				passieren, dass sich meine Laune fünf bis zwanzig Mal am Tag verändert.
				Es ist aber Okay, wenn es mir mal nicht gut geht. Das ist natürlich
				anstrengend, das kostet Kraft.
				<br />
				<br />
				Versuche Mal, eine Rolltreppe mehrmals in die entgegengesetzte Richtung
				hinaufzurennen. Irgendwann bist du kaputt, schlapp, und musst die Treppe
				zusammengekrümmt abwärtsfahren. Das ist mein Gefühl, in Worte gefasst.
				<br />
				<br />
				Mir helfen verschiedene Dinge diesem Zustand so gut wie möglich von mir
				fernzuhalten. In allererster Linie und das ist witzig: meine Arbeit.
				Etwas wo Menschen mir, 100 Prozent vertrauen müssen. Kunst, Musik und
				mein Hund.
				<br />
				<br />
				Ich lasse es zu, wenn es mir nicht Okay geht. Auch das muss man lernen.
				Alles in Allem geht es bergauf, ich bin nicht geheilt… noch nicht! Es
				wird von Tag zu Tag besser. Rücktritte sind vollkommen okay, gehören
				dazu und machen mich mittlerweile stark. Das hätte ich meinem jüngerem
				“Ich” auch mit auf den Weg gegeben. Nichts ist so stark, dass du es
				nicht überstehst.
				<br />
				<br />
				Mit fast 35 Jahren und einem Weg, kann ich sagen, das aller,
				allerwichtigste: Habt verdammt noch mal keine Angst vor der Zukunft! Du
				hast die Zukunft in deiner Hand. Ich wünsche allen da draußen, dass sie
				ihre Stärke erkennen, durchhalten und niemals verstummen.
			</>
		),
		url: 'https://res.cloudinary.com/dqfcbw5tz/video/upload/v1644003984/dunkleecken/audios/DE/DE_audio_3_aammrt.m4a',
		type: 'audio/mp4',
		id: 8,
	},
	{
		zitat: 'Ohne Tiefen kann man auch nicht das Hoch sehen',
		description: (
			<>
				Als meine Panikattacken begannen war ich noch zuhause in Südtirol und
				war vier Mal ins Krankenhaus gefahren, da ich dachte, ich würde sterbe.
				Ich dachte ständig, dass ich irgendeine Krankheit habe, die unheilbar
				ist, und ich einen Herzinfarkt bekäme oder an anderen Krankheiten
				sterben werde.
				<br />
				<br />
				Mir konnte keiner wirklich sagen, was es ist. Nach einem Jahr in Berlin
				habe ich herausgefunden, dass es Panikattacken waren. Ich habe gemerkt,
				dass ich Unterstützung von Psychologen und Menschen brauche, habe auch
				gemerkt, dass ich offen sein muss für Hilfe von anderen Menschen. Das
				hat mich dann auch dieses Jahr zum Psychologen gebracht. Ich habe zum
				ersten Mal mit einer außenstehenden Person gesprochen und konnte meine
				inneren Gedanken und Dämonen äußern. Ich habe auch gelernt, dass es ich
				es äußern muss, da es mir gut tut und meinem Kopf und meinen Gedanken
				hilft.
				<br />
				<br />
				Es war wie ein Teufelskreis, oder eine Teufelsspirale, die immer weiter
				nach unten ging und auch alle zwei Wochen gekommen ist und ein Maß
				angenommen hat, dass mir viel Energie und Lebensqualität gestohlen hat.
				Eigentlich konnte ich nichts mehr als schön empfinden, alles war nur
				schwer für mich. Für mich ist es sehr wichtig darüber zu sprechen. Ich
				würde nicht sagen, dass es ein Tabuthema war. Es war mir einfach zu
				peinlich, darüber zu sprechen, da ich schon immer eine Person war, die
				viele Gefühle hatte und die auch erst vor kurzem gelernt hat, damit
				umzugehen oder auch zu lernen damit umzugehen. Andere Menschen können
				die selben Gedankengänge haben, oder auch andere Gedankengänge. Mit
				ihnen zu sprechen, lerne ich auch neue Blickwinkel. Beim Psychologen
				selbst war es so, dass wir herausgefunden haben, dass es ganz viel mit
				Angst vor Bewertung zu tun hat.
				<br />
				<br />
				Nicht gut genug zu sein, aber nicht nur für andere Menschen, sondern vor
				allem für sich selbst. Ich habe auch gemerkt, ich projeziere sehr viel
				auf mich und andere, das zieht mich runter. Ich habe angefangen, mit
				Familienmitgliedern zu sprechen und mit Freunden. Es soll kein Tabuthema
				sein und es soll einem nicht peinlich sein, denn es ist das Wichtigste,
				zu wissen, dass man nicht alleine ist. Zu wissen, dass es viele andere
				Menschen gibt, die auch ähnliche Symptome oder ähnliche Gedanken haben.
				<br />
				<br />
				Ich würde mir selbst raten, wenn ich mir was sagen könnte: und zwar,
				dass ich nicht alles so ernst nehmen soll und dass ich auch nicht alles
				auf mich selbst projizieren soll und viel mehr Zeit für mich selbst zu
				haben und auf mich stolz zu sein, positives zuzulassen.
			</>
		),
		url: 'https://res.cloudinary.com/dqfcbw5tz/video/upload/v1644003978/dunkleecken/audios/DE/DE_audio_6_rmxok8.m4a',
		type: 'audio/x-m4a',
		id: 9,
	},
	{
		zitat: 'Das wichtigste ist, mit Leuten darüber zu sprechen',
		description: (
			<>
				Ich bin 24 Jahre alt und männlich, und hab schon seit mehreren Jahren
				etwas, ich weiß nicht ob ich es Depression nennen würde, aber
				Panikattacken oder einfach Phasen, wo ich mehr “down” bin. Das äußert
				sich so ein bisschen in Wutausbrüchen zum Beispiel, wo ich mich selber
				auch teilweise schlage. Es ist eher so mit der Faust aufs Bein hauen,
				oder mit der Faust gegen den Kopf schlagen, aber es geht nicht so weit
				wie Ritzen, oder sowas. Wegen den Außbrüchen habe ich irgendwie auch
				Angst, andere zu verletzen, wodurch das auch meistens kommt.
				<br />
				<br />
				Ich komme nicht damit klar, wenn ich etwas falsch gemacht habe und die
				andere Person, worum es auch geht, Zeit für sich braucht, dann komme ich
				nicht damit klar. Ich bin ein Mensch, der immer darüber reden muss, und
				wenn jemand dann von mir wegläuft oder einfach Zeit braucht, dann mache
				ich mit totale Vorwürfe und gerate in eine Art Panik. Ich denk dann
				immer gleich, dass ich das Problem bin, dass ich alles falsch gemacht
				habe und will mich ein bisschen dafür bestrafen, glaube ich? Dann kommt
				es halt zu diesem Schlagen, was auf jeden Fall nicht gut ist und woran
				ich auch arbeite.
				<br />
				<br />
				Früher war es noch schlimmer, da habe ich auch Sachen zerbrochen, aber
				das hat sich auf jeden Fall gebessert. Teilweise habe ich auch
				Suizidgedanken, wobei ich aber sagen muss, dass die eigentlich nicht so
				ausgeweitet sind und die haben sich auch gebessert.
				<br />
				<br />
				Wie hat das angefangen? Ich glaube es hat schon in meiner Kindheit
				angefangen. Ich weiß, dass mein Vater auch Wutausbrüche hat und ich auch
				schon in der Kindheit nicht damit umgehen konnte, wenn mir jemand nicht
				zugehört hat. Ich glaube, bei uns in der Familie war es ganz oft so,
				dass mein Vater mit anderen Sachen beschäftigt war und so getan hat, als
				würde er zuhören, aber natürlich hat mam gemerkt, dass es nicht so war.
				Das merke ich auch heutzutage noch, dass ich einfach wütend werde, wenn
				mir jemand nicht wirklich zuhört und ich die Aufmerksamkeit dadurch
				nicht bekomme. Das artet dann manchmal genauso aus.
				<br />
				<br />
				In meiner jetzigen Beziehung ist es glaube ich auch so, dass ich mich
				immer auf die andere Person eingelassen habe und weniger auf meine
				eigenen Gefühle gehört habe. Somit stecke ich jetzt fest, weil ich zu
				allem “ja” sage, was die andere Person möchte, nur weil ich dieser
				Person sehr gefallen und sie nicht verletzen möchte. Dadurch unterdrücke
				ich aber meine Gefühle, was daran ausartet, dass ich sehr wütend werde,
				weil ich einfach keine Lust habe, auf das dem ich zugestimmt habe. Es
				ist so ein kleiner Teufelskreis. Und ich meine, ich sage immer “ich
				glaube”, weil ich es auch nicht genau weiß.
				<br />
				<br />
				Ich habe schon früher eine Therapie gemacht und muss übrigens sagen,
				dass ich auch schwul bin, das hat mein ganzes Leben am Anfang etwas
				schwerer gemacht. Auch mich selber zu akzeptieren. Aber seitdem ich
				eigentlich damit ok bin und mit mir im Reinen bin, ist das auch alles
				viel besser. Ich bin auch sehr froh, dass meine Familie es akzeptiert.
				<br />
				<br />
				Ich glaube wir haben halt alle so ein paar Macken, mit denen wir einfach
				lernen müssen umzugehen. Ich muss schon sagen, dass es eigentlich nicht
				ein “Tabuthema” ist, oder dass es nicht so empfunden wird. Ich meine
				klar, hat man manchmal das Gefühl. Aber ich bin ein Mensch, der das sehr
				frei und offen ausspricht. Meine Freunde wissen das auch. Teilweise wenn
				ich neue Leute kennenlerne, dann spreche ich auch gleich über das, was
				mich sozusagen stört. Oder auch weil ich eben ein Problem habe mit mir
				selber. Dann rede ich auch gerne darüber. Manchmal kann es zu viel sein
				für Manche. Meistens aber ist es ok. Sie sind halt auch meine Freunde,
				eigentlich.
				<br />
				<br />
				Natürlich trifft man manchmal negative Menschen, die das nicht so
				aufnehmen können, denen es vielleicht auch zu offen ist? Aber ich würde
				eher sagen, dass das seltener ist.
				<br />
				<br />
				Auch zu diesen Suizidgedanken, manchmal in meiner Panik spreche ich das
				aus, von wegen: “Ich habe keine Lust mehr aufs Leben.”, denke darüber
				nach, wie man es machen könnte, aber jetzt auch nicht so stark. Ich
				glaube, meine Freunde wissen, dass es nicht so stark ist. Ich kann mir
				vorstellen, dass manche, wenn sie es hören, für die kann es schon sehr
				krass wirken. Und das ist aber auch so ein Schrei nach Aufmerksamkeit.
				<br />
				<br />
				Ich meinte schon vorhin, dass ich auch schon in Therapie war, und ich
				kann es auch wirklich empfehlen. Ich war einmal, als ich auf die Schule
				gegangen bin damals beim Therapeuten, das hat mir schon viel gebracht.
				Einerseits, einfach um mich zu akzeptieren, so wie ich bin.
				<br />
				<br />
				Dann bin ich aber in eine andere Stadt gezogen und habe erstmals keine
				Therapie gemacht. Habe dann aber irgendwann wieder eine Neue angefangen.
				Ich muss sagen, man sollte auf jeden Fall versuchen, sich Zeit dafür zu
				nehmen und sich auch die Zeit nehmen den richtigen Therapeuten zu
				finden. Ich hatte nicht den richtigen Therapeuten, ich hatte nicht die
				Zeit und ich hatte auch nicht die Kraft, mich auf mich selbst und auf
				diese Therapie einzulassen, weshalb ich sie auch abgebrechen musste.
				<br />
				<br />
				Im Moment komme ich sehr gut mit mir selber klar. Ich habe meinen
				Freund, der hilft mir auch sehr damit. Ich glaube das Wichtigste ist,
				mit Leuten auch darüber zu reden. Das nicht für sich zu behalten. Immer
				an sich selber zu arbeiten, an sich auch zu glauben!
				<br />
				<br />
				Ich glaube, jeder Mensch ist perfekt so wie er ist. Natürlich hat er
				seine Macken, mit denen man aber umgehen muss, aber man sollte sich
				nicht dafür hassen. Man sollte seine Macken vielleicht sogar ein
				bisschen lieben lernen und einfach versuchen, damit umzugehen.
			</>
		),
		url: 'https://res.cloudinary.com/dqfcbw5tz/video/upload/v1644003980/dunkleecken/audios/DE/DE_audio_2_iuhpzt.m4a',
		type: 'audio/x-m4a',
		id: 10,
	},
];
