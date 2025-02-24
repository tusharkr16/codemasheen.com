import React from 'react'
import Skill from '../skills/Skill'
import android from "../../../public/android.svg"
import ios from "../../../public/ios.svg"
import react from "../../../public/react.svg"
import flutter from "../../../public/flutter.svg"
import angular from "../../../public/angular.svg"
import nextjs from "../../../public/nextjs.svg"
import vue from "../../../public/vue.svg"
import firebase from "../../../public/firebase.svg"
import java from "../../../public/java.svg"
import laravel from "../../../public/laravel.svg"
import nodejs from "../../../public/nodejs.svg"
import shopifyy from "../../../public/shopifyy.svg"
import wordpress from "../../../public/wordpress.svg"
import git from "../../../public/git.svg"
import aws from "../../../public/aws.svg"
import azure from "../../../public/azure.svg"
import kubernets from "../../../public/kubernetes.svg"

const appData = [
    { name: 'Android', src: android },
    { name: 'IOS', src: ios },
    { name: 'React-Native', src: react },
    { name: 'Flutter', src: flutter },
  ];

const frontendData = [
    { name: 'Angular', src: angular },
    { name: 'ReactJs', src: react },
    { name: 'NextJs', src: nextjs },
    { name: 'Vue', src: vue },
]

const backendData = [
    { name: 'Firebase', src: firebase },
    { name: 'NodeJs', src: nodejs },
    { name: 'Laravel', src: laravel },
    { name: 'Java', src: java },
]

const cloud = [
    { name: 'aws', src: aws },
    { name: 'kunernets', src: kubernets },
    { name: 'Azure', src: azure },
    { name: 'Git', src: git },
]

// const cms = [
//     { name: 'Shopify', src: shopifyy },
//     { name: 'Wordpress', src: wordpress },
// ]

const Technology = () => {
    return (
        <div className='flex min-w-screen min-h-screen flex-col  lg:flex-col mt-2 lg:mt-6 '>
            <div className='flex flex-col items-center  text-center py-6'>
                <h1 className='text-5xl font-black py-2  font-semibold text-blue-600'>Technology we work on</h1>
                <p className='text-gray-600'>Our Highly Skilled Development Team Harnesses Technical Expertise To Deliver Exceptional Quality And Unlock The Full</p>
                <p className='text-gray-600'>Potential Of Your Services</p>
            </div>
            <div className='px-8 mt-4 space-y-8 flex flex-col justify-center items-center'>
                <Skill developers={appData} name='Mobile App Developers' />
                <Skill developers={frontendData} name='Frontend Developers' />
                <Skill  developers={backendData} name='Backend Developers'/>
                {/* <Skill  developers={cms} name='CMS  Developers'/> */}
                <Skill  developers={cloud} name=' Deveops Developers'/>
            </div>

        </div>
    )
}

export default Technology

