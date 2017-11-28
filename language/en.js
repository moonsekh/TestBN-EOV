var Translations = {
    "SkipBackButtonText": "Skip back",
    "SkipForwardButtonText": "Skip forward",
    "PlayPauseButtonText": "Play/Pause",
    "VolumeButtonText": "Volume",
    "SettingsButtonText": "Settings",
    "ResumeVideoPlayback": "Resume Video Playback",

    "QualityMenuText": "Quality",
    "QualityAutoText": "Auto",
    "LanguageMenuText": "Language",
    "CCMenuText": "Captions",
    "BackFromText": "Back from",
    "OnText": "On",
    "OffText": "Off",

    "SocialIcon-facebook": "Facebook",
    "SocialIcon-twitter": "Twitter",
    "SocialIcon-googleplus": "Google+",
    "SocialIcon-email": "Email",
    "SocialIcon-link": "Website",
    "CollapseText": "Collapse",
    "ExpandText": "Expand",

    "PreparedForText": "Prepared for",

    "CopyrightText": "Copyright 2017 Pitney Bowes",
    "PoweredByFooterText": "Powered by",
    "HelpFooterText": "Help",
    "PrivacyPolicyFooterText": "Privacy Policy",

    /**
     * Settings for the CTA buttons.
     *
     * In this object you can define up to 5 CTA buttons, each with a "label" and "icon" property.
     * The key for each object should be unique to each button. And the "icon" property should correspond to
     * a CTA icon CSS class in the form of ".cta__icon--<icon>".
     *
     * In addition, each button can either have a "card" or "url" property to define its function.
     *
     * "card" buttons activate a side card that is defined in the video project. This property should have the value
     * of the target cards id from the Interactions Manager in the EOV Director.
     *
     * "url" buttons will open the specified URL in a new window/tab when clicked
     */
    "CtaButtonSettings": {
        "button1": {
            "card": "d1b4d742",
            "label": "Contact",
            "icon": "contact"
        },
        "button2": {
            "card": "d1b4d742",
            "label": "Website",
            "icon": "website"
        },
        "button3": {
            "card": "d1b4d742",
            "label": "Email",
            "icon": "email"
        },
        "button4": {
            "card": "d1b4d742",
            "label": "Save",
            "icon": "save"
        },
        "button5": {
            "url": "http://example.com/",
            "label": "Share",
            "icon": "share"
        }
    },

    /**
     * Settings for the promo graphic sections. By default only 2 promo areas can be defined.
     * Each promo graphic requires the following:
     *
     * "trackingName" to define how clicks on it will be tracked within the EngageOne Video platform
     * "url" to go to when the promo is clicked
     * "desktopImage" the relative path to the promo image used on desktop breakpoints. This should be portrait.
     * "mobileImage" the relative path to the promo image used on mobile breakpoints. This should be landscape.
     */    
    "PromoSettings": {
        "promo1": {
            "trackingName": "promo1",
            "url": "http://example.com/",
            "label": "Promo (Top)",
            "desktopImage": "./images/promo_portrait.png",
            "mobileImage": "./images/promo_landscape.png"
        },
        "promo2": {
            "trackingName": "promo2",
            "url": "http://example.com/",
            "label": "Promo (Bottom)",
            "desktopImage": "./images/promo_portrait.png",
            "mobileImage": "./images/promo_landscape.png"
        }
    },    
    
    /**
     * Chapter settings used to build the timeline and StateMap, which maps video states to friendly names.
     *
     * Within each "chapter" one or more states can exist. The state "width" specifies the width of the "chapter",
     * expressed as a percentage. The state "cardId" corresponds to the states id in the EngageOne Video Director.
     * There also exists "label" which specifies the label for the timeline "chapter".
     *
     * All videos have an END state, this should not be defined here as it is an implicit construct.
     */
    "ChapterSettings": [
        {
            "label": "Welcome",
            "states": [
                {
                    "cardId": "b4a86715",
                    "width": 20
                }
            ]
        },
        {
            "label": "Take Details",
            "states": [
                {
                    "cardId": "5a78a1b5",
                    "width": 20
                }
            ]
        },
        {
            "label": "Your Constituency",
            "states": [
                {
                    "cardId": "54fea00f",
                    "width": 20
                }
            ]
        },
        {
            "label": "Achievements",
            "states": [
                {
                    "cardId": "87c8489a",
                    "width": 20
                }
            ]
        },
        {
            "label": "Feedback & Closing",
            "states": [
                {
                    "cardId": "fbcb7aad",
                    "width": 20
                }
            ]
        },
    ]
}
