import React from 'react';
import styles from './Projects.module.css'
import VerticalFlexboxFix from "./VerticalFlexboxFix";
import ProjectRow from './ProjectRow';
import Margin from '../Margin';

const isMobile = window.innerWidth <= 768;


const Projects = () => (
    <VerticalFlexboxFix width={'55em'}>
        <h2>Projects</h2>
        <div className={styles.onlyMobile}>(click row for details)</div>

        <ProjectRow>
            <p><a href="https://github.com/Quinsh/NeuralNetworkCpp" target="_blank">Neural Network Implementation</a></p>
            <p>C++</p>
            <p>913 lines</p>
            <p>2024/08/24</p>
            <p>
                Implementing neural network in C++. Backprop is done with Batch Gradient Descent in default. Benchmarked way how we use Keras:
                you can <i id="underline">create models, add layers, specify learning rate, use different activations (RELU, SIGMOID, TANH, LINEAR, SOFTMAX), use different cost functions (MSE, BinaryCrossEntropy, CategoricalCrossEntropy)</i>. 
                <br/><br/>
                In this project, I tried to write more Cpp-like code, pursuing "self-documenting" style instead of writing bunch of comments like Java. Making design choices for code efficiency and semantic clarity was hard: 
                e.g. should I use function pointer, instead of functional library? does using std::move decrease overhead here? is it better to use unsigned int, size_t here? inline functions?...
                designing Objects well to make clean code is hard too... And also circular dependency issues were so annoying.
                <br/><br/>
                Backpropagation was a bit harder than I thought. I was implementing BatchGD and not SGD, and I was stuck in first hidden layer's weight gradient computation 
                (since weight gradient is delta * output from previous layer and I didn't know which input sample I needed to use for this). There was nothing on internet. I just ended up doing (delta * output from one sample) for all sample, with eta = eta/sample_size.
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

        <Margin size={2}/>

    </VerticalFlexboxFix>
);

export default Projects;