import React from 'react'
import './navbar.css';

export default function navbar() {
  return (
    <nav class="navbar navbar-dark navbar-expand-md bg-dark">
    <div class="container-fluid"><a class="navbar-brand" href="logo">Brand</a><button data-toggle="collapse" data-target="#navcol-1" class="navbar-toggler"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse text-justify"
            id="navcol-1">
            <ul class="nav navbar-nav text-white ml-auto">
                <li role="presentation" class="nav-item"><a class="nav-link active" href="home">Home</a></li>
                <li role="presentation" class="nav-item"><a class="nav-link text-white" href="landing">Landing</a></li>
                <li role="presentation" class="nav-item"><a class="nav-link active" href="cotact">Contact</a></li>
            </ul>   
        </div>
    </div>
</nav>
  )
}
