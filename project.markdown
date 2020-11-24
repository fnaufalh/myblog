---
layout: page
title: Project
permalink: /project/
javascript:
- /assets/js/custom.js
---

<style>
    .project {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .big-title {
        font-size: 36px;
        font-weight: bolder;
        line-height: 140%;
        margin-bottom: 16px;
    }

    .main-desc {
        line-height: 140%;
        margin-bottom: 32px;
        text-indent: 20px;
    }

    .card {
        margin-bottom: 32px;
        width: 48%;
    }

    .card > *:not(:last-child) {
        margin-bottom: 16px;
    }

    img {
        border-radius: 8px;
        transition: opacity 0.3s;
    }

    .flex {
        display: flex;
    }

    .role {
        float: right;
        text-align: right;
        width: 100%;
    }

    .title {
        font-weight: bolder;
        font-size: 16px;
        line-height: 140%;
    }

    a, a:hover {
        text-decoration: none;
    }

    .button, .button:visited {
        color: #f8f8f8;
    }

    .button {
        display: block;
        background-color: #3c3c3c;
        border-radius: 8px;
        font-size: 14px;
        padding: 8px 16px;
        text-align: center;
        transition: background-color 0.3s, box-shadow 0.3s;
    }

    .button:hover {
        background-color: #303030;
        box-shadow: 4px 4px 4px 0px rgba(60, 60, 60, 0.15);
    }

    .button:focus {
        background-color: #242424;
        box-shadow: 4px 4px 4px 0px rgba(60, 60, 60, 0.25);
    }

    .button.disabled {
        background-color: #dedede;
    }

    .button.disabled:hover, .button.disabled:focus {
        box-shadow: none;
        color: #f8f8f8;
        cursor: not-allowed;
    }

    @media only screen and (max-width: 700px){
        .date, .role {
            line-height: 140%;
        }
    }
</style>
    Upcoming Update: Project Article
<section class="project">
    <div class="big-title">
        Equip business with designed digital environment
    </div>
    <p class="main-desc">
        I'm passionate to help business grow with technology, educate them to start paying attention to digital environment that can scaling up their business. Here you can see my project that I have completed in freelance work.
    </p>
    <div class="card">
        <img class="img-zoom" src="/assets/img/projects/newsfeed/1.jpg" alt="Newsfeed" />
        <div class="flex">
            <div class="date">Nov 2020</div>
            <div class="role">UI Designer</div>
        </div>
        <div class="title">Newsfeed Design Concept</div>
        <a class="button" role="button" href="https://dribbble.com/shots/14637797-Newsfeed-Design-Concept" target="_blank">See Project</a>
    </div>
    <div class="card">
        <img class="img-zoom" src="/assets/img/projects/m-bca/1.png" alt="m-BCA" />
        <div class="flex">
            <div class="date">Nov 2020</div>
            <div class="role">UI Designer</div>
        </div>
        <div class="title">Redesign m-BCA Design Concept</div>
        <a class="button disabled" role="button" href="#" target="_blank">See Project</a>
    </div>
    <div class="card">
        <img class="img-zoom" src="/assets/img/projects/ral-nursery/1.jpg" alt="RAL.nursery" />
        <div class="flex">
            <div class="date">Oct 2020</div>
            <div class="role">UI Designer</div>
        </div>
        <div class="title">MVP Design Concept - RAL.nursery</div>
        <a class="button" role="button" href="https://dribbble.com/shots/14458518-MVP-Design-Concept-RAL-nursery" target="_blank">See Project</a>
    </div>
    <div class="card">
        <img class="img-zoom" src="/assets/img/projects/eventpals/1.jpg" alt="eventpals" />
        <div class="flex">
            <div class="date">Oct 2020</div>
            <div class="role">UI Designer</div>
        </div>
        <div class="title">eventpals Design Concept</div>
        <a class="button" role="button" href="https://dribbble.com/shots/14457121-eventpals-Design-Concept" target="_blank">See Project</a>
    </div>
    <div class="card">
        <img class="img-zoom" src="/assets/img/projects/dpa/1.jpg" alt="Dhanika Property" />
        <div class="flex">
            <div class="date">Oct 2020</div>
            <div class="role">UI Designer | Front-end Engineer</div>
        </div>
        <div class="title">DPA Company Profile Revamp</div>
        <a class="button disabled" role="button" href="javascript:void(0);" target="_self">See Project</a>
    </div>
    <div class="card">
        <img class="img-zoom" src="/assets/img/projects/aaa/1.jpg" alt="PT. Atelir Alad Aditama" />
        <div class="flex">
            <div class="date">Sept 2020</div>
            <div class="role">UI Designer | Front-end Engineer</div>
        </div>
        <div class="title">AAA Company Profile Revamp</div>
        <a class="button" role="button" href="https://dribbble.com/shots/14398918-AAA-Company-Profile" target="_blank">See Project</a>
    </div>
    <div class="card">
        <img class="img-zoom" src="/assets/img/projects/pin/1.jpg" alt="PT. PUTERA INSTRUMENINDO" />
        <div class="flex">
            <div class="date">Aug 2020</div>
            <div class="role">UI Designer | Front-end Engineer</div>
        </div>
        <div class="title">PIN Company Profile Revamp</div>
        <a class="button" role="button" href="https://dribbble.com/shots/14397333-PIN-Company-Profile" target="_blank">See Project</a>
    </div>
    <div class="card">
        <img class="img-zoom" src="/assets/img/projects/yma/1.jpg" alt="Yuk Menghafal Al-Quran!" />
        <div class="flex">
            <div class="date">Jul 2020</div>
            <div class="role">UI Designer</div>
        </div>
        <div class="title">Yuk Menghafal Al-Quran! App Design</div>
        <a class="button" role="button" href="https://dribbble.com/shots/14421556-Yuk-Menghafal-Al-Quran" target="_blank">See Project</a>
    </div>
</section>
<div id="modal" class="modal">
    <img class="modal-content" id="img" alt="Zoom Image" />
</div>