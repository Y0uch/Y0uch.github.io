import React from 'react'
import "./NavigationBar.css";


export default function NavigationBar() {
  
  return (
    <>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
    
    <div class="navContainer">
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Youngjun Cho</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
              <a class="nav-link" href="/">Illustrations</a>
              <a class="nav-link" href="/about">About</a>
            </div>
          </div> */}

          <ul class="navbar-nav ms-auto flex-nowrap">
                <li class="nav-item">
                    <a href="/" class="nav-link m-2 menu-item nav-active">Home</a>
                </li>
                <li class="nav-item">
                    <a href="/" class="nav-link m-2 menu-item">Illustrations</a>
                </li>
                <li class="nav-item">
                    <a href="/about" class="nav-link m-2 menu-item">About</a>
                </li>
          </ul>
        </div>
      </nav>
    </div>
    


    
    {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="d-flex flex-grow-1">
            <span class="w-100 d-lg-none d-block">
                </span>
            <a class="navbar-brand d-none d-lg-inline-block" href="#"> Youngjun Cho </a>
            <a class="navbar-brand-two mx-auto d-lg-none d-inline-block" href="#">
            </a>
            <div class="w-100 text-right">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
        <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
            <ul class="navbar-nav ms-auto flex-nowrap">
                <li class="nav-item">
                    <a href="#" class="nav-link m-2 menu-item nav-active">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link m-2 menu-item">Illustrations</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link m-2 menu-item">About</a>
                </li>
            </ul>
        </div>
    </nav> */}


    </>
  )
}
