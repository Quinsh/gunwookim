import React from 'react';
import styles from './Projects.module.css'
import VerticalFlexboxFix from "./VerticalFlexboxFix";
import ProjectRow from './ProjectRow';
import Margin from '../Margin';

const isMobile = window.innerWidth <= 768;


const Projects = () => (
    <VerticalFlexboxFix width={'55em'}>
        <h2>Projects <i className={styles.h2small}>(hover for details)</i></h2>
        <div className={styles.onlyMobile}>(click row for details)</div>

        <ProjectRow>
            <p><a href="https://github.com/yashmalikk/CSC213_Final_Project" target="_blank">RSA Encrypted Messenger</a></p>
            <p>C</p>
            <p>1141 lines</p>
            <p>2024/12/20</p>
            <p>
                An RSA based end-to-end encrypted messaging program for local networks, especially Grinnell Colleges' MATLAN. Messages are saved locally using file system. Multithreading is used for encryption/decryption and bi-directional message sending.
            </p>
        </ProjectRow>

        <ProjectRow>
            <p><a href="https://github.com/Quinsh/NeuralNetworkCpp" target="_blank">Neural Network Implementation</a></p>
            <p>C++</p>
            <p>1133 lines</p>
            <p>2024/08/24</p>
            <p>
                <a href="https://youtu.be/qMMVPXoV05s" target='blank'>[Watch Live Coding 🔴]</a> <br/><br/>
                Implementing neural network in C++. Benchmarked way how we use Keras:
                you can <i id="underline">create models, add layers, specify learning rate, use different activations (RELU, SIGMOID, TANH, LINEAR, SOFTMAX), use different cost functions (MSE, BinaryCrossEntropy, CategoricalCrossEntropy), and choose among Stochastic Gradient Descent, Mini-Batch, and Batch</i>. 
                <br/><br/>
                In this project, I tried to write more Cpp-like code, pursuing "self-documenting" style instead of writing bunch of comments like Java. Making design choices for code efficiency and semantic clarity was hard: 
                e.g. should I use function pointer, instead of functional library? does using std::move decrease overhead here? is it better to use unsigned int, size_t here? inline functions?...
                designing Objects well to make clean code is hard too... And also circular dependency issues were so annoying.
            </p>
        </ProjectRow>

        <ProjectRow>
            <p><a href="https://github.com/Quinsh/FastSudokuSolver" target="_blank">Fast Sudoku Solver</a></p>
            <p>C++</p>
            <p>1118 lines</p>
            <p>2024/08/14</p>
            <p>
                Implementing Heuristics Backtracking for fast sudoku solving. Reference paper: <a href="https://www.csc.kth.se/utbildning/kth/kurser/DD143X/dkand12/Group6Alexander/final/Patrik_Berggren_David_Nilsson.report.pdf">"A study of Sudoku solving algorithms"</a>
                Heuristics like Naked Pair, Naked Tuple, Hidden Pair, Hidden Tuple were used for constraint propagation. Used OpenCV for visual interface.
            </p>
        </ProjectRow>

        <ProjectRow>
            <p><a href="https://github.com/Quinsh/unconflict" target="_blank">Grinnell College Course Scheduler</a></p>
            <p>Python, HTML/CSS</p>
            <p>1322 lines</p>
            <p>2023/10/23</p>
            <p>
                Helping students find the best course combination when they input series of courses they want to take. Implemented with basic html/css and django for backend.
            </p>
        </ProjectRow>

        <ProjectRow>
            <p><a href="https://www.youtube.com/watch?v=MsnWCGpVDLE&t=74s" target="_blank">W A V E - mobile game</a></p>
            <p>C#</p>
            <p>???? lines</p>
            <p>2020/??/??</p>
            <p>
                Mobile game I made in Unity back in High School. 100 hours of solo development. 
            </p>
        </ProjectRow>

        <Margin size={2}/>

    </VerticalFlexboxFix>
);

export default Projects;