import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import lady from '../../images/lady.jpg'

function Intro1() {
  return (
    <div style={{backgroundColor:'#f5edf2', paddingBottom:'60px', paddingTop:'60px'}} id="about">
    <div className="card" style={{width:'1000px', margin: '0 auto',backgroundColor:'white', boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}}>
      <div className="row no-gutters">
        {/* <div className="col-md-4">
        <img src={lady} width="100%" height="100%"/>
        </div> */}
        <div className="col-md-8">
          <div className="card-body" style={{fontWeight:'semi-bold', margin:'20px',width:'950px', alignContent:'center'}}>
            <h5 >Dear participants, I welcome you all to this program.<br></br><br></br>
        {/* <p className="card-text col-md-10" style={{color:'red',marginLeft:'-30px'}}> */}
            I, Ms Freyana Shinde studying in Amity Institute of Behavioural and Allied Sciences, Mumbai am the developer of the program and have designed this program under the supervision of Dr Rekha Wagani as a part of my PhD thesis.
Suicidal thoughts have been noted to be a coping mechanism to end psychological and emotional pain felt by a person. Through this program, it is my aim that we should be able to learn how to recognise our negative thinking patterns, how to use effective techniques to deal with stressful situations and in turn reinforce/strengthen them into our daily routine. This program will help you to understand various terms like hope, learned optimism, gratitude, character strengths and positive emotions. 
This program is designed in such a way that it will use a step by step process and it will enable you to build competence in dealing with suicidal thoughts and increase your well-being. I hope that this program will help all of you and always remember that we are all connected and we affect each other too!
</h5>
            {/* <p className="card-text">
              <small className="text-muted">Card Text 2</small>
            </p> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Intro1;