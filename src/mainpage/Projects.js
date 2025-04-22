import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css'
import VerticalFlexboxFix from "./VerticalFlexboxFix";
import ProjectCard from './ProjectCard';
import Margin from '../Margin';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const projects = [
        {
            title: "Askit (Northwestern Hackathon 2025)",
            languages: "React/TypeScript, TailwindCSS, Next.js, FastAPI",
            linesOfCode: "XXXX lines",
            date: "2025/04/05",
            description: "Askit is a powerful document search system that enables semantic search across your Google Drive documents. Unlike traditional keyword search, Askit understands the meaning behind your questions, delivering contextually relevant results from your documents.",
            projectLink: "https://github.com/HandsomeSB/Askit",
            image: process.env.PUBLIC_URL + "/images/projects/askit.png"
        },
        {
            title: "RSA Encrypted Messenger",
            languages: "C",
            linesOfCode: "1141 lines",
            date: "2024/12/20",
            description: "An RSA based end-to-end encrypted messaging program for local networks, especially Grinnell Colleges' MATLAN. Messages are saved locally using file system. Multithreading is used for encryption/decryption and bi-directional message sending.",
            projectLink: "https://github.com/yashmalikk/CSC213_Final_Project",
            image: process.env.PUBLIC_URL + "/images/projects/rsa-messenger.png"
        },
        {
            title: "Neural Network Implementation",
            languages: "C++",
            linesOfCode: "1133 lines",
            date: "2024/08/24",
            description: "Implementing neural network in C++. Benchmarked way how we use Keras: you can create models, add layers, specify learning rate, use different activations (RELU, SIGMOID, TANH, LINEAR, SOFTMAX), use different cost functions (MSE, BinaryCrossEntropy, CategoricalCrossEntropy), and choose among Stochastic Gradient Descent, Mini-Batch, and Batch.",
            projectLink: "https://github.com/Quinsh/NeuralNetworkCpp",
            image: process.env.PUBLIC_URL + "/images/projects/neural-network.png"
        },
        {
            title: "Fast Sudoku Solver",
            languages: "C++",
            linesOfCode: "1118 lines",
            date: "2024/08/14",
            description: "Implementing Heuristics Backtracking for fast sudoku solving. Reference paper: 'A study of Sudoku solving algorithms'. Heuristics like Naked Pair, Naked Tuple, Hidden Pair, Hidden Tuple were used for constraint propagation. Used OpenCV for visual interface.",
            projectLink: "https://github.com/Quinsh/FastSudokuSolver",
            image: process.env.PUBLIC_URL + "/images/projects/sudoku-solver.png"
        },
        {
            title: "Grinnell College Course Scheduler",
            languages: "Python, HTML/CSS",
            linesOfCode: "1322 lines",
            date: "2023/10/23",
            description: "Helping students find the best course combination when they input series of courses they want to take. Implemented with basic html/css and django for backend.",
            projectLink: "https://github.com/Quinsh/unconflict",
            image: process.env.PUBLIC_URL + "/images/projects/unconflict-grinnell.png"
        },
        {
            title: "W A V E - mobile game",
            languages: "C#",
            linesOfCode: "???? lines",
            date: "2020/??/??",
            description: "Mobile game I made in Unity back in High School. 100 hours of solo development.",
            projectLink: "https://www.youtube.com/watch?v=MsnWCGpVDLE&t=74s",
            image: process.env.PUBLIC_URL + "/images/projects/wave-game.png"
        }
    ];

    useEffect(() => {
        if (!isHovered) {
            const timer = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
            }, 10000);
            return () => clearInterval(timer);
        }
    }, [isHovered, projects.length]);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    return (
        <VerticalFlexboxFix width={'55em'}>
            <h2>Projects</h2>
            <div className={styles.projectsContainer}>
                <div 
                    className={styles.carousel}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <button className={styles.navButton} onClick={prevProject}>
                        ←
                    </button>
                    <div className={styles.carouselContent}>
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                {...project}
                                isActive={index === currentIndex}
                            />
                        ))}
                    </div>
                    <button className={styles.navButton} onClick={nextProject}>
                        →
                    </button>
                </div>
            </div>
            <Margin size={2} />
        </VerticalFlexboxFix>
    );
};

export default Projects;