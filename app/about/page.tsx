'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<h1 className="text-4xl font-bold">About Me</h1>
						<p className="text-lg text-muted-foreground">
							Hi, I'm Nick. I am an engineer working on developing HDL for the Large Hadron Collider (LHC), which I think is pretty neat.
							My focus is around the digital design architecture level of abstraction, but I like to say I'm a super full-stack dev: from muons to neural nets.
							I'm currently doing my best to fill in the gaps.
						</p>
						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">My Journey</h2>
							<p className="text-muted-foreground">
								I graduated from UCLA in 2024 majoring in Electrical Engineering and Physics, and a technical breadth in Computer Science.
								I work for UCLA as an R&D Engineer in the Compact Muon Solenoid (CMS) experiment, part of the LHC. Specifically, I develop HDL for GEM ME0 trigger,
								which requires ultra-low latency and high throughput algorithms to determine which events are interesting (~1kB per ~200 nanoseconds ~= 5TB/s throughput).
								I also test PCBs and ASICs, and develop testing suites (physical teststands, equipment interfaces, and scripts), and developed a system to program old EEPROMs and FPGAs
								from a Raspberry Pi backend via bitbanging (MCS file ⟶ deployment; substitutes Vivado for unsupported devices).
							</p>
						</div>
						<Button className="mt-6" asChild>
							<a href="/resume.pdf" download>
								Download Resume <ArrowDownCircle className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>

					<motion.div variants={fadeIn('left', 0.3)} className="relative h-[500px]">
						<Image
							src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
							alt="Professional photo"
							fill
							className="object-cover rounded-lg"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Education</h3>
								<p className="text-muted-foreground">
									Electrical Engineering and Physics, UCLA 2024 (GPA 3.92)
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Experience</h3>
								<p className="text-muted-foreground">
									3 years; 1 year R&D Engineer @ CERN, 1 year w/ research labs @ UCLA (CSL & PBPL), 1 year DAV w/ IEEE @ UCLA
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Skills</h3>
								<p className="text-muted-foreground">
									Systems/Lanuguages: VHDL, SystemVerilog, CocoTB, Python, C/C++, Linux<br></br>
									Relevant Coursework: Computer Architecture, Digital Design, Machine Learning, Deep Neural Networks, AI

								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}