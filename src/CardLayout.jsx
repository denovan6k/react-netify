
import React from "react";
import { Icon } from '@iconify/react';
import './App.css';
import Ret from "./Ret";



export default function CardLayout(){
    return(
        <div className="container me shadow p-5 bg-white">
            <div className="row gy-3">
               
                      <Ret icon="emojione-monotone:light-bulb"  header= "Intuitive Thinking" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam officiis cupiditate."/>
                  
                      <Ret icon="la:carrot"  header= "Orange for Carrots" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam officiis cupiditate."/>
                     
                  
                      <Ret icon="ph:infinity-thin"  header= "Infinite Possibilities" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam officiis cupiditate."/>
                        



                {/* <div className="col-12 col-md-4">
                    <div className="card border-0 px-3">
                    <Icon icon="la:carrot" className='display-1'/>
                    <div className='title'>
                            <h5>Orange for Carrots</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam officiis cupiditate.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="card border-0 px-3">
                    <Icon icon="ph:infinity-thin" className='display-1'/>
                    <div className='title'>
                            <h5>Infinite Possibilities</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam officiis cupiditate.</p>
                        </div>
                    </div>
                </div> */}


            </div>
        </div>
    )
}