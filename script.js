const scrollReveal = ScrollReveal ({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
    
})

scrollReveal.reveal(
    `.left ,
    .rigth,
    #sobre,
    #work ,
    .works,
    .video1,
    .video2,
    .video3,
    #contatos,
    footer .footer`,
    { interval: 100}
);