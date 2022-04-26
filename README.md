<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!--
  <a href="https://github.com/RuiFilipeCampos/monty-mvp">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">monty-mvp</h3>

  <p align="center">
    A minimalistic website to explore MontyCarlo live demos.
    <br />
    <!--
    <a href="https://github.com/RuiFilipeCampos/monty-mvp"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/RuiFilipeCampos/monty-mvp">View Demo</a>
    ·
    <a href="https://github.com/RuiFilipeCampos/monty-mvp/issues">Report Bug</a>
    ·
    <a href="https://github.com/RuiFilipeCampos/monty-mvp/issues">Request Feature</a>
    -->
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[TO DO]


This project is composed by several microservices. See the following figure:

![image](https://user-images.githubusercontent.com/63464503/163921435-c78dbb57-4e65-4362-8498-0b25a2088825.png)

![image](https://user-images.githubusercontent.com/63464503/165118815-67073ec8-e063-4804-88fe-2c9494db6b03.png)


- All applications are running in docker containers. 
- The frontend application communicates with a resource management microservice via a websocket.
- The resource management microservice takes care of running docker images containing MontyCarlo and the pre-prepared geometry and materials
- There are 3 images per 100x port because there are 3 demos:
   - sphere
   - onion
   - cut sphere



<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Next.js](https://nextjs.org/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started


To get a local copy up and running follow these simple example steps.

[ TO DO ]

### Prerequisites

[to do]

### Installation

[to do]

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- CONTACT -->
## Contact

Rui Campos - mail@ruicampos.org

Project Link: [https://github.com/RuiFilipeCampos/monty-mvp](https://github.com/RuiFilipeCampos/monty-mvp)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/RuiFilipeCampos/monty-mvp.svg?style=for-the-badge
[contributors-url]: https://github.com/RuiFilipeCampos/monty-mvp/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/RuiFilipeCampos/monty-mvp.svg?style=for-the-badge
[forks-url]: https://github.com/RuiFilipeCampos/monty-mvp/network/members
[stars-shield]: https://img.shields.io/github/stars/RuiFilipeCampos/monty-mvp.svg?style=for-the-badge
[stars-url]: https://github.com/RuiFilipeCampos/monty-mvp/stargazers
[issues-shield]: https://img.shields.io/github/issues/RuiFilipeCampos/monty-mvp.svg?style=for-the-badge
[issues-url]: https://github.com/RuiFilipeCampos/monty-mvp/issues
[license-shield]: https://img.shields.io/github/license/RuiFilipeCampos/monty-mvp.svg?style=for-the-badge
[license-url]: https://github.com/RuiFilipeCampos/monty-mvp/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/RuiFilipeCampos
[product-screenshot]: images/screenshot.png
