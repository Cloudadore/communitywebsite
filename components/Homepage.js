import React from 'react'

function Homepage() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    href="/Community _ Join the Polygon community_files/polygontechv2.30217a4f5.min.css"
    rel="stylesheet"
    type="text/css"
  />
  <link href="https://fonts.googleapis.com/" rel="preconnect" />
  <link
    href="https://fonts.gstatic.com/"
    rel="preconnect"
    crossOrigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="/Community _ Join the Polygon community_files/css"
    media="all"
  />
  {/*Favicons*/}
  <link href="/assets/logo1.jpg" rel="shortcut icon" type="image/x-icon" />
  <link href="/assets/logo1.jpg" rel="apple-touch-icon" />
  <title>Cloudadore | Homepage</title>
  <div className="page-wrapper">
    <div className="global-styles w-embed">
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n        html { font-size: 1.0625rem; }\n        @media screen and (max-width:1920px) { html { font-size: calc(0.8125rem + 0.20833333333333337vw); } }\n        @media screen and (max-width:1440px) { html { font-size: calc(0.8126951092611863rem + 0.20811654526534862vw); } }\n        @media screen and (max-width:479px) { html { font-size: calc(0.7494769874476988rem + 0.8368200836820083vw); } }\n        \n        @media screen and (max-width:479px) {\n          .footer_nav-column {\n            height:min-content;\n          }\n        }\n        <!--Make text look crisper-->\n        body {\n          -webkit-font-smoothing: antialiased;\n          -moz-osx-font-smoothing: grayscale;\n          font-smoothing: antialiased;\n          text-rendering: optimizeLegibility;\n        } */\n        /* Focus state style for keyboard navigation for the focusable elements */\n        *[tabindex]:focus-visible,\n        input[type="file"]:focus-visible {\n          outline: 0.125rem solid #4d65ff;\n          outline-offset: 0.125rem;\n        }\n        /* Get rid of top margin on first element in any rich text element */\n        .w-richtext > :not(div):first-child, .w-richtext > div:first-child > :first-child {\n          margin-top: 0 !important;\n        }\n        /* Get rid of bottom margin on last element in any rich text element */\n        .w-richtext>:last-child, .w-richtext ol li:last-child, .w-richtext ul li:last-child {\n          margin-bottom: 0 !important;\n        }\n        /* Prevent all click and hover interaction with an element */\n        .pointer-events-off {\n          pointer-events: none;\n        }\n        /* Enables all click and hover interaction with an element */\n        .pointer-events-on {\n          pointer-events: auto;\n        }\n        /* Create a class of .div-square which maintains a 1:1 dimension of a div */\n        .div-square::after {\n          content: "";\n          display: block;\n          padding-bottom: 100%;\n        }\n        \n        /* Make sure containers never lose their center alignment */\n        .container-medium,.container-small, .container-large {\n          margin-right: auto !important;\n          margin-left: auto !important;\n        }\n        \n        /* \n        Make the following elements inherit typography styles from the parent and not have hardcoded values. \n        Important: You will not be able to style for example "All Links" in Designer with this CSS applied.\n        */\n        \n        a,\n        .w-input,\n        .w-select,\n        .w-tab-link,\n        .w-nav-link,\n        .w-dropdown-btn,\n        .w-dropdown-toggle,\n        .w-dropdown-link,\n        \n        {\n          color: inherit;\n          text-decoration: inherit;\n          font-size: inherit;\n        }\n        /* Apply "..." after 5 lines of text */\n        .text-style-5lines {\n          display: -webkit-box;\n          overflow: hidden;\n          -webkit-line-clamp: 5;\n          -webkit-box-orient: vertical;\n        }\n        \n        /* Apply "..." after 4 lines of text */\n        .text-style-4lines {\n          display: -webkit-box;\n          overflow: hidden;\n          -webkit-line-clamp: 4;\n          -webkit-box-orient: vertical;\n        }\n        \n        /* Apply "..." after 3 lines of text */\n        .text-style-3lines {\n          display: -webkit-box;\n          overflow: hidden;\n          -webkit-line-clamp: 3;\n          -webkit-box-orient: vertical;\n        }\n        \n        /* Apply "..." after 2 lines of text */\n        .text-style-2lines {\n          display: -webkit-box;\n          overflow: hidden;\n          -webkit-line-clamp: 2;\n          -webkit-box-orient: vertical;\n        }\n        \n        /* Adds inline flex display */\n        .display-inlineflex {\n          display: inline-flex !important;\n        }\n        \n        /* These classes are never overwritten */\n        .hide {\n          display: none !important;\n        }\n        \n        @media screen and (max-width: 991px) {\n          .hide, .hide-tablet {\n            display: none !important;\n          }\n        }\n        @media screen and (max-width: 767px) {\n          .hide-mobile-landscape{\n            display: none !important;\n          }\n        }\n        @media screen and (max-width: 479px) {\n          .hide-mobile{\n            display: none !important;\n          }\n        }\n        \n        .margin-0 {\n          margin: 0rem !important;\n        }\n        \n        .padding-0 {\n          padding: 0rem !important;\n        }\n        \n        .spacing-clean {\n          padding: 0rem !important;\n          margin: 0rem !important;\n        }\n        \n        .margin-top {\n          margin-right: 0rem !important;\n          margin-bottom: 0rem !important;\n          margin-left: 0rem !important;\n        }\n        \n        .padding-top {\n          padding-right: 0rem !important;\n          padding-bottom: 0rem !important;\n          padding-left: 0rem !important;\n        }\n        \n        .margin-right {\n          margin-top: 0rem !important;\n          margin-bottom: 0rem !important;\n          margin-left: 0rem !important;\n        }\n        \n        .padding-right {\n          padding-top: 0rem !important;\n          padding-bottom: 0rem !important;\n          padding-left: 0rem !important;\n        }\n        \n        .margin-bottom {\n          margin-top: 0rem !important;\n          margin-right: 0rem !important;\n          margin-left: 0rem !important;\n        }\n        \n        .padding-bottom {\n          padding-top: 0rem !important;\n          padding-right: 0rem !important;\n          padding-left: 0rem !important;\n        }\n        \n        .margin-left {\n          margin-top: 0rem !important;\n          margin-right: 0rem !important;\n          margin-bottom: 0rem !important;\n        }\n        \n        .padding-left {\n          padding-top: 0rem !important;\n          padding-right: 0rem !important;\n          padding-bottom: 0rem !important;\n        }\n        \n        .margin-horizontal {\n          margin-top: 0rem !important;\n          margin-bottom: 0rem !important;\n        }\n        \n        .padding-horizontal {\n          padding-top: 0rem !important;\n          padding-bottom: 0rem !important;\n        }\n        \n        .margin-vertical {\n          margin-right: 0rem !important;\n          margin-left: 0rem !important;\n        }\n        \n        .padding-vertical {\n          padding-right: 0rem !important;\n          padding-left: 0rem !important;\n        }\n        \n        img{\n          height:auto;\n        }\n        \n        /* Nav link CSS */\n        .nav_link:last-child{\n          margin-right:0rem;\n        }\n        \n        .nav_link-icon{\n          transition: transform 0.2s ease;\n        }\n        \n        .nav_link:hover .nav_link-icon{\n          transform: rotate(180deg);\n        }\n        \n        ul.splide__pagination li {\n          background:transparent;\n          flex: 1 1 0;\n          margin-bottom:0px;\n          height:16px;\n        }\n        \n        button.splide__arrow:disabled{opacity:0.2 !important;}\n        button.splide__arrow:disabled:hover\t{\n          background-color: #141217;\n        }\n        \n        /*Footer CSS */\n        .footer_nav-link\t{\n          width:fit-content;\n        }\n        \n        .footer_nav-link-wrapper.is-inline-flex\t{\n          display: inline-flex;\n          flex-direction: column;\n        }\n        \n        .footer_nav-link\t{\n          background-position: top 56% right 0px !important;\n        }\n        \n        .footer_nav-link:hover\t{\n          background-position: top 56% right -3px !important;\n        }\n        /*CSS to hide pagination layout shift in splide sliders */\n        .splide__sr\t{\n          display:none;\n        }\n        \n        /*blog list trending slider nav dots style*/\n        .w-slider-dot\t{\n          width:12px;\n          height:12px;\n          margin-top:0px;\n          margin-bottom:0px;\n          border: 3px solid #0a090d;\n          margin-left:2px;\n          margin-right:2px;\n          color:#212026;\n        }\n        \n        .w-slider-dot.w-active\t{\n          width:14px;\n          height:14px;\n          color:#E2E1E5;\n        }\n        \n        .blog-list_image\t{\n          aspect-ratio:1.77;\n        }\n        \n        /*adding border gradient to different items*/\n        .banner_wrapper::after,.section_card::after, .value_card::after{\n          position: absolute;\n          top: -1px; bottom: -1px;\n          left: -1px; right: -1px;\n          background: linear-gradient(#1B181F, #0E0C12);\n          content: \'\';\n          z-index: -1;\n          border-radius: 12px;}\n          \n          .blog-list_arrow {\n            background: linear-gradient(rgba(20, 18, 23, 1), rgba(20, 18, 23, 1)) padding-box, linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.05)) border-box !important;\n            border-radius: 50%;\n          }\n          \n          .splide__arrow::after{\n            position: absolute;\n            top: -1px; bottom: -1px;\n            left: -1px; right: -1px;\n            background: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.05));\n            content: \'\';\n            z-index: -1;\n            border-radius: 50%;}\n            \n            .splide__arrow.is-spotlight::after{\n              display:none;\n              content: \'\';}\n              \n              .blog-list_item::after{\n                position: absolute;\n                top: -1px; bottom: -1px;\n                left: -1px; right: -1px;\n                background: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.05));\n                content: \'\';\n                z-index: -1;\n                border-radius: 12px;\n              }\n              \n              .banner_wrapper{\n                background: linear-gradient(#141217, #141217) padding-box,\n                linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.05)) border-box !important;\n                border-radius: 12px;\n              }\n              \n              .events-card_component::after {\n                position: absolute;\n                top: -1px; bottom: -1px;\n                left: -1px; right: -1px;\n                background: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.05));\n                content: \'\';\n                z-index: -1;\n                border-radius: 12px;\n              }\n              \n              \n              /*radial gradient to button\n              .button\t{\n                background: radial-gradient(70.64% 70.64% at 50% 25.87%, #9A60FF 0%, #6A23E7 100%);\n              }*/\n              \n              \n              /*homepage carousel gradient\n              .home-hero_gradient {\n                background:linear-gradient(180deg, rgba(10, 9, 13, 0) 57.61%, #0A090D 96.12%), rgba(0, 0, 0, 0.6);\n              }*/\n              \n              /*section gradient*/\n              .section.is-gradient-bg::after {\n                position: absolute;\n                top: -1px; bottom: -1px;\n                left: -1px; right: -1px;\n                background: linear-gradient(180deg, #0F0E11 0%, #0A090D 21.76%);\n                content: \'\';\n                z-index: -2;}\n                \n                /*Blog card hover effect*/\n                .blog-list_item:hover text-size-large.text-weight-medium\t{\n                  text-decoration:underline;\n                }\n                /*Navbar solutions dropdown max height*/\n                .nav_dropdown-solutions-menu\t{\n                  max-height: calc(100vh - 120px) !important;\n                }\n                .nav_dropdown-wrap {\n                  max-height: calc(100vh - 120px) !important;\n                }\n                \n                .nav_dropdown-solutions-menu\t{\n                  overflow-x:hidden !important;\n                  overflow-y:scroll !important;\n                }\n                /*width*/\n                .nav_dropdown-solutions-menu::-webkit-scrollbar {\n                  width:4px;\n                }\n                /*track*/\n                .nav_dropdown-solutions-menu::-webkit-scrollbar-track {\n                  background:rgba(255, 255, 255, 0);\n                }\n                \n                /*thumb*/\n                .nav_dropdown-solutions-menu::-webkit-scrollbar-thumb {\n                  background:#212026;\n                  border-color:rgb(0, 0, 0);\n                }\n                /*mobile tablet navbar style */\n                @media screen and (max-width: 991px) {\n                  \n                  .nav_component::after\t{\n                    position: absolute;\n                    top: -1px; bottom: -1px;\n                    left: -1px; right: -1px;\n                    background: linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.05));\n                    content: \'\';\n                    z-index: -2;\n                    border-radius: 100px;\n                  }}\n                  .button.is-green-manifesto {\n                    background:linear-gradient(93.57deg, #00993D -9%, #0070C0 170.12%);\n                  }\n                  .button-green-manifesto_bg{\n                    background:linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(91.88deg, #0070C0 -22.71%, #00993D 111.33%);}\n                    .blog-list_image-wrapper {aspect-ratio:454/256 !important;}\n                    img {\n                      height:auto;\n                      width:auto;\n                    }\n                    a[href="#"]:hover {cursor: default;}\n                    .tabs_sticky-bg{background: linear-gradient(180deg, #0A090D 70.93%, rgba(10, 9, 13, 0.929969) 74.09%, rgba(10, 9, 13, 0.790944) 79.2%, rgba(10, 9, 13, 0.681181) 83.06%, rgba(10, 9, 13, 0.559079) 87.89%, rgba(10, 9, 13, 0.0754536) 95.74%, rgba(10, 9, 13, 0) 100%);}\n                    \n                    .nav_metamask-link.check-metamask-btn {\n                      cursor: pointer !important;\n                    }\n                    \n                  '
        }}
      />
    </div>
    {/*-----------------------------------------Navbar Section--------------------------------------------------*/}
    <div className="nav_container">
      <div className="nav-mobile_bg" />
      <div className="nav_logo-link-wrapper">
        <a href="#" className="nav_logo-link w-nav-brand" aria-label="home">
          {/*<img src="/assets/logo1.jpg" loading="lazy" width="5" height="10" alt="">*/}
          <img
            src="/assets/logo 2.jpg"
            loading="lazy"
            width={3}
            height={10}
            alt=""
            href="#"
          />
        </a>
      </div>
      <nav role="navigation" className="nav_menu w-nav-menu">
        <div
          data-w-id="2cc5c4e3-c013-5c2e-b634-322e9bae2783"
          className="nav_menu-item-wrap desktop-only-js"
        >
          <div
            data-w-id="bb27a7a1-081f-4a07-2b1b-36179b25e0b0"
            className="nav_link-wrapper developers"
          >
            <a
              id="developers-nav-link"
              href="#developers"
              className="nav_link w-inline-block"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                color: "rgb(255, 255, 255)"
              }}
            >
              <div className="nav_link-text">Developers</div>
              <div className="nav_link-icon w-embed">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentcolor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
          <div
            data-w-id="1c380ca7-7db9-6971-0734-f26200af8ca0"
            className="nav_link-wrapper community"
          >
            <a
              id="community-nav-link"
              href="#community"
              aria-current="page"
              className="nav_link w-inline-block w--current"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                color: "rgb(255, 255, 255)"
              }}
            >
              <div className="nav_link-text">community</div>
              <div className="nav_link-icon w-embed">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentcolor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
          <div
            data-w-id="5b0d2d00-5803-4c1d-3947-4fe567c09e07"
            className="nav_link-wrapper resources"
          >
            <a
              id="resources-nav-link"
              href="#community#"
              className="nav_link w-inline-block"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                color: "rgb(255, 255, 255)"
              }}
            >
              <div className="nav_link-text">resources</div>
              <div className="nav_link-icon w-embed">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentcolor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
          <div
            data-w-id="5fadb620-54ff-5f2f-de23-47f7042b3639"
            className="nav_link-wrapper company"
          >
            <a
              id="company-nav-link"
              href="#community#"
              className="nav_link w-inline-block"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                color: "rgb(255, 255, 255)"
              }}
            >
              <div className="nav_link-text">company</div>
              <div className="nav_link-icon w-embed">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentcolor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
          {/*-------------------------------------------------------Navbar Dropdown Section---------------------------------------------------------*/}
          {/*iframe src="https://player.vimeo.com/video/791154608?h=a0b62c3daa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;loop=1&amp;autoplay=1&amp;background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="illustration"></iframe*/}
        </div>
      </nav>
    </div>
  </div>
  <div className="padding-global">
    <div className="container-medium">
      <div className="padding-section-small">
        <div className="padding-bottom padding-large hide-mobile-portrait" />
        <div className="max-width-large z-index-2">
          <h1>
            Collectively, we are building the future we
            <span className="line_break"> </span>want to see
          </h1>
          <div className="padding-bottom padding-custom3" />
          <div className="padding-right padding-giant is-0-padding-mobile-portrait">
            <p className="text-weight-medium text-color-grey6">
              Join the Cloudadore community to build faster, smarter, and
              without limits.
            </p>
          </div>
        </div>
        <div className="padding-bottom padding-large hide-mobile-portrait" />
      </div>
    </div>
  </div>
  <div className="section is-gradient-bg">
    <div className="padding-global">
      <div className="container-medium">
        <div className="padding-section-medium">
          <div className="banner_component">
            <div className="banner_wrapper pb_intersection">
              <div className="banner_animation-wrap">
                <div className="banner_animation-embed pb_video_embed w-embed w-iframe">
                  {/*div style="width: 100%; height: 100%;" class="w-background-video w-background-video-atom">
                                <video playsinline loop muted autoplay="" loop="" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">
                                  <source src="https://player.vimeo.com/progressive_redirect/playback/791154587/rendition/720p/file.mp4?loc=external&signature=d763ca99274ad862a89eb75ad84e388135bf09369c4129f8623e99fcfce23aac" data-wf-ignore="true"/>
                                  
                                </video>
                              </div*/}
                  <iframe
                    src="#"
                    frameBorder={0}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen=""
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%"
                    }}
                    title="illustration"
                    data-ready="true"
                  />
                </div>
              </div>
              <div
                id="w-node-_7a7a4c90-3faf-5bff-7948-22b74e3fc72d-6b7aa386"
                className="banner_content"
              >
                <h4 className="text-weight-medium">
                  Explore meet-ups and workshops near you
                </h4>
                <div className="padding-bottom padding-small" />
                <p className="text-weight-medium text-color-grey6">
                  Join Cloudadore and attend inside-man meet-ups, workshops, and
                  more with other Web enthusiasts in your area.
                </p>
                <div className="padding-bottom padding-custom3" />
                <div className="button-group is-mobile-flex-vertical z-index-1">
                  <a
                    id="community-join-guid"
                    href="#guilds"
                    className="button is-icon is-small w-inline-block"
                  >
                    <div className="button-icon_left-element is-icon-medium">
                      <div className="text-size-small">Join a us today</div>
                    </div>
                    <div className="button-icon_right-element is-icon-medium">
                      <div className="icon-1x1-medium w-embed">
                        <svg
                          width="auto"
                          height="auto"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17L17 7M17 7V17M17 7H7"
                            stroke="currentcolor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                  <a
                    id="community-host-guild"
                    href="#"
                    target="_blank"
                    className="button is-icon is-secondary is-small w-inline-block"
                  >
                    <div className="button-icon_left-element is-icon-medium">
                      <div className="text-size-small">Host </div>
                    </div>
                    <div className="button-icon_right-element is-icon-medium">
                      <div className="icon-1x1-medium w-embed">
                        <svg
                          width="auto"
                          height="auto"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17L17 7M17 7V17M17 7H7"
                            stroke="currentcolor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="banner_wrapper">
              <div
                id="w-node-_7a7a4c90-3faf-5bff-7948-22b74e3fc73c-6b7aa386"
                className="banner_content"
              >
                <h4 className="text-weight-medium">
                  Ready to become a Cloudadore Advocate?
                </h4>
                <div className="padding-bottom padding-small" />
                <p className="text-weight-medium text-color-grey6">
                  Learn more about the program and become a Cloudadore Advocate.
                </p>
                <div className="padding-bottom padding-custom3" />
                <div className="button-group">
                  <a
                    id="community-explore-advocate"
                    href="#advocate-program"
                    className="button is-icon is-small w-inline-block"
                  >
                    <div className="button-icon_left-element is-icon-medium">
                      <div className="text-size-small">Explore here</div>
                    </div>
                    <div className="button-icon_right-element is-icon-medium">
                      <div className="icon-1x1-medium w-embed">
                        <svg
                          width="auto"
                          height="auto"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17L17 7M17 7V17M17 7H7"
                            stroke="currentcolor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                id="w-node-_7a7a4c90-3faf-5bff-7948-22b74e3fc74a-6b7aa386"
                className="banner_animation-wrap"
              >
                <div className="banner_animation-embed pb_video_embed w-embed w-iframe">
                  {/*div style="width: 100%; height: 100%;" class="w-background-video w-background-video-atom">
                                <video playsinline loop muted autoplay="" loop="" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">
                                  <source src="https://player.vimeo.com/progressive_redirect/playback/791154651/rendition/720p/file.mp4?loc=external&signature=d48345def1543f7d5eca34da9848b17faae7565e25d26c5f4c21c2383b1ce0bc" data-wf-ignore="true"/>
                                </video>
                              </div*/}
                  <iframe
                    src="#"
                    frameBorder={0}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen=""
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%"
                    }}
                    title="illustration"
                    data-ready="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="section is-gradient-bg">
    <div className="padding-global">
      <div className="container-medium">
        <div className="padding-section-medium">
          <h2 className="heading-style-h1">Follow us on our socials</h2>
          <div className="padding-bottom padding-xlarge" />
          <div className="community-sm_component">
            <a
              href="https://discord.com/invite/0xPolygon"
              target="_blank"
              className="community-sm_card w-inline-block"
            >
              <div className="community-sm_top-content">
                <div className="community-sm_logo-wrapper">
                  <div className="icon-1x1-medium w-embed">
                    <svg
                      width={25}
                      height={24}
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3166 7.08877C17.1362 6.57346 15.8874 6.20731 14.6032 6C14.4432 6.26982 14.2563 6.63272 14.1274 6.92143C12.7428 6.72718 11.371 6.72718 10.0118 6.92143C9.88302 6.63278 9.69191 6.26982 9.53047 6C8.24501 6.20741 6.99512 6.57449 5.8141 7.09146C3.46398 10.4049 2.82688 13.6359 3.14539 16.8212C4.70415 17.9072 6.21475 18.567 7.69989 18.9987C8.06898 18.5251 8.39525 18.0238 8.67533 17.4998C8.1421 17.3104 7.62805 17.077 7.13928 16.8023C7.26791 16.7134 7.3935 16.6207 7.51588 16.5244C10.4776 17.8168 13.6956 17.8168 16.622 16.5244C16.745 16.62 16.8705 16.7127 16.9986 16.8023C16.509 17.0777 15.994 17.3116 15.4597 17.5012C15.7414 18.0273 16.0671 18.5291 16.4352 19C17.9217 18.5683 19.4337 17.9086 20.9925 16.8212C21.3662 13.1287 20.354 9.92724 18.3166 7.08871V7.08877ZM9.07885 14.8623C8.18975 14.8623 7.46061 14.0879 7.46061 13.1449C7.46061 12.2019 8.17421 11.4262 9.07885 11.4262C9.98356 11.4262 10.7126 12.2005 10.6971 13.1449C10.6985 14.0879 9.98356 14.8623 9.07885 14.8623ZM15.059 14.8623C14.1699 14.8623 13.4408 14.0879 13.4408 13.1449C13.4408 12.2019 14.1544 11.4262 15.059 11.4262C15.9637 11.4262 16.6928 12.2005 16.6772 13.1449C16.6772 14.0879 15.9637 14.8623 15.059 14.8623Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="community-sm_icon-wrapper"
                  style={{
                    transform:
                      "translate3d(-4px, 3px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 0
                  }}
                >
                  <div className="icon-1x1-large w-embed">
                    <svg
                      width="auto"
                      height="auto"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7V17M17 7H7"
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="community-sm_bottom-content">
                <h3 className="heading-style-h5 text-weight-medium">Discord</h3>
                <div className="padding-bottom padding-custom1" />
                <div className="text-size-small text-color-grey6">
                  39.2K Members
                </div>
              </div>
            </a>
            <a
              href="https://t.me/polygonofficial"
              target="_blank"
              className="community-sm_card w-inline-block"
            >
              <div className="community-sm_top-content">
                <div className="community-sm_logo-wrapper">
                  <div className="icon-1x1-medium w-embed">
                    <svg
                      width={25}
                      height={24}
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.7865 4.1052L3.95615 10.6219C2.80755 11.0851 2.8142 11.7285 3.74542 12.0154L8.06644 13.3689L18.064 7.03519C18.5368 6.74638 18.9687 6.90175 18.6136 7.21819L10.5136 14.5584H10.5117L10.5136 14.5594L10.2156 19.0315C10.6522 19.0315 10.8449 18.8304 11.0898 18.5931L13.1886 16.5438L17.5543 19.7817C18.3592 20.2268 18.9373 19.998 19.1376 19.0334L22.0035 5.47202C22.2968 4.29107 21.5545 3.75635 20.7865 4.1052Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="community-sm_icon-wrapper"
                  style={{
                    transform:
                      "translate3d(-4px, 3px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 0
                  }}
                >
                  <div className="icon-1x1-large w-embed">
                    <svg
                      width="auto"
                      height="auto"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7V17M17 7H7"
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="community-sm_bottom-content">
                <h3 className="heading-style-h5 text-weight-medium">
                  Telegram
                </h3>
                <div className="padding-bottom padding-custom1" />
                <div className="text-size-small text-color-grey6">
                  67.9K Members
                </div>
              </div>
            </a>
            <a
              href="https://twitter.com/0xPolygonLabs"
              target="_blank"
              className="community-sm_card w-inline-block"
            >
              <div className="community-sm_top-content">
                <div className="community-sm_logo-wrapper">
                  <div className="icon-1x1-medium w-embed">
                    <svg
                      width={25}
                      height={24}
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.069 6.73077C20.394 7.07692 19.719 7.19231 18.9315 7.30769C19.719 6.84615 20.2815 6.15385 20.5065 5.23077C19.8315 5.69231 19.044 5.92308 18.144 6.15385C17.469 5.46154 16.4565 5 15.444 5C13.0815 5 11.2815 7.30769 11.844 9.61538C8.80647 9.5 6.10647 8 4.19397 5.69231C3.18147 7.42308 3.74397 9.61538 5.31897 10.7692C4.75647 10.7692 4.19397 10.5385 3.63147 10.3077C3.63147 12.0385 4.86897 13.6538 6.55647 14.1154C5.99397 14.2308 5.43147 14.3462 4.86897 14.2308C5.31897 15.7308 6.66897 16.8846 8.35647 16.8846C7.00647 17.9231 4.98147 18.5 3.06897 18.2692C4.75647 19.3077 6.66897 20 8.69397 20C15.5565 20 19.3815 14.1154 19.1565 8.69231C19.944 8.23077 20.619 7.53846 21.069 6.73077Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="community-sm_icon-wrapper"
                  style={{
                    transform:
                      "translate3d(-4px, 3px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 0
                  }}
                >
                  <div className="icon-1x1-large w-embed">
                    <svg
                      width="auto"
                      height="auto"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7V17M17 7H7"
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="community-sm_bottom-content">
                <h3 className="heading-style-h5 text-weight-medium">Twitter</h3>
                <div className="padding-bottom padding-custom1" />
                <div className="text-size-small text-color-grey6">
                  1.8M Members
                </div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/polygonlabs/"
              target="_blank"
              className="community-sm_card w-inline-block"
            >
              <div className="community-sm_top-content">
                <div className="community-sm_logo-wrapper">
                  <div className="icon-1x1-medium w-embed">
                    <svg
                      width="auto"
                      height="auto"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="community-sm_icon-wrapper"
                  style={{
                    transform:
                      "translate3d(-4px, 3px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 0
                  }}
                >
                  <div className="icon-1x1-large w-embed">
                    <svg
                      width="auto"
                      height="auto"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7V17M17 7H7"
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="community-sm_bottom-content">
                <h3 className="heading-style-h5 text-weight-medium">
                  LinkedIn
                </h3>
                <div className="padding-bottom padding-custom1" />
                <div className="text-size-small text-color-grey6">
                  123.5K Members
                </div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/0xpolygon/"
              target="_blank"
              className="community-sm_card w-inline-block"
            >
              <div className="community-sm_top-content">
                <div className="community-sm_logo-wrapper">
                  <div className="icon-1x1-medium w-embed">
                    <svg
                      width={25}
                      height={24}
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3.06897"
                        y={3}
                        width={18}
                        height={18}
                        rx={5}
                        stroke="currentcolor"
                        strokeWidth="1.5"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.569 7.5C18.1213 7.5 18.569 7.05228 18.569 6.5C18.569 5.94772 18.1213 5.5 17.569 5.5C17.0167 5.5 16.569 5.94772 16.569 6.5C16.569 7.05228 17.0167 7.5 17.569 7.5ZM15.569 12C15.569 13.933 14.002 15.5 12.069 15.5C10.136 15.5 8.56897 13.933 8.56897 12C8.56897 10.067 10.136 8.5 12.069 8.5C14.002 8.5 15.569 10.067 15.569 12ZM17.069 12C17.069 14.7614 14.8304 17 12.069 17C9.30755 17 7.06897 14.7614 7.06897 12C7.06897 9.23858 9.30755 7 12.069 7C14.8304 7 17.069 9.23858 17.069 12Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="community-sm_icon-wrapper"
                  style={{
                    transform:
                      "translate3d(-4px, 3px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 0
                  }}
                >
                  <div className="icon-1x1-large w-embed">
                    <svg
                      width="auto"
                      height="auto"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7V17M17 7H7"
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="community-sm_bottom-content">
                <h3 className="heading-style-h5 text-weight-medium">
                  Instagram
                </h3>
                <div className="padding-bottom padding-custom1" />
                <div className="text-size-small text-color-grey6">
                  42.6K Members
                </div>
              </div>
            </a>
            <a
              href="https://www.reddit.com/r/0xPolygon/"
              target="_blank"
              className="community-sm_card w-inline-block"
            >
              <div className="community-sm_top-content">
                <div className="community-sm_logo-wrapper">
                  <div className="icon-1x1-medium w-embed">
                    <svg
                      width={25}
                      height={24}
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.069 12.1445C22.069 10.9157 21.0835 9.93969 19.8826 9.93969C19.3153 9.93891 18.7696 10.1591 18.3594 10.5542C16.8541 9.46977 14.793 8.76512 12.4992 8.67475L13.5026 3.93985L16.7642 4.6445C16.8003 5.47587 17.4811 6.14464 18.3236 6.14464C19.1837 6.14464 19.8826 5.43999 19.8826 4.57214C19.8826 3.70477 19.1838 3 18.3236 3C17.7143 3 17.1764 3.36144 16.9256 3.88561L13.2878 3.10848C13.1802 3.09024 13.0726 3.10848 13.0009 3.16272C12.9112 3.21696 12.8576 3.3072 12.8398 3.41569L11.7284 8.69264C9.39874 8.76512 7.30185 9.46977 5.77866 10.5723C5.3684 10.1772 4.82267 9.95709 4.25535 9.95793C3.03667 9.95793 2.06897 10.9517 2.06897 12.1627C2.06897 13.0662 2.60649 13.8251 3.3594 14.1688C3.32284 14.3897 3.30484 14.6134 3.30561 14.8374C3.30561 18.2347 7.23045 21 12.0691 21C16.9078 21 20.8327 18.2529 20.8327 14.8374C20.8326 14.6135 20.8146 14.3899 20.7789 14.1688C21.5315 13.8251 22.069 13.048 22.069 12.1445ZM7.051 13.7166C7.051 12.8493 7.74977 12.1445 8.61037 12.1445C9.4705 12.1445 10.1694 12.8491 10.1694 13.7166C10.1694 14.5841 9.47061 15.2891 8.61037 15.2891C7.74989 15.3069 7.051 14.5841 7.051 13.7166ZM15.7788 17.8914C14.7035 18.9758 12.6604 19.0482 12.0691 19.0482C11.4598 19.0482 9.41683 18.9576 8.35916 17.8914C8.19815 17.7288 8.19815 17.4757 8.35916 17.3131C8.52053 17.1507 8.77138 17.1507 8.93274 17.3131C9.61389 18 11.0476 18.2347 12.0691 18.2347C13.0907 18.2347 14.5421 17.9998 15.2052 17.3131C15.3666 17.1507 15.6174 17.1507 15.7788 17.3131C15.9221 17.4757 15.9221 17.7288 15.7788 17.8914ZM15.4919 15.307C14.6316 15.307 13.9329 14.6024 13.9329 13.7349C13.9329 12.8674 14.6316 12.1627 15.4919 12.1627C16.3524 12.1627 17.0511 12.8674 17.0511 13.7349C17.0511 14.584 16.3524 15.307 15.4919 15.307Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="community-sm_icon-wrapper"
                  style={{
                    transform:
                      "translate3d(-4px, 3px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 0
                  }}
                >
                  <div className="icon-1x1-large w-embed">
                    <svg
                      width="auto"
                      height="auto"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7V17M17 7H7"
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="community-sm_bottom-content">
                <h3 className="heading-style-h5 text-weight-medium">Reddit</h3>
                <div className="padding-bottom padding-custom1" />
                <div className="text-size-small text-color-grey6">
                  54.1K Members
                </div>
              </div>
            </a>
            <a
              href="https://www.youtube.com/PolygonTV"
              target="_blank"
              className="community-sm_card w-inline-block"
            >
              <div className="community-sm_top-content">
                <div className="community-sm_logo-wrapper">
                  <div className="icon-1x1-medium w-embed">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 4C12.855 4 13.732 4.022 14.582 4.058L15.586 4.106L16.547 4.163L17.447 4.224L18.269 4.288C19.161 4.35628 20.0004 4.73695 20.6395 5.36304C21.2786 5.98913 21.6764 6.82054 21.763 7.711L21.803 8.136L21.878 9.046C21.948 9.989 22 11.017 22 12C22 12.983 21.948 14.011 21.878 14.954L21.803 15.864C21.79 16.01 21.777 16.151 21.763 16.289C21.6764 17.1796 21.2784 18.0112 20.6391 18.6373C19.9999 19.2634 19.1602 19.6439 18.268 19.712L17.448 19.775L16.548 19.837L15.586 19.894L14.582 19.942C13.7218 19.9794 12.861 19.9987 12 20C11.139 19.9987 10.2782 19.9794 9.418 19.942L8.414 19.894L7.453 19.837L6.553 19.775L5.731 19.712C4.83895 19.6437 3.99955 19.2631 3.36047 18.637C2.72139 18.0109 2.32357 17.1795 2.237 16.289L2.197 15.864L2.122 14.954C2.04554 13.9711 2.00484 12.9858 2 12C2 11.017 2.052 9.989 2.122 9.046L2.197 8.136C2.21 7.99 2.223 7.849 2.237 7.711C2.32354 6.8207 2.72122 5.98942 3.36009 5.36334C3.99897 4.73727 4.83813 4.3565 5.73 4.288L6.551 4.224L7.451 4.163L8.413 4.106L9.417 4.058C10.2775 4.02063 11.1387 4.0013 12 4ZM10 9.575V14.425C10 14.887 10.5 15.175 10.9 14.945L15.1 12.52C15.1914 12.4674 15.2673 12.3916 15.3201 12.3003C15.3729 12.209 15.4007 12.1055 15.4007 12C15.4007 11.8945 15.3729 11.791 15.3201 11.6997C15.2673 11.6084 15.1914 11.5326 15.1 11.48L10.9 9.056C10.8088 9.00332 10.7053 8.9756 10.5999 8.97562C10.4945 8.97563 10.3911 9.00339 10.2998 9.0561C10.2086 9.1088 10.1329 9.1846 10.0802 9.27587C10.0276 9.36713 9.99993 9.47065 10 9.576V9.575Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="community-sm_icon-wrapper"
                  style={{
                    transform:
                      "translate3d(-4px, 3px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 0
                  }}
                >
                  <div className="icon-1x1-large w-embed">
                    <svg
                      width="auto"
                      height="auto"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7V17M17 7H7"
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="community-sm_bottom-content">
                <h3 className="heading-style-h5 text-weight-medium">Youtube</h3>
                <div className="padding-bottom padding-custom1" />
                <div className="text-size-small text-color-grey6">
                  12.1K Members
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section overflow-hidden">
    <div className="padding-global">
      <div className="container-medium">
        <div className="padding-section-medium">
          {/*<div class="heading_wrapper max-width-xlarge">
                      <h2>In the news</h2>
                      <div class="radial_heading-cover pointer-events-off"></div>
                    </div>
                    
                    <div class="padding-bottom padding-xlarge"></div>
                    <div id="news-slider" class="splide splide--slide splide--ltr splide--draggable is-active is-overflow is-initialized" role="region" aria-roledescription="carousel">
                      <div class="splide__arrows hide-mobile-portrait splide__arrows--ltr">
                        <div class="w-embed">
                          <button class="splide__arrow splide__arrow--prev" disabled="" aria-label="Previous slide" aria-controls="news-slider-track">
                            <div class="icon-1x1-small is-rotate-180">
                              <svg aria-hidden="true" fill="currentColor" role="img" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                                <title>Arrow Right</title>
                                <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                              </svg>
                            </div>
                          </button>
                        </div>
                        <div class="w-embed">
                          <button class="splide__arrow splide__arrow--next" aria-label="Next slide" aria-controls="news-slider-track">
                            <div class="icon-1x1-small">
                              <svg aria-hidden="true" fill="currentColor" role="img" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                              <title>Arrow Right</title>
                              <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>*/}
          <div className="padding-bottom padding-custom4" />
        </div>
      </div>
    </div>
  </section>
  <section className="section is-gradient-bg">
    <div className="padding-global">
      <div className="container-medium">
        <div className="padding-section-medium">
          <h2 className="heading-style-h1">Community culture</h2>
          <div className="padding-bottom padding-xlarge" />
          <div className="value_component">
            <div className="value_card pb_section_card">
              <div className="value-card_bg" />
              <div className="value-card_animation-wrapper">
                <div className="animation_embed pb_video_embed pb_hide w-embed w-iframe">
                  <iframe
                    src="#"
                    frameBorder={0}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen=""
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%"
                    }}
                    title="illustration"
                    data-ready="true"
                  ></iframe>
                </div>
              </div>
              <div className="value-card_content">
                <div>
                  <h4 className="text-weight-medium">24/7 Support</h4>
                  <div className="padding-bottom padding-custom1" />
                  <p className="text-size-small text-weight-medium text-color-grey6">
                    Community members can always chat with our team or other
                    developers to problem solve and smoothly continue building.
                  </p>
                </div>
              </div>
              <div className="card_hover-arrow hide w-embed">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7V17M17 7H7"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="value_card pb_section_card">
              <div className="value-card_bg" />
              <div className="value-card_animation-wrapper">
                <div className="animation_embed pb_video_embed pb_hide w-embed w-iframe">
                  <div
                    style={{ width: "100%", height: "100%" }}
                    className="w-background-video w-background-video-atom"
                  ></div>
                  <iframe
                    src="#"
                    frameBorder={0}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen=""
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%"
                    }}
                    title="illustration"
                    data-ready="true"
                  />
                </div>
              </div>
              <div className="value-card_content">
                <div>
                  <h4 className="text-weight-medium">Education</h4>
                  <div className="padding-bottom padding-custom1" />
                  <p className="text-size-small text-weight-medium text-color-grey6">
                    We’ve got your back, and we all win together. Learn from
                    Cloudadore's Community, cloud and devops devs, and fellow
                    community members.
                  </p>
                </div>
              </div>
              <div className="card_hover-arrow hide w-embed">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7V17M17 7H7"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <iframe
              src="#"
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen=""
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              title="Hero"
              data-ready="true"
            />
          </div>
        </div>
        <div className="padding-global">
          <div className="container-medium">
            <div className="padding-section-large">
              <div className="newsletter-form_max-width">
                <div className="text-size-tiny text-style-label text-style-allcaps text-color-purple0">
                  STAY UP TO DATE
                </div>
                <div className="padding-bottom padding-xsmall" />
                <h3 className="heading-style-h4">Get our newsletter</h3>
                <div className="padding-bottom padding-custom2" />
                <div className="w-form">
                  <form
                    id="wf-form-Newsletter-Form"
                    name="wf-form-Newsletter-Form"
                    data-name="Newsletter Form"
                    method="get"
                    className="newsletter_form"
                    data-wf-page-id="643666dc103902926b7aa386"
                    data-wf-element-id="323f59e2-9817-65e0-3c86-94f24a0857f3"
                    aria-label="Newsletter Form"
                  >
                    <input
                      type="email"
                      className="form_input is-newsletter w-input"
                      maxLength={256}
                      name="Newsletter-Email"
                      data-name="Newsletter Email"
                      placeholder="Enter your email"
                      id="Newsletter-Email"
                      required=""
                    />
                    <div className="newsletter_form-embed w-embed w-script">
                      <input
                        type="hidden"
                        name="Path"
                        id="titleinput"
                        defaultValue="community"
                      />
                    </div>
                    <input
                      type="submit"
                      id="newsletter-submit"
                      defaultValue=""
                      data-wait=""
                      className="newsletter_submit-icon w-button"
                    />
                  </form>
                  <div
                    className="newsletter_success-state w-form-done"
                    tabIndex={-1}
                    role="region"
                    aria-label="Newsletter Form success"
                  >
                    <div>
                      Thank You! We’ve received your submission!
                      <br />
                    </div>
                  </div>
                  <div
                    className="newsletter_error-state w-form-fail"
                    tabIndex={-1}
                    role="region"
                    aria-label="Newsletter Form failure"
                  >
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="footer">
    <div className="padding-global">
      <div className="cookie-consent-wrapper">
        <div fs-cc="banner" className="cookie_component">
          <div className="cookie_wrapper">
            <div
              id="w-node-_92b2362b-356a-3cf8-478d-fd802060d4b8-2060d4b5"
              className="cookie_content-wrapper"
            >
              <img
                src="./Community _ Join the Polygon community_files/63fce28ca25c536ae194ef4c_cookie.png"
                loading="lazy"
                width={47}
                id="w-node-_92b2362b-356a-3cf8-478d-fd802060d4b9-2060d4b5"
                alt=""
                className="cookie_image"
              />
              <div id="w-node-_0b00e571-b870-d413-eb76-fa775d9032e3-2060d4b5">
                <div id="w-node-_92b2362b-356a-3cf8-478d-fd802060d4ba-2060d4b5">
                  We use tasty cookies to personalize your site experience and
                  analyze site traffic.
                  <a
                    href="#cookie-policy"
                    target="_blank"
                    className="cookie_learn-link"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="button-group is-cookie-banner">
              <a
                fs-cc="allow"
                href="#community#"
                className="button is-icon w-inline-block"
              >
                <div className="button-icon_left-element is-icon-medium">
                  <div className="text-size-small">Accept</div>
                </div>
              </a>
              <a
                fs-cc="deny"
                href="#community#"
                className="button is-icon is-secondary w-inline-block"
              >
                <div className="button-icon_left-element is-icon-medium">
                  <div className="text-size-small">Decline</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*-----------------------------------------Footer Section-------------------------------------------------------*/}
    </div>
    <div className="footer_bottom-component">
      <div className="footer_bottom-content-wrap">
        <div className="container-medium">
          <div className="padding-section-medium">
            <div className="footer_component">
              <div className="footer_logo-row">
                <a href="#" className="nav_logo-link is-footer w-nav-brand">
                  <img
                    src="#"
                    loading="lazy"
                    width={113}
                    height={36}
                    alt=""
                    className="nav_logo-dark"
                  />
                  <img
                    src="/assets/logo 2.jpg"
                    loading="lazy"
                    width={113}
                    height={36}
                    alt=""
                  />
                </a>
                <div className="footer_sm-link-wrapper">
                  <a
                    href="https://twitter.com/0xPolygonLabs"
                    target="_blank"
                    className="footer_sm-link w-inline-block"
                  >
                    <div className="icon-1x1-medium is-footer-icon w-embed">
                      <svg
                        width={25}
                        height={24}
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.069 6.73077C20.394 7.07692 19.719 7.19231 18.9315 7.30769C19.719 6.84615 20.2815 6.15385 20.5065 5.23077C19.8315 5.69231 19.044 5.92308 18.144 6.15385C17.469 5.46154 16.4565 5 15.444 5C13.0815 5 11.2815 7.30769 11.844 9.61538C8.80647 9.5 6.10647 8 4.19397 5.69231C3.18147 7.42308 3.74397 9.61538 5.31897 10.7692C4.75647 10.7692 4.19397 10.5385 3.63147 10.3077C3.63147 12.0385 4.86897 13.6538 6.55647 14.1154C5.99397 14.2308 5.43147 14.3462 4.86897 14.2308C5.31897 15.7308 6.66897 16.8846 8.35647 16.8846C7.00647 17.9231 4.98147 18.5 3.06897 18.2692C4.75647 19.3077 6.66897 20 8.69397 20C15.5565 20 19.3815 14.1154 19.1565 8.69231C19.944 8.23077 20.619 7.53846 21.069 6.73077Z"
                          fill="currentcolor"
                        />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://t.me/polygonofficial"
                    target="_blank"
                    className="footer_sm-link w-inline-block"
                  >
                    <div className="icon-1x1-medium is-footer-icon w-embed">
                      <svg
                        width={25}
                        height={24}
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.7865 4.1052L3.95615 10.6219C2.80755 11.0851 2.8142 11.7285 3.74542 12.0154L8.06644 13.3689L18.064 7.03519C18.5368 6.74638 18.9687 6.90175 18.6136 7.21819L10.5136 14.5584H10.5117L10.5136 14.5594L10.2156 19.0315C10.6522 19.0315 10.8449 18.8304 11.0898 18.5931L13.1886 16.5438L17.5543 19.7817C18.3592 20.2268 18.9373 19.998 19.1376 19.0334L22.0035 5.47202C22.2968 4.29107 21.5545 3.75635 20.7865 4.1052Z"
                          fill="currentcolor"
                        />
                      </svg>
                    </div>
                  </a>
                  <div
                    data-w-id="c17dff6f-8633-a9c0-2fa8-a69e238c033b"
                    className="footer_sm-link"
                  >
                    <div className="icon-1x1-medium w-embed">
                      <svg
                        width={25}
                        height={24}
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.3166 7.08877C17.1362 6.57346 15.8874 6.20731 14.6032 6C14.4432 6.26982 14.2563 6.63272 14.1274 6.92143C12.7428 6.72718 11.371 6.72718 10.0118 6.92143C9.88302 6.63278 9.69191 6.26982 9.53047 6C8.24501 6.20741 6.99512 6.57449 5.8141 7.09146C3.46398 10.4049 2.82688 13.6359 3.14539 16.8212C4.70415 17.9072 6.21475 18.567 7.69989 18.9987C8.06898 18.5251 8.39525 18.0238 8.67533 17.4998C8.1421 17.3104 7.62805 17.077 7.13928 16.8023C7.26791 16.7134 7.3935 16.6207 7.51588 16.5244C10.4776 17.8168 13.6956 17.8168 16.622 16.5244C16.745 16.62 16.8705 16.7127 16.9986 16.8023C16.509 17.0777 15.994 17.3116 15.4597 17.5012C15.7414 18.0273 16.0671 18.5291 16.4352 19C17.9217 18.5683 19.4337 17.9086 20.9925 16.8212C21.3662 13.1287 20.354 9.92724 18.3166 7.08871V7.08877ZM9.07885 14.8623C8.18975 14.8623 7.46061 14.0879 7.46061 13.1449C7.46061 12.2019 8.17421 11.4262 9.07885 11.4262C9.98356 11.4262 10.7126 12.2005 10.6971 13.1449C10.6985 14.0879 9.98356 14.8623 9.07885 14.8623ZM15.059 14.8623C14.1699 14.8623 13.4408 14.0879 13.4408 13.1449C13.4408 12.2019 14.1544 11.4262 15.059 11.4262C15.9637 11.4262 16.6928 12.2005 16.6772 13.1449C16.6772 14.0879 15.9637 14.8623 15.059 14.8623Z"
                          fill="currentcolor"
                        />
                      </svg>
                    </div>
                    <div
                      className="discord_hover-wrapper"
                      style={{
                        display: "none",
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d"
                      }}
                    >
                      <a
                        href="https://discord.com/invite/0xPolygon"
                        target="_blank"
                        className="button is-icon is-discord-hover w-inline-block"
                      >
                        <div className="button-icon_left-element is-icon-medium">
                          <div className="text-size-small">General Discord</div>
                        </div>
                        <div className="button-icon_right-element">
                          <div className="button-icon_mask">
                            <div className="button-icon_wrapper">
                              <div className="button-icon_1x1-small w-embed">
                                <svg
                                  width="auto"
                                  height="auto"
                                  viewBox="0 0 24 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7 17.4609L17 7.46094M17 7.46094V17.4609M17 7.46094H7"
                                    stroke="CurrentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="button-icon_hover-wrapper">
                              <div className="button-icon_1x1-small w-embed">
                                <svg
                                  width="auto"
                                  height="auto"
                                  viewBox="0 0 24 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7 17.4609L17 7.46094M17 7.46094V17.4609M17 7.46094H7"
                                    stroke="CurrentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="button is-icon is-discord-hover w-inline-block"
                      >
                        <div className="button-icon_left-element is-icon-medium">
                          <div className="text-size-small">
                            Developer Discord
                          </div>
                        </div>
                        <div className="button-icon_right-element">
                          <div className="button-icon_mask">
                            <div className="button-icon_wrapper">
                              <div className="button-icon_1x1-small w-embed">
                                <svg
                                  width="auto"
                                  height="auto"
                                  viewBox="0 0 24 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7 17.4609L17 7.46094M17 7.46094V17.4609M17 7.46094H7"
                                    stroke="CurrentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="button-icon_hover-wrapper">
                              <div className="button-icon_1x1-small w-embed">
                                <svg
                                  width="auto"
                                  height="auto"
                                  viewBox="0 0 24 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7 17.4609L17 7.46094M17 7.46094V17.4609M17 7.46094H7"
                                    stroke="CurrentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    className="footer_sm-link w-inline-block"
                  >
                    <div className="icon-1x1-medium is-footer-icon w-embed">
                      <svg
                        width={25}
                        height={24}
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.069 12.1445C22.069 10.9157 21.0835 9.93969 19.8826 9.93969C19.3153 9.93891 18.7696 10.1591 18.3594 10.5542C16.8541 9.46977 14.793 8.76512 12.4992 8.67475L13.5026 3.93985L16.7642 4.6445C16.8003 5.47587 17.4811 6.14464 18.3236 6.14464C19.1837 6.14464 19.8826 5.43999 19.8826 4.57214C19.8826 3.70477 19.1838 3 18.3236 3C17.7143 3 17.1764 3.36144 16.9256 3.88561L13.2878 3.10848C13.1802 3.09024 13.0726 3.10848 13.0009 3.16272C12.9112 3.21696 12.8576 3.3072 12.8398 3.41569L11.7284 8.69264C9.39874 8.76512 7.30185 9.46977 5.77866 10.5723C5.3684 10.1772 4.82267 9.95709 4.25535 9.95793C3.03667 9.95793 2.06897 10.9517 2.06897 12.1627C2.06897 13.0662 2.60649 13.8251 3.3594 14.1688C3.32284 14.3897 3.30484 14.6134 3.30561 14.8374C3.30561 18.2347 7.23045 21 12.0691 21C16.9078 21 20.8327 18.2529 20.8327 14.8374C20.8326 14.6135 20.8146 14.3899 20.7789 14.1688C21.5315 13.8251 22.069 13.048 22.069 12.1445ZM7.051 13.7166C7.051 12.8493 7.74977 12.1445 8.61037 12.1445C9.4705 12.1445 10.1694 12.8491 10.1694 13.7166C10.1694 14.5841 9.47061 15.2891 8.61037 15.2891C7.74989 15.3069 7.051 14.5841 7.051 13.7166ZM15.7788 17.8914C14.7035 18.9758 12.6604 19.0482 12.0691 19.0482C11.4598 19.0482 9.41683 18.9576 8.35916 17.8914C8.19815 17.7288 8.19815 17.4757 8.35916 17.3131C8.52053 17.1507 8.77138 17.1507 8.93274 17.3131C9.61389 18 11.0476 18.2347 12.0691 18.2347C13.0907 18.2347 14.5421 17.9998 15.2052 17.3131C15.3666 17.1507 15.6174 17.1507 15.7788 17.3131C15.9221 17.4757 15.9221 17.7288 15.7788 17.8914ZM15.4919 15.307C14.6316 15.307 13.9329 14.6024 13.9329 13.7349C13.9329 12.8674 14.6316 12.1627 15.4919 12.1627C16.3524 12.1627 17.0511 12.8674 17.0511 13.7349C17.0511 14.584 16.3524 15.307 15.4919 15.307Z"
                          fill="currentcolor"
                        />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="footer_sm-link w-inline-block"
                  >
                    <div className="icon-1x1-medium is-footer-icon w-embed">
                      <svg
                        width={25}
                        height={24}
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.0384 2C6.5338 2 2.06897 6.58933 2.06897 12.2474C2.06897 16.7739 4.94359 20.6088 8.85796 21.9919C9.34726 22.0547 9.53074 21.7404 9.53074 21.4889C9.53074 21.2375 9.53074 20.6088 9.53074 19.7286C6.77845 20.3573 6.16683 18.3456 6.16683 18.3456C5.73869 17.1511 5.06591 16.8367 5.06591 16.8367C4.14848 16.2081 5.12707 16.2081 5.12707 16.2081C6.10567 16.2709 6.65613 17.2768 6.65613 17.2768C7.57356 18.8485 8.98028 18.4084 9.53074 18.1569C9.59191 17.4654 9.89772 17.0253 10.1424 16.7739C7.94053 16.5224 5.61637 15.6422 5.61637 11.6816C5.61637 10.55 5.98334 9.66984 6.65613 8.91543C6.59496 8.72682 6.22799 7.65808 6.77845 6.27499C6.77845 6.27499 7.63472 6.02352 9.53074 7.34374C10.3259 7.09227 11.1821 7.0294 12.0384 7.0294C12.8947 7.0294 13.7509 7.15514 14.546 7.34374C16.4421 6.02352 17.2983 6.27499 17.2983 6.27499C17.8488 7.65808 17.4818 8.72682 17.4207 8.97829C18.0323 9.66984 18.4604 10.6128 18.4604 11.7445C18.4604 15.7051 16.1362 16.5224 13.9344 16.7739C14.3014 17.0882 14.6072 17.7169 14.6072 18.6599C14.6072 20.043 14.6072 21.1117 14.6072 21.4889C14.6072 21.7404 14.7907 22.0547 15.28 21.9919C19.2555 20.6088 22.069 16.7739 22.069 12.2474C22.0078 6.58933 17.543 2 12.0384 2Z"
                          fill="currentcolor"
                        />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="footer_sm-link w-inline-block"
                  >
                    <div className="icon-1x1-medium is-footer-icon w-embed">
                      <svg
                        width={25}
                        height={24}
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="3.06897"
                          y={3}
                          width={18}
                          height={18}
                          rx={5}
                          stroke="currentcolor"
                          strokeWidth="1.5"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.569 7.5C18.1213 7.5 18.569 7.05228 18.569 6.5C18.569 5.94772 18.1213 5.5 17.569 5.5C17.0167 5.5 16.569 5.94772 16.569 6.5C16.569 7.05228 17.0167 7.5 17.569 7.5ZM15.569 12C15.569 13.933 14.002 15.5 12.069 15.5C10.136 15.5 8.56897 13.933 8.56897 12C8.56897 10.067 10.136 8.5 12.069 8.5C14.002 8.5 15.569 10.067 15.569 12ZM17.069 12C17.069 14.7614 14.8304 17 12.069 17C9.30755 17 7.06897 14.7614 7.06897 12C7.06897 9.23858 9.30755 7 12.069 7C14.8304 7 17.069 9.23858 17.069 12Z"
                          fill="currentcolor"
                        />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="footer_sm-link w-inline-block"
                  >
                    <div className="icon-1x1-medium is-footer-icon w-embed">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27V18.5Z"
                          fill="currentcolor"
                        />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="footer_sm-link w-inline-block"
                  >
                    <div className="icon-1x1-medium is-footer-icon w-embed">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 4C12.855 4 13.732 4.022 14.582 4.058L15.586 4.106L16.547 4.163L17.447 4.224L18.269 4.288C19.161 4.35628 20.0004 4.73695 20.6395 5.36304C21.2786 5.98913 21.6764 6.82054 21.763 7.711L21.803 8.136L21.878 9.046C21.948 9.989 22 11.017 22 12C22 12.983 21.948 14.011 21.878 14.954L21.803 15.864C21.79 16.01 21.777 16.151 21.763 16.289C21.6764 17.1796 21.2784 18.0112 20.6391 18.6373C19.9999 19.2634 19.1602 19.6439 18.268 19.712L17.448 19.775L16.548 19.837L15.586 19.894L14.582 19.942C13.7218 19.9794 12.861 19.9987 12 20C11.139 19.9987 10.2782 19.9794 9.418 19.942L8.414 19.894L7.453 19.837L6.553 19.775L5.731 19.712C4.83895 19.6437 3.99955 19.2631 3.36047 18.637C2.72139 18.0109 2.32357 17.1795 2.237 16.289L2.197 15.864L2.122 14.954C2.04554 13.9711 2.00484 12.9858 2 12C2 11.017 2.052 9.989 2.122 9.046L2.197 8.136C2.21 7.99 2.223 7.849 2.237 7.711C2.32354 6.8207 2.72122 5.98942 3.36009 5.36334C3.99897 4.73727 4.83813 4.3565 5.73 4.288L6.551 4.224L7.451 4.163L8.413 4.106L9.417 4.058C10.2775 4.02063 11.1387 4.0013 12 4V4ZM10 9.575V14.425C10 14.887 10.5 15.175 10.9 14.945L15.1 12.52C15.1914 12.4674 15.2673 12.3916 15.3201 12.3003C15.3729 12.209 15.4007 12.1055 15.4007 12C15.4007 11.8945 15.3729 11.791 15.3201 11.6997C15.2673 11.6084 15.1914 11.5326 15.1 11.48L10.9 9.056C10.8088 9.00332 10.7053 8.9756 10.5999 8.97562C10.4945 8.97563 10.3911 9.00339 10.2998 9.0561C10.2086 9.1088 10.1329 9.1846 10.0802 9.27587C10.0276 9.36713 9.99993 9.47065 10 9.576V9.575Z"
                          fill="currentcolor"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="padding-bottom padding-huge" />
              <div className="text-color-grey6">
                © 2023 Cloudadore Devs |&nbsp;&nbsp;All rights reserved
              </div>
            </div>
            <div className="footer_bottom-component-divider" />
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Script to remove elements from DOM in mobile*/}
  {/* Jquery to set css on newletter submit button */}
  {/* Jquery to set padding top of main wrapper equal to height of navbar
                                  
                                  
                                  
                                  
                                  
                                  <!-- Code to integrate metamask in Navbar */}
  {/* script to add scroll to top functionality on tabs button
   */}
  {/* script to add 84px margin to top of first section on all page
   */}
  {/* Script to add splide slider and CSS */}
  <link
    rel="stylesheet"
    href="/Community _ Join the Polygon community_files/splide-core.min.css"
    integrity="sha256-ZAXImCY06SjVuIrJfWUETkyCctX5aGdL1AVEBX5CxZA="
    crossOrigin="anonymous"
  />
</>

  )
}

export default Homepage