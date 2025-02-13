// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Thes",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Can I be your Valentine? 💜💜°•🤍•°💜🖤",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['🖤', '💜', '💝', '💗', '💓','🌷','🌺','🌹','💜°•🤍•°💜'],  // Heart emojis
        bears: ['🐈‍⬛ ྀི', '🐈‍⬛ ྀི','👾','🐾']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "hmph you dont love me?, I love you! 💜"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "Is this bar big enough ???",                                   // Text before the percentage
            nextBtn: "Next 💜"                                         // Text for the next button
        },
        third: {
            text: "Can I be your valentine my big baby boo boo bear??? 🌷", // The big question!
            yesBtn: "Yes! (<---- the only answer)",                                             // Text for "Yes" button
            noBtn: "No (you cant say no)"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Your the best baby I lovvee you, mwah",  // Shows when they go past 5000%
        high: "Wauwwww thats it??? hmph I love you more",              // Shows when they go past 1000%
        normal: "You dont love me enough"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "AWOWOWOOWOWOWO mweheheheheh, I come plough you soon, mwgeeheehehe sjiadjdasj hehe",
        message: "I gib big hug for big baby",
        emojis: "💜°•🤍•°💜🎵.𖥔 ݁ ˖🎶๋࣭ ⭑👾💜💜"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ff00ec",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#d800ff",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#5f0080",     // Button color (should stand out against the background)
        buttonHover: "#de7eff",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#000000"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.8         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://music.youtube.com/watch?v=ZGsE5c6_QbM&si=_QRZZDvQldmardoo", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
