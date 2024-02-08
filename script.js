let user= 0
let comp= 0
const userscore_span = document.getElementById("userscore")
const compscore_span = document.getElementById("compscore")
const rock = document.getElementById("Rock")
const paper = document.getElementById("Paper")
const scissors = document.getElementById("Scissor")
let result = document.querySelector(".result")
const score = document.querySelector(".scorebord")
result.style.display = "none"
function computerchoice()
{
    const choice = ['r', 'p','s']
    const n = Math.floor(Math.random()*3)
    return(choice[n])
}
function full(u)
{
    const mapping = {"r": "Rock", "p": "Paper", "s": "Scissor"}
    return mapping[u];
}
function win(userchoice,compchoice)
{
    const smalluser = "User".fontsize(1.6).sub();
    const compuser = "Comp".fontsize(1.6).sub();
    result.innerHTML = `${userchoice}${smalluser}Covers ${compchoice}${compuser}. You Win`
    user++
    userscore_span.innerHTML = user
    document.getElementById(userchoice).classList.add('green')
    setTimeout(()=>
    {
        document.getElementById(userchoice).classList.remove('green')
    },400)
}
function lose(userchoice,compchoice)
{
    const smalluser = "User".fontsize(1.6).sub();
    const compuser = "Comp".fontsize(1.6).sub();
    result.innerHTML = `${compchoice}${compuser} Covers ${userchoice}${smalluser} . You Lose`
    comp++
    compscore_span.innerHTML=comp
    document.getElementById(userchoice).classList.add('red')
    setTimeout(()=>
    {
        document.getElementById(userchoice).classList.remove('red')
    },400)
}
function tie(userchoice,compchoice)
{
    const smalluser = "User".fontsize(1.6).sub();
    const compuser = "Comp".fontsize(1.6).sub();
    result.innerHTML = `${userchoice}${smalluser} Equals ${compchoice}${compuser}. Draw`
    document.getElementById(userchoice).classList.add('grey')
    setTimeout(()=>
    {
        document.getElementById(userchoice).classList.remove('grey')
    },400)
}
function game(userchoice)
{
    let compchoice = computerchoice()
    result.style.display = "block"
    switch(userchoice+ compchoice)
    {
        case "rs":
        case "pr":
        case "sp":
            userchoice = full(userchoice)
            compchoice = full(compchoice)
            win(userchoice,compchoice)
            break
        case "sr":
        case "rp":
        case "ps":
            userchoice = full(userchoice)
            compchoice = full(compchoice)
            lose(userchoice ,compchoice)
            break
        case "ss":
        case "rr":
        case "pp":
            userchoice = full(userchoice)
            compchoice = full(compchoice)
            tie(userchoice,compchoice)
            break
        
    }    
}
function main()
{
    rock.addEventListener('click',()=>{
        game("r")
    })
    paper.addEventListener('click',()=>{
        game("p")
    })
    scissors.addEventListener('click',()=>{
        game("s")
    })  
}
main()