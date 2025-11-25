export const siteConfig = {
	name: 'Engineering Portfolio',
	description:
		'A professional portfolio website template for engineering students.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Experience',
			href: '/experience',
		},
		{
			title: 'Projects',
			href: '/projects',
		},
		{
			title: 'Education',
			href: '/education',
		},
		{
			title: 'Skills',
			href: '/skills',
		},
		{
			title: 'Contact',
			href: '/contact',
		},
		{
			title: 'Blog',
			href: '/blog',
		},

	],
	links: {
		github: 'https://github.com/nturner0',
		linkedin: 'https://www.linkedin.com/in/nicholas-turner-9b60191ba/',
		// email: 'nturner1@g.ucla.edu',
		// phone: 'tel:+19167572710',
	},
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'R&D Engineer I',
		company: 'UCLA',
		location: 'CERN, Switzerland',
		startDate: 'Aug 2024',
		endDate: 'Present',
		description: [
			'Developed HDL for trigger in CMS in the Large Hadron Collider',
			'Lead several studies debugging custom PCBs, collaborating with experts to find solutions',
			'Implemented an ecosystem to control EEPROMs via JTAG from RPI GPIO, retiring iMPACT',
		],
		technologies: ['VHDL', 'cocotb', 'Python', 'Linux', 'Git', 'Oscilloscope'],
	},
	{
		title: 'Undergraduate Researcher',
		company: 'UCLA - Particle Beam Physics Laboratory',
		location: 'Los Angeles, USA',
		startDate: 'Jun 2023',
		endDate: 'Sep 2023',
		description: [
			'Designed and built a relay box to remotely switch current direction on multiple channels',
			'Investigated methods to compare experimental results with an analytic undulator matrix',
		],
		technologies: ['MATLAB', 'LABVIEW', 'Python'],
	},
	{
		title: 'Undergraduate Researcher',
		company: 'UCLA - Communication Systems Laboratory',
		location: 'Los Angeles, USA',
		startDate: 'Jun 2022',
		endDate: 'Aug 2022',
		description: [
			'Worked on implementing an efficient decoding algorithm in HDL (list Viterbi decoder, tail-biting convolutional codes)'
		],
		technologies: ['VHDL', 'Python'],
	},
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'Segment Finder for CMS ME0 Trigger',
		description:
			'Low-latency muon track finding algoirthm implemented on an FPGA. Designed several stages of the algorithm, including a cross-partition deghoster, a BRAM ring buffer & windowing, an optimized bitonic sorting network, and out-of-time synchronization.',
		image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
		tags: ['FPGA', 'VHDL', 'Python', 'cocotb'],
		// link: '#',
		repo: 'https://github.com/andrewpeck/me0sf/tree/SW_optimizations',
	},
	{
		title: 'ALCT Teststand Backend',
		description:
			'Developed software for JTAG programming and control of EEPROMs and FPGAs on custom boards. Utilized JTAG GPIO on a Raspberry Pi and custom TTL -> LVDS PCB to replace old system.',
		image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg',
		tags: ['JTAG', 'Python', 'FPGA', "Raspberry Pi"],
		// link: '#',
		repo: 'https://gitlab.cern.ch/emu/alct_test_utils/-/tree/program_alct_from_rpi?ref_type=heads',
	},
	{
		title: 'ME0 Hardware Testing and Debugging',
		description:
			'Lead several hardware debugging studies, including Optohybrids (serializer and optical converter), bPOLs (DC-DC converters), and readout boards. Built teststands and designed software to analyzes to determine severity of problems, and develop targeted solutions.',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['Data Analysis', 'IoT', 'Renewable Energy', 'Visualization'],
	},

];

export const projects_personal: Project[] = [
	{
		title: 'Digital Audio Visualizer (DAV)',
		description:
		    'Implemented a 32 point FFT processor and VGA controller on an FPGA in SystemVerilog. Integrated several modules (microphone input, signal processing, VGA display output) into a functional system that displays the frequency decomposition of microphone input.',
		image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
		tags: ['FPGA', 'SystemVerilog', 'FFT'],
		// link: '#',
		// repo: '#',
	},
	{
		title: 'HydrateMate',
		description:
			'Built a system to track water consumption via microcontroller and ultrasonic sensor, paired via Bluetooth with a user-friendly web application.',
		image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg',
		tags: ['Arduino', 'C++'],
		// link: '#',
		// repo: '#',
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	// achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Bachelor of Science & Bachelor of Arts',
		field: 'Electrical Engineering & Physics',
		institution: 'University of California, Los Angeles',
		location: 'Los Angeles, USA',
		startDate: 'Sep 2020',
		endDate: 'Jun 2024',
		gpa: '3.92',
		// achievements: [
		//   Examples:
		// 	'Dean\'s List (All Quarters)',
		// 	'Academic Excellence Scholarship',
		// 	'Senior Design Project Award',
		// ],
	}
];

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'Engineering Professional Certification',
		issuer: 'Professional Engineering Association',
		date: 'Nov 2023',
		id: 'CERT-12345',
		url: '#',
		pdf: '/certificates/sample.pdf',
	}
];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'digital design';
};

export const skills: Skill[] = [
	// Software Skills
	{ name: 'C++', level: 8, category: 'software' },
	{ name: 'Python', level: 8, category: 'software' },
	{ name: 'VHDL', level: 8, category: 'software' },
	{ name: 'SystemVerilog', level: 7, category: 'software' },
	{ name: 'MATLAB', level: 7, category: 'software' },

	// Digital Design Skills
	{ name: 'Algorithm Design', level: 8, category: 'digital design' },
	{ name: 'Timing Closure', level: 8, category: 'digital design' },
	{ name: 'Verification', level: 8, category: 'digital design' },

	// Soft Skills
	{ name: 'Problem Solving', level: 10, category: 'soft' },
	{ name: 'Team Leadership', level: 9, category: 'soft' },
	{ name: 'Project Management', level: 9, category: 'soft' },
	{ name: 'Technical Writing', level: 9, category: 'soft' },
	{ name: 'Presentation', level: 8, category: 'soft' },

	// Technical Skills
	{ name: 'Soldering', level: 8, category: 'technical' },
	{ name: 'CAD', level: 7, category: 'technical' },
	{ name: 'Cable Work', level : 7, category: 'technical'}
];

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};

export const blogPosts: BlogPost[] = [
	{
		title: 'Advances in Renewable Energy Technologies',
		excerpt: 'Exploring the latest innovations in renewable energy and their impact on sustainable development.',
		date: 'Mar 15, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
		slug: 'advances-in-renewable-energy',
	},
	{
		title: 'The Future of Robotics in Manufacturing',
		excerpt: 'How robotics and automation are revolutionizing the manufacturing industry and creating new opportunities.',
		date: 'Feb 22, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
		slug: 'future-of-robotics-manufacturing',
	},
	{
		title: 'Sustainable Building Materials in Modern Construction',
		excerpt: 'An analysis of eco-friendly building materials and their applications in contemporary architecture.',
		date: 'Jan 10, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
		slug: 'sustainable-building-materials',
	},
];