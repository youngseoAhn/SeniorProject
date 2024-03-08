import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Mental.css";

const Mental = () => {
    return (
        <body className="MHpage">
        <div>
            <Header/>
            <p class='mainheading'> <br></br>Mental Health Matters. <br></br>This is your Safe Space.</p>

        <section className="MHsection">
             <div className="MHDiv">
                <h1 class='MHHeader1'>What is Mental Health?</h1>
                    <p className="MHwrittencontent">
                    <br></br>
                    Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act, 
                    and helps determine how we handle stress, relate to others, and make choices.
                    <br></br>
                    Mental health is important at every stage of life, from childhood and adolescence through adulthood. Over the course of your life, 
                    if you experience mental health problems, your thinking, mood, and behavior could be affected.
                    </p>
                    <img src="MHphoto1.png" alt="Mental Health Photo" className="MHphoto"/>
                </div>
        </section>

        <section className="MHsection">
            <div className="MHDiv">
            <h2 class='MHHeader2'> Mental Health Conditions</h2>
                <p className="MHwrittencontent">
                Mental illnesses are disorders, ranging from mild to severe, that affect a person’s thinking, mood, and/or behavior. 
                According to the National Institute of Mental Health, nearly one-in-five adults live with a mental illness.
                </p>
            </div>
        </section>
        <section className="MHsection">
            <div className="MHDiv">
            <h3 class='MHHeader2'>Many factors contribute to mental health conditions, including: </h3>
                <p className="MHwrittencontent">
                -Biological factors, such as genes or brain chemistry
                <br></br>
                -Life experiences, such as trauma or abuse
                <br></br>
                -Family history of mental health problems
                <br></br>
                </p>
            </div>
        </section>

        <section className="MHsection">
            <div className="MHDiv">
            <h4 class='MHHeader2'>Some mental health topics include:</h4>
                <p className="MHwrittencontent">
                    Antisocial personality disorder <br></br>
                    Anxiety disorders (including generalized anxiety, panic disorders, obsessive-compulsive disorder (OCD), 
                    phobias, & social anxiety)<br></br>
                    Attention-deficit hyperactivity disorder (ADHD)<br></br>
                    Bipolar disorder
                    Borderline Personality Disorder (BPD)<br></br>
                    Depression<br></br>
                    Eating disorders (including Anorexia Nervosa, binge eating Disorder, and Bulimia Nervosa)<br></br>
                    Post-traumatic Stress Disorder (PTSD)<br></br>
                    Schizophrenia<br></br>
                    Seasonal affective disorder (SAD)<br></br>
                    Self-harm<br></br>
                    Suicide and suicidal behavior<br></br>
                </p>
            </div>
        </section>
        <section className="MHsection">
            <div className="MHDiv">
            <h5 class='MHHeader2'>Serious Mental Illness (SMI)</h5>
            <p className="MHwrittencontent">
                A Serious Mental Illness (SMI) is a mental illness that interferes with a person’s life and ability to function. 
                Despite common misperceptions, having an SMI is not a choice, a weakness, or a character flaw. 
                <br></br>
                It is not something that just “passes” or can be “snapped out of” with willpower.
                <br></br><a href ='https://www.samhsa.gov/serious-mental-illness' class='MHlink'> <br></br>View SAMHSA's Public Message about Serious Mental Illnesses. </a>
            </p>
        </div></section>
        <Footer/>
    </div></body>
    )
} 

export default Mental;