import React from "react";
import Header from "../Components/Header";
import "./Mental.css";

const Mental = () => {
    return (
        <div>
            <Header/>
<p class='mainheading'> <br></br>Mental Health Matters. This is your Safe Space.</p>

<section className="MH-section">
                    <div className="whatIsMH">
                        <h1 class='whatIsMHheader'>What is Mental Health? <br></br><br></br></h1>
                        <p className="MHis">
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

                <section className="MHcond-section">
                    <div className="MHconds">
                    <h2 class='MHcondHeader'> Mental Health Conditions</h2>
                        <p className="MHcondexpl">
                        Mental illnesses are disorders, ranging from mild to severe, that affect a person’s thinking, mood, and/or behavior. 
                        According to the National Institute of Mental Health, nearly one-in-five adults live with a mental illness.
                        </p>
                    </div>
                </section>


                <section className="MHfactors-section">
                    <div className="MHfactors">
                    <h3 class='MHfactorsheader'>Many factors contribute to mental health conditions, including: </h3>
                        <p className="MHFacList">
                        -Biological factors, such as genes or brain chemistry
                        <br></br>
                        -Life experiences, such as trauma or abuse
                        <br></br>
                        -Family history of mental health problems
                        <br></br>
                        </p>
                    </div>
                </section>

                <section className="MHtopics-section">
                    <div className="MHtopics">
                    <h4 class='MHtopicsheader'>Some mental health topics include:</h4>
                        <p className="MHtopicList">
                            <ul>
                            <li>-Antisocial personality disorder</li>
                            <li>-Anxiety disorders (including generalized anxiety, panic disorders, obsessive-compulsive disorder (OCD), 
                                phobias, and social anxiety)</li>
                            <li>-Attention-deficit hyperactivity disorder (ADHD)</li>
                            <li>-Bipolar disorder</li>
                            <li>-Borderline Personality Disorder (BPD)</li>
                            <li>-Depression</li>
                            <li>-Eating disorders (including Anorexia Nervosa, binge eating Disorder, and Bulimia Nervosa)</li>
                            <li>-Post-traumatic Stress Disorder (PTSD)</li>
                            <li>-Schizophrenia</li>
                            <li>-Seasonal affective disorder (SAD)</li>
                            <li>-Self-harm</li>
                            <li>-Suicide and suicidal behavior</li>
                            </ul>
                        </p>
                    </div>
                </section>




<h5 class='SMI'>
    A Serious Mental Illness (SMI) is a mental illness that interferes with a person’s life and ability to function. 
    Despite common misperceptions, having an SMI is not a choice, a weakness, or a character flaw. 
    <br></br>
    It is not something that just “passes” or can be “snapped out of” with willpower.
    <br></br>
    <br></br>
</h5>

<a href ='https://www.samhsa.gov/serious-mental-illness' class='MHlink'> <br></br>View SAMHSA's Public Message about Serious Mental Illnesses. </a>


        </div>
    )
} 

export default Mental;